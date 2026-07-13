"use client";

export function AdminToast({ toast }) {
  if (!toast?.message) {
    return null;
  }

  return (
    <div className={`admin-toast admin-toast--${toast.type || "success"}`} role="status">
      {toast.message}
    </div>
  );
}
