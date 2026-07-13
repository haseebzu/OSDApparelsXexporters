"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { countries } from "@/utils/countries";

const fields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "company", label: "Company Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "whatsapp", label: "Contact Number", type: "text", required: true },
  { name: "country", label: "Country", type: "select", required: true },
  { name: "productCategory", label: "Product Category", type: "text", required: true },
  { name: "quantity", label: "Quantity", type: "text", required: true },
  { name: "fabric", label: "Fabric Preference", type: "text", required: true },
];

const emailPattern = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Enter a valid email address.",
};

const phonePattern = {
  value: /^[+\d\s()\-]+$/,
  message: "Enter a valid contact number.",
};

export function QuoteForm({ compact = false, sourcePage = "quote" }) {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      country: "",
      decoration: "",
      description: "",
    },
  });

  const previewUrl = useMemo(() => {
    const firstImage = selectedFiles.find((file) => file.type.startsWith("image/"));
    return firstImage ? URL.createObjectURL(firstImage) : "";
  }, [selectedFiles]);

  useEffect(() => () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  }, [previewUrl]);

  const onSubmit = handleSubmit(async (values) => {
    setBusy(true);
    setSubmitError("");

    try {
      const formData = new FormData();
      const payload = {
        ...values,
        sourcePage,
      };

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });

      selectedFiles.forEach((file) => {
        formData.append("referenceImages", file);
      });

      const response = await fetch("/api/enquiries", {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || "We could not submit your enquiry right now.");
      }

      setSubmitted(true);
      reset();
      setSelectedFiles([]);
      setValue("referenceImages", "");
    } catch (error) {
      setSubmitError(error.message || "Something went wrong while sending your enquiry.");
    } finally {
      setBusy(false);
    }
  });

  if (submitted) {
    return (
      <div className="form-success">
        <p className="section-eyebrow">Enquiry Received</p>
        <h3>We have received your request.</h3>
        <p>Our team will review your requirements, prepare the quote, and follow up within 24 hours.</p>
        <div className="timeline">
          <span>Review in 1 hour</span>
          <span>Quote in 24 hours</span>
          <span>Follow-up in 48 hours</span>
        </div>
      </div>
    );
  }

  return (
    <form className={compact ? "quote-form quote-form--compact" : "quote-form"} onSubmit={onSubmit}>
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name} className="field">
            <span>{field.label}</span>
            {field.type === "select" ? (
              <select
                defaultValue=""
                {...register(field.name, {
                  required: `${field.label} is required.`,
                })}
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                {...register(field.name, {
                  required: field.required ? `${field.label} is required.` : false,
                  ...(field.name === "email" ? { pattern: emailPattern } : {}),
                  ...(field.name === "whatsapp"
                    ? {
                        pattern: phonePattern,
                        validate: (value) =>
                          value.replace(/\D/g, "").length >= 7 || "Enter a valid contact number.",
                      }
                    : {}),
                })}
              />
            )}
            {errors[field.name] ? <small>{errors[field.name].message}</small> : null}
          </label>
        ))}

        <label className="field">
          <span>Decoration Type</span>
          <input type="text" {...register("decoration")} />
        </label>

        <label className="field field--wide">
          <span>Design Description</span>
          <textarea rows={5} {...register("description")} />
        </label>

        <label className="field field--wide">
          <span>Reference Images</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => {
              const files = Array.from(event.target.files ?? []);
              setSelectedFiles(files);
              setValue("referenceImages", files.map((file) => file.name).join(", "), {
                shouldDirty: true,
              });
            }}
          />
          <p className="field__hint">
            Add design references, sketches, or sample photos. We support up to 5 files, 10 MB each.
          </p>
        </label>

        {selectedFiles.length ? (
          <div className="upload-preview field--wide">
            {previewUrl ? (
              <div className="upload-preview__image">
                <Image src={previewUrl} alt="Reference preview" fill className="upload-preview__img" unoptimized />
              </div>
            ) : null}
            <div className="upload-preview__files">
              <strong>{selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected</strong>
              <div className="upload-preview__list">
                {selectedFiles.map((file) => (
                  <span key={`${file.name}-${file.size}`}>{file.name}</span>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {submitError ? <p className="field__hint">{submitError}</p> : null}

      <button className="button button--gold" disabled={busy} type="submit">
        {busy ? "Sending..." : "Request Detailed Quote"}
      </button>
    </form>
  );
}
