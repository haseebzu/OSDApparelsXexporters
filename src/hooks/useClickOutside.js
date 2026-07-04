"use client";

import { useEffect } from "react";

export function useClickOutside(refs, onOutsideClick, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    function handlePointerDown(event) {
      const clickedInside = refs.some((ref) => ref.current?.contains(event.target));
      if (!clickedInside) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [enabled, onOutsideClick, refs]);
}
