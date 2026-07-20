import fs from "node:fs";
import path from "node:path";
import { render } from "@react-email/render";
import { CompanyInquiry } from "@/emails/CompanyInquiry";
import { CustomerConfirmation } from "@/emails/CustomerConfirmation";
import { getFromAddress, getTransporter, isMailConfigured } from "@/lib/transporter";

function getLogoAttachment() {
  const logoPath = path.join(process.cwd(), "public", "images", "osd-logo.png");

  if (!fs.existsSync(logoPath)) {
    return null;
  }

  return {
    filename: "osd-logo.png",
    path: logoPath,
    cid: "osd-logo",
  };
}

async function sendMail(options) {
  const transporter = getTransporter();
  return transporter.sendMail(options);
}

async function sendCompanyInquiryOnce({ enquiry, files, referenceId }) {
  const logoAttachment = getLogoAttachment();
  const html = await render(
    <CompanyInquiry enquiry={enquiry} files={files} referenceId={referenceId} logoSrc={logoAttachment ? "cid:osd-logo" : ""} />
  );
  const text = await render(
    <CompanyInquiry enquiry={enquiry} files={files} referenceId={referenceId} logoSrc="" />,
    { plainText: true }
  );

  return sendMail({
    from: getFromAddress(),
    to: process.env.COMPANY_EMAIL,
    replyTo: enquiry.email,
    subject: `New Quote Request - ${enquiry.name}`,
    html,
    text,
    attachments: logoAttachment ? [logoAttachment] : [],
  });
}

export async function sendCompanyInquiry({ enquiry, files, referenceId }) {
  try {
    return await sendCompanyInquiryOnce({ enquiry, files, referenceId });
  } catch (error) {
    console.error("Company email send failed. Retrying once.", error);
    return sendCompanyInquiryOnce({ enquiry, files, referenceId });
  }
}

export async function sendCustomerConfirmation({ enquiry, referenceId }) {
  const logoAttachment = getLogoAttachment();
  const html = await render(
    <CustomerConfirmation enquiry={enquiry} referenceId={referenceId} logoSrc={logoAttachment ? "cid:osd-logo" : ""} />
  );
  const text = await render(
    <CustomerConfirmation enquiry={enquiry} referenceId={referenceId} logoSrc="" />,
    { plainText: true }
  );

  return sendMail({
    from: getFromAddress(),
    to: enquiry.email,
    subject: "Thank you for contacting OSD Apparels",
    html,
    text,
    attachments: logoAttachment ? [logoAttachment] : [],
  });
}

export async function sendAdminReplyEmail({ to, subject, message, replyTo }) {
  const text = message.trim();
  const html = text
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
    .join("");

  return sendMail({
    from: getFromAddress(),
    to,
    replyTo: replyTo || process.env.COMPANY_EMAIL,
    subject,
    text,
    html,
  });
}

export { isMailConfigured };
