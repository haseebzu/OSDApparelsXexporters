import { NextResponse } from "next/server";
import { uploadBufferToR2, isR2Configured } from "@/lib/r2";
import { sendCompanyInquiry, sendCustomerConfirmation, isMailConfigured } from "@/lib/mail";
import { getSupabaseAdminClient, isSupabaseConfigured } from "@/lib/supabase";
import {
  buildEnquiryPayload,
  createReferenceId,
  enquirySchema,
  getReferenceFiles,
  validateReferenceFiles,
} from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function uploadReferenceFiles(enquiryId, files) {
  const uploadedFiles = [];

  for (const file of files) {
    try {
      let uploadResult = null;

      if (isR2Configured()) {
        const buffer = Buffer.from(await file.arrayBuffer());
        uploadResult = await uploadBufferToR2({
          buffer,
          fileName: file.name,
          contentType: file.type,
        });
      }

      uploadedFiles.push({
        enquiryId,
        fileName: file.name,
        fileKey: uploadResult?.key || "",
        fileUrl: uploadResult?.url || "",
        fileSize: file.size,
        mimeType: file.type || "application/octet-stream",
      });
    } catch (error) {
      console.error("Reference file upload failed:", error);
      uploadedFiles.push({
        enquiryId,
        fileName: file.name,
        fileKey: "",
        fileUrl: "",
        fileSize: file.size,
        mimeType: file.type || "application/octet-stream",
      });
    }
  }

  return uploadedFiles;
}

async function saveEnquiry(enquiry) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("enquiries").insert({
    id: enquiry.id,
    source_page: enquiry.sourcePage,
    name: enquiry.name,
    company: enquiry.company || null,
    email: enquiry.email,
    whatsapp: enquiry.whatsapp || null,
    country: enquiry.country || null,
    product_category: enquiry.productCategory || null,
    quantity: enquiry.quantity || null,
    fabric: enquiry.fabric || null,
    decoration: enquiry.decoration || null,
    description: enquiry.description || "No design description provided.",
    status: enquiry.status,
  });

  if (error) {
    console.error("Supabase enquiry insert failed:", error);
    const failure = new Error(
      process.env.NODE_ENV === "development"
        ? `Supabase insert failed: ${error.message}`
        : "We could not save your enquiry right now."
    );
    failure.status = 500;
    throw failure;
  }
}

async function saveUploadedFileRecords(files) {
  const records = files.filter((file) => file.fileUrl);
  if (!records.length) {
    return;
  }

  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("enquiry_files").insert(
    records.map((file) => ({
      enquiry_id: file.enquiryId,
      file_name: file.fileName,
      file_key: file.fileKey,
      file_url: file.fileUrl,
      file_size: file.fileSize,
      mime_type: file.mimeType,
    }))
  );

  if (error) {
    console.error("Enquiry file records could not be saved:", error);
  }
}

export async function POST(request) {
  try {
    if (!isSupabaseConfigured()) {
      throw new Error("Supabase environment variables are not configured.");
    }

    const formData = await request.formData();
    const payload = buildEnquiryPayload(formData);
    const parsed = enquirySchema.safeParse(payload);

    if (!parsed.success) {
      console.error("Quote validation failed:", parsed.error.flatten());
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ||
            "Please review the form fields and try again.",
        },
        { status: 400 }
      );
    }

    const files = getReferenceFiles(formData);
    validateReferenceFiles(files);

    const submittedAt = new Date();
    const enquiryId = crypto.randomUUID();
    const enquiry = {
      id: enquiryId,
      ...parsed.data,
      description: parsed.data.description || "No design description provided.",
      status: "new",
      submittedAt: submittedAt.toISOString(),
    };
    const referenceId = createReferenceId(enquiryId, submittedAt);

    await saveEnquiry(enquiry);

    const uploadedFiles = await uploadReferenceFiles(enquiryId, files);
    await saveUploadedFileRecords(uploadedFiles);

    if (isMailConfigured()) {
      try {
        await sendCompanyInquiry({
          enquiry,
          files: uploadedFiles,
          referenceId,
        });
      } catch (error) {
        console.error("Company inquiry email failed after retry:", error);
      }

      try {
        await sendCustomerConfirmation({
          enquiry,
          referenceId,
        });
      } catch (error) {
        console.error("Customer confirmation email failed:", error);
      }
    } else {
      console.warn("SMTP configuration missing. Quote emails were skipped.");
    }

    return NextResponse.json({
      success: true,
      enquiryId,
      referenceId,
      uploadedFiles: uploadedFiles.length,
    });
  } catch (error) {
    console.error("Enquiry submission failed:", error);
    return NextResponse.json(
      {
        error: error.message || "We could not submit your enquiry right now.",
      },
      { status: error.status || 500 }
    );
  }
}
