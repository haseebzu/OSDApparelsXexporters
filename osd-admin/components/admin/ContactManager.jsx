"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { AdminModal } from "@/components/admin/AdminModal";
import { AdminToast } from "@/components/admin/AdminToast";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { deleteContactModalAction, updateContactModalAction } from "@/lib/actions";

const initialActionState = { ok: false, message: "" };

function ContactDetailModal({ contact, isOpen, onClose, onSuccess }) {
  const router = useRouter();
  const [saveState, saveAction, savePending] = useActionState(updateContactModalAction, initialActionState);
  const [deleteState, deleteAction, deletePending] = useActionState(deleteContactModalAction, initialActionState);

  useEffect(() => {
    if (saveState.ok || deleteState.ok) {
      const message = saveState.ok ? saveState.message : deleteState.message;
      onSuccess(message);
      router.refresh();
      onClose();
    }
  }, [saveState, deleteState, router, onClose, onSuccess]);

  function handleDelete() {
    if (!window.confirm("Delete this contact record? This cannot be undone.")) {
      return;
    }

    const formData = new FormData();
    formData.set("id", contact.id);
    startTransition(() => {
      deleteAction(formData);
    });
  }

  return (
    <AdminModal isOpen={isOpen} onClose={onClose} size="lg" title={`Contact Details · ${contact.name}`}>
      <div className="admin-modal__stack">
        <div className="admin-modal__info-grid">
          {[
            ["Name", contact.name],
            ["Email", contact.email],
            ["WhatsApp", contact.whatsapp || "Not provided"],
            ["Country", contact.country || "Not provided"],
            ["Company", contact.company || "Not provided"],
            ["Submitted", contact.submittedLabel],
            ["Status", contact.status || "new"],
          ].map(([label, value]) => (
            <div className="admin-detail" key={label}>
              <span>{label}</span>
              {label === "Status" ? <StatusBadge value={value} /> : <strong>{value}</strong>}
            </div>
          ))}
        </div>

        <div className="admin-detail">
          <span>Full Message</span>
          <p>{contact.message || "No message provided."}</p>
        </div>

        <form action={saveAction} className="admin-form admin-form--modal">
          <input name="id" type="hidden" value={contact.id} readOnly />

          <div className="admin-form__grid admin-form__grid--two">
            <label className="admin-field">
              <span>Status</span>
              <select defaultValue={contact.status || "new"} name="status">
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="replied">Replied</option>
                <option value="closed">Closed</option>
              </select>
            </label>
            <label className="admin-field">
              <span>Admin Notes</span>
              <textarea defaultValue={contact.admin_notes || ""} name="adminNotes" placeholder="Internal notes for the team..." />
            </label>
          </div>

          {!saveState.ok && saveState.message ? <p className="admin-message admin-message--error">{saveState.message}</p> : null}
          {!deleteState.ok && deleteState.message ? <p className="admin-message admin-message--error">{deleteState.message}</p> : null}

          <div className="admin-modal__footer">
            <button
              className="button button--danger button--compact"
              disabled={deletePending}
              onClick={handleDelete}
              type="button"
            >
              <Trash2 size={16} />
              <span>{deletePending ? "Deleting..." : "Delete Contact"}</span>
            </button>
            <button className="button button--gold button--compact" disabled={savePending} type="submit">
              {savePending ? "Saving..." : "Save Contact"}
            </button>
          </div>
        </form>
      </div>
    </AdminModal>
  );
}

export function ContactManager({ items }) {
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
              <th>Name</th>
              <th>Email</th>
              <th>WhatsApp</th>
              <th>Country</th>
              <th>Message Preview</th>
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
                    <span>{item.company || item.email}</span>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.whatsapp || "Not provided"}</td>
                <td>{item.country || "Not provided"}</td>
                <td>{String(item.message || "").slice(0, 80) || "No preview available."}</td>
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
        <ContactDetailModal
          contact={selected}
          isOpen={Boolean(selected)}
          onClose={() => setSelected(null)}
          onSuccess={handleSuccess}
        />
      ) : null}
    </>
  );
}
