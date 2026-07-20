import nodemailer from "nodemailer";

let cachedTransporter;

export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export function getFromAddress() {
  return process.env.EMAIL_FROM || process.env.SMTP_USER || "osdapparels@gmail.com";
}

export function getTransporter() {
  if (!isMailConfigured()) {
    throw new Error("SMTP environment variables are not configured.");
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Boolean(process.env.SMTP_SECURE),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return cachedTransporter;
}
