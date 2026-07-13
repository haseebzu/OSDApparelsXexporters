import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .max(300, "Field is too long.")
  .optional()
  .or(z.literal(""));

const requiredText = (label, max = 300) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required.`)
    .max(max, `${label} is too long.`);

const phoneSchema = z
  .string()
  .trim()
  .min(1, "Contact number is required.")
  .max(30, "Contact number is too long.")
  .refine((value) => /^[+\d\s()\-]+$/.test(value), "Enter a valid contact number.")
  .refine((value) => value.replace(/\D/g, "").length >= 7, "Enter a valid contact number.");

export const enquirySchema = z.object({
  sourcePage: z.string().trim().min(1).max(50),
  name: z.string().trim().min(2, "Full name is required.").max(120),
  company: requiredText("Company name", 160),
  email: z.string().trim().email("A valid email is required.").max(120),
  whatsapp: phoneSchema,
  country: requiredText("Country", 120),
  productCategory: requiredText("Product category", 160),
  quantity: requiredText("Quantity", 120),
  fabric: requiredText("Fabric preference", 160),
  decoration: optionalText,
  description: z.string().trim().max(4000, "Design description is too long.").optional().or(z.literal("")),
});

function sanitizeInput(value, { preserveNewLines = false } = {}) {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = preserveNewLines
    ? value.replace(/\r\n/g, "\n").replace(/\r/g, "\n")
    : value.replace(/[\r\n]+/g, " ");

  return normalized.replace(/[^\S\n]+/g, " ").trim();
}

export function buildEnquiryPayload(formData) {
  return {
    sourcePage: sanitizeInput(formData.get("sourcePage")) || "quote",
    name: sanitizeInput(formData.get("name")),
    company: sanitizeInput(formData.get("company")),
    email: sanitizeInput(formData.get("email")),
    whatsapp: sanitizeInput(formData.get("whatsapp")),
    country: sanitizeInput(formData.get("country")),
    productCategory: sanitizeInput(formData.get("productCategory")),
    quantity: sanitizeInput(formData.get("quantity")),
    fabric: sanitizeInput(formData.get("fabric")),
    decoration: sanitizeInput(formData.get("decoration")),
    description: sanitizeInput(formData.get("description"), { preserveNewLines: true }),
  };
}

export function getReferenceFiles(formData) {
  return formData
    .getAll("referenceImages")
    .filter((entry) => entry instanceof File && entry.size > 0);
}

export function validateReferenceFiles(files) {
  const maxFiles = 5;
  const maxSize = 10 * 1024 * 1024;

  if (files.length > maxFiles) {
    const error = new Error(`You can upload up to ${maxFiles} reference files.`);
    error.status = 400;
    throw error;
  }

  files.forEach((file) => {
    if (file.size > maxSize) {
      const error = new Error(`${file.name} exceeds the 10 MB limit.`);
      error.status = 400;
      throw error;
    }
  });
}

export function createReferenceId(enquiryId, submittedAt = new Date()) {
  const date = submittedAt instanceof Date ? submittedAt : new Date(submittedAt);
  const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(
    date.getDate()
  ).padStart(2, "0")}`;

  return `Q-${datePart}-${enquiryId.slice(0, 8).toUpperCase()}`;
}
