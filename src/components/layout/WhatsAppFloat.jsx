import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <Link className="whatsapp-float" href="/contact" aria-label="Contact OSD Apparels">
      <MessageCircleMore size={22} />
    </Link>
  );
}
