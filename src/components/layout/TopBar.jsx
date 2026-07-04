"use client";

import { usePathname } from "next/navigation";

export function TopBar() {
  const pathname = usePathname();
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="topbar">
      <div className="topbar__track">
        <span>Modern Fashion Manufacturer & Exporter Worldwide</span>
        <span>Custom Knitted and Woven Garments</span>
        <span>Private Label and OEM Development</span>
        <span>MOQ from 30 Pieces per Style</span>
        <span>Worldwide Export Support</span>
      </div>
    </div>
  );
}
