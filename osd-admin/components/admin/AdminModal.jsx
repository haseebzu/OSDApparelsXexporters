"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export function AdminModal({ isOpen, onClose, title, children, size = "lg" }) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="admin-modal"
      onClick={onClose}
      role="dialog"
    >
      <div
        className={`admin-modal__panel admin-modal__panel--${size}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="admin-modal__header">
          <div className="admin-modal__title-group">
            <h2>{title}</h2>
          </div>
          <button
            aria-label="Close modal"
            className="admin-icon-button"
            onClick={onClose}
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <div className="admin-modal__body">{children}</div>
      </div>
    </div>
  );
}
