import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createClient } from "@supabase/supabase-js";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#") || !line.includes("=")) {
      continue;
    }

    const separator = line.indexOf("=");
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
}

function fixMojibake(value) {
  return String(value || "")
    .replace(/â€”/g, "—")
    .replace(/â€“/g, "–")
    .replace(/â€™/g, "’")
    .replace(/â€˜/g, "‘")
    .replace(/â€œ/g, "“")
    .replace(/â€/g, "”")
    .replace(/â€¦/g, "...")
    .replace(/â†’/g, "→")
    .replace(/Â/g, "")
    .trim();
}

function inferCategory(slug, title) {
  const source = `${slug} ${title}`.toLowerCase();

  if (source.includes("kids")) return "Kidswear";
  if (source.includes("mens") || source.includes("tshirt") || source.includes("streetwear")) return "Menswear";
  if (source.includes("private-label") || source.includes("oem") || source.includes("odm") || source.includes("white-label")) {
    return "Private Label";
  }
  if (source.includes("print") || source.includes("embroid")) return "Printing & Decoration";
  if (source.includes("gots") || source.includes("oeko") || source.includes("sustain")) return "Sustainability";
  if (source.includes("quality") || source.includes("inspection") || source.includes("aql")) return "Quality Control";
  if (source.includes("shipping") || source.includes("export") || source.includes("timeline")) return "Export & Logistics";
  if (source.includes("startup") || source.includes("launch") || source.includes("new-brand")) return "Startups";
  if (source.includes("moq")) return "MOQ & Sampling";
  return "Apparel Sourcing";
}

function transformTableBlock(lines) {
  const parsed = lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split("|").map((cell) => cell.trim()).filter(Boolean))
    .filter((cells) => cells.length);

  if (parsed.length < 2) {
    return [];
  }

  const rows = parsed.slice(1).filter((cells) => !cells.every((cell) => /^-+$/.test(cell)));
  return rows.map((cells) => cells.join(" — "));
}

function cleanInlineMarkdown(value) {
  return fixMojibake(value)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function bodyToParagraphs(body) {
  const blocks = body
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  const paragraphs = [];

  for (const block of blocks) {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    if (!lines.length) continue;

    if (lines.every((line) => line.startsWith("|"))) {
      paragraphs.push(...transformTableBlock(lines));
      continue;
    }

    const text = cleanInlineMarkdown(lines.join(" "));
    if (text) {
      paragraphs.push(text);
    }
  }

  return paragraphs;
}

function parseBlogs(raw) {
  const normalized = fixMojibake(raw);
  const sections = normalized
    .split(/\r?\n---\r?\n\s*(?=# BLOG \d+)/)
    .map((entry) => entry.trim())
    .filter((entry) => entry.startsWith("# BLOG "));

  return sections.map((section, index) => {
    const seoTitle = fixMojibake(section.match(/\*\*SEO Title:\*\*\s*(.+)/)?.[1] || "");
    const metaDescription = fixMojibake(section.match(/\*\*Meta Description:\*\*\s*(.+)/)?.[1] || "");
    const focusKeyword = fixMojibake(section.match(/\*\*Focus Keyword:\*\*\s*(.+)/)?.[1] || "");
    const slug = fixMojibake(section.match(/\*\*URL Slug:\*\*\s*\/blog\/([^\s]+)/)?.[1] || "");
    const articleTitle = fixMojibake(section.match(/\n##\s+(.+)/)?.[1] || seoTitle);
    const bodyStart = section.indexOf(`## ${articleTitle}`);
    const rawBody = bodyStart >= 0 ? section.slice(bodyStart + articleTitle.length + 3).trim() : "";
    const paragraphs = bodyToParagraphs(rawBody);
    const category = inferCategory(slug, articleTitle);
    const publishDate = new Date(Date.UTC(2026, 0, index + 1, 9, 0, 0)).toISOString();

    return {
      title: articleTitle || seoTitle,
      slug,
      category,
      excerpt: metaDescription,
      content: paragraphs.join("\n\n"),
      cover_image: null,
      feature_image: null,
      status: "published",
      published: true,
      published_at: publishDate,
      updated_at: new Date().toISOString(),
      seo_title: seoTitle || articleTitle,
      meta_description: metaDescription,
      focus_keyword: focusKeyword,
    };
  });
}

async function main() {
  const workspaceRoot = process.cwd();
  loadEnvFile(path.join(workspaceRoot, ".env.local"));

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.");
  }

  const sourcePath =
    process.argv[2] ||
    "C:\\Users\\abdul\\.codex\\attachments\\9aef674f-c675-421b-9d45-1af39f29e93c\\pasted-text.txt";

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Blog source file not found: ${sourcePath}`);
  }

  const raw = fs.readFileSync(sourcePath, "utf8");
  const posts = parseBlogs(raw);

  if (!posts.length) {
    throw new Error("No blog posts were parsed from the source file.");
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const payload = posts.map(({ seo_title, meta_description, focus_keyword, ...post }) => post);
  const { error } = await supabase.from("blog_posts").upsert(payload, {
    onConflict: "slug",
  });

  if (error) {
    throw new Error(`Failed to import blog posts: ${error.message}`);
  }

  console.log(`Imported ${posts.length} blog posts into blog_posts.`);
  console.log("Cover images remain empty so you can set them later from the admin panel.");
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
