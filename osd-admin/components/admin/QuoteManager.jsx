"use client";

import Image from "next/image";
import { startTransition, useActionState, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Expand, Mail, Trash2 } from "lucide-react";
import { AdminModal } from "@/components/admin/AdminModal";
import { AdminToast } from "@/components/admin/AdminToast";
import { StatusBadge } from "@/components/admin/StatusBadge";
import {
  deleteEnquiryModalAction,
  replyToEnquiryModalAction,
  updateEnquiryModalAction,
} from "@/lib/actions";

const initialActionState = { ok: false, message: "" };

function EnquiryDetailModal({ enquiry, isOpen, onClose, onSuccess }) {
  const router = useRouter();
  const [saveState, saveAction, savePending] = useActionState(updateEnquiryModalAction, initialActionState);
  const [deleteState, deleteAction, deletePending] = useActionState(deleteEnquiryModalAction, initialActionState);
  const [replyState, replyAction, replyPending] = useActionState(replyToEnquiryModalAction, initialActionState);
  const [lightboxImage, setLightboxImage] = useState("");

  useEffect(() => {
    if (saveState.ok || deleteState.ok || replyState.ok) {
      const message = saveState.ok ? saveState.message : deleteState.ok ? deleteState.message : replyState.message;
      onSuccess(message);
      router.refresh();
      if (!replyState.ok) {
        onClose();
      }
    }
  }, [saveState, deleteState, replyState, router, onClose, onSuccess]);

  function handleDelete() {
    if (!window.confirm("Delete this quote enquiry? This cannot be undone.")) {
      return;
    }

    const formData = new FormData();
    formData.set("id", enquiry.id);
    startTransition(() => {
      deleteAction(formData);
    });
  }

  const gallery = enquiry.enquiry_files || [];
  const replySubject = useMemo(
    () => `Re: Your OSD Apparels quote enquiry (${enquiry.referenceId || enquiry.id.slice(0, 8)})`,
    [enquiry],
  );

  return (
    <>
      <AdminModal isOpen={isOpen} onClose={onClose} size="xl" title={`Quote Details · ${enquiry.referenceId || enquiry.id}`}>
        <div className="admin-modal__stack">
          <div className="admin-modal__info-grid">
            {[
              ["Buyer Name", enquiry.name],
              ["Company", enquiry.company || "Not provided"],
              ["Email", enquiry.email],
              ["WhatsApp", enquiry.whatsapp || "Not provided"],
              ["Country", enquiry.country || "Not provided"],
              ["Product Category", enquiry.product_category || "General enquiry"],
              ["Quantity", enquiry.quantity || "Not provided"],
              ["Fabric", enquiry.fabric || "Not provided"],
              ["Decoration", enquiry.decoration || "Not provided"],
              ["Source Page", enquiry.source_page || "quote"],
              ["Submitted", enquiry.submittedLabel],
              ["Status", enquiry.status || "new"],
            ].map(([label, value]) => (
              <div className="admin-detail" key={label}>
                <span>{label}</span>
                {label === "Status" ? <StatusBadge value={value} /> : <strong>{value}</strong>}
              </div>
            ))}
          </div>

          <div className="admin-detail">
            <span>Description</span>
            <p>{enquiry.description || "No additional brief provided."}</p>
          </div>

          <div className="admin-detail">
            <span>Reference Images</span>
            {gallery.length ? (
              <div className="admin-gallery">
                {gallery.map((file) => (
                  <button
                    className="admin-gallery__item"
                    key={file.id || file.file_url}
                    onClick={() => setLightboxImage(file.file_url)}
                    type="button"
                  >
                    <Image alt={file.file_name || "Reference image"} fill src={file.file_url} unoptimized />
                    <span className="admin-gallery__meta">
                      <Expand size={14} />
                      {file.file_name || "Open"}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p>No reference image URLs were stored for this enquiry.</p>
            )}
          </div>

          <form action={saveAction} className="admin-form admin-form--modal">
            <input name="id" type="hidden" value={enquiry.id} readOnly />
            <div className="admin-form__grid admin-form__grid--two">
              <label className="admin-field">
                <span>Status</span>
                <select defaultValue={enquiry.status || "new"} name="status">
                  <option value="new">New</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="replied">Replied</option>
                  <option value="closed">Closed</option>
                </select>
              </label>
              <label className="admin-field">
                <span>Admin Notes</span>
                <textarea defaultValue={enquiry.admin_notes || ""} name="adminNotes" placeholder="Internal notes for the team..." />
              </label>
            </div>

            {!saveState.ok && saveState.message ? <p className="admin-message admin-message--error">{saveState.message}</p> : null}

            <div className="admin-actions admin-actions--end">
              <button className="button button--gold button--compact" disabled={savePending} type="submit">
                {savePending ? "Saving..." : "Save Status"}
              </button>
            </div>
          </form>

          <form action={replyAction} className="admin-form admin-form--modal">
            <input name="id" type="hidden" value={enquiry.id} readOnly />
            <input name="email" type="hidden" value={enquiry.email} readOnly />
            <div className="admin-detail">
              <span>Reply by Email</span>
            </div>
            <label className="admin-field">
              <span>Subject</span>
              <input defaultValue={replySubject} name="subject" required type="text" />
            </label>
            <label className="admin-field">
              <span>Message</span>
              <textarea
                defaultValue={`Hello ${enquiry.name},\n\nThank you for your enquiry. Our team has reviewed your requirements and will follow up with pricing and production details shortly.\n\nBest regards,\nOSD Apparels`}
                name="message"
                required
              />
            </label>

            {!replyState.ok && replyState.message ? <p className="admin-message admin-message--error">{replyState.message}</p> : null}

            <div className="admin-modal__footer">
              <button
                className="button button--danger button--compact"
                disabled={deletePending}
                onClick={handleDelete}
                type="button"
              >
                <Trash2 size={16} />
                <span>{deletePending ? "Deleting..." : "Delete Quote"}</span>
              </button>

              <button className="button button--gold button--compact" disabled={replyPending} type="submit">
                <Mail size={16} />
                <span>{replyPending ? "Sending..." : "Reply by Email"}</span>
              </button>
            </div>
          </form>
        </div>
      </AdminModal>

      <AdminModal isOpen={Boolean(lightboxImage)} onClose={() => setLightboxImage("")} size="md" title="Reference Image">
        {lightboxImage ? (
          <div className="admin-lightbox">
            <Image alt="Reference preview" fill src={lightboxImage} unoptimized />
          </div>
        ) : null}
      </AdminModal>
    </>
  );
}

export function QuoteManager({ items }) {
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(null);

  function handleSuccess(message) {
    setToast({ type: "success", message });
    window.setTimeout(() => setToast(null), 3000);
  }

  return (
    <>
      <AdminToast toast={toast} />

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Buyer</th>
              <th>Company</th>
              <th>Email</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Country</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                className="admin-table__row-button"
                key={item.id}
                onClick={() => setSelected(item)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelected(item);
                  }
                }}
                tabIndex={0}
              >
                <td>
                  <div className="admin-table__title">
                    <strong>{item.name}</strong>
                    <span>{item.referenceId}</span>
                  </div>
                </td>
                <td>{item.company || "Not provided"}</td>
                <td>{item.email}</td>
                <td>{item.product_category || "General apparel enquiry"}</td>
                <td>{item.quantity || "Not provided"}</td>
                <td>{item.country || "Not provided"}</td>
                <td>
                  <StatusBadge value={item.status || "new"} />
                </td>
                <td>{item.submittedLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected ? (
        <EnquiryDetailModal
          enquiry={selected}
          isOpen={Boolean(selected)}
          onClose={() => setSelected(null)}
          onSuccess={handleSuccess}
        />
      ) : null}
    </>
  );
}
