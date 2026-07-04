import nodemailer from "nodemailer";

let cachedTransporter;

export function isMailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.COMPANY_EMAIL
  );
}

export function getTransporter() {
  if (!isMailConfigured()) {
    throw new Error("SMTP environment variables are not configured.");
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return cachedTransporter;
}

export function getFromAddress() {
  const companyEmail = process.env.COMPANY_EMAIL || process.env.SMTP_USER;
  return `"OSD Apparels" <${companyEmail}>`;
}
