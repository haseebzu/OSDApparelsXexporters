import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

let cachedR2Client;

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9.-]/g, "-").replace(/-+/g, "-");
}

export function isR2Configured() {
  return Boolean(
    process.env.R2_ACCOUNT_ID &&
      process.env.R2_ACCESS_KEY_ID &&
      process.env.R2_SECRET_ACCESS_KEY &&
      process.env.R2_BUCKET_NAME &&
      process.env.R2_PUBLIC_URL
  );
}

function getR2Client() {
  if (!isR2Configured()) {
    throw new Error("Cloudflare R2 environment variables are not configured.");
  }

  if (!cachedR2Client) {
    cachedR2Client = new S3Client({
      region: "auto",
      endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
      },
    });
  }

  return cachedR2Client;
}

export async function uploadBufferToR2({
  buffer,
  fileName,
  contentType,
  folder = "enquiries",
}) {
  const client = getR2Client();
  const date = new Date();
  const key = [
    folder,
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    `${crypto.randomUUID()}-${sanitizeFileName(fileName)}`,
  ].join("/");

  await client.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType || "application/octet-stream",
    })
  );

  return {
    key,
    url: `${process.env.R2_PUBLIC_URL.replace(/\/$/, "")}/${key}`,
  };
}
