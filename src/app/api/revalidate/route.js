import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const secret = request.headers.get("x-revalidate-secret") || body.secret;

    if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ error: "Unauthorized revalidation request." }, { status: 401 });
    }

    const paths = Array.isArray(body.paths) ? body.paths : [];
    const tags = Array.isArray(body.tags) ? body.tags : [];

    paths.forEach((path) => {
      if (typeof path === "string" && path.startsWith("/")) {
        revalidatePath(path);
      }
    });

    tags.forEach((tag) => {
      if (typeof tag === "string" && tag.trim()) {
        revalidateTag(tag);
      }
    });

    return NextResponse.json({
      revalidated: true,
      paths,
      tags,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation request failed:", error);
    return NextResponse.json({ error: "Revalidation failed." }, { status: 500 });
  }
}
