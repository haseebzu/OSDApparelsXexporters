import { MessageCircleMore } from "lucide-react";
import { contact } from "@/data/site";

export function WhatsAppFloat() {
  const phone = contact.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent("Hello OSD Apparels, I would like to discuss a custom apparel manufacturing enquiry.");

  return (
    <a className="whatsapp-float" href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Message OSD Apparels on WhatsApp">
      <MessageCircleMore size={22} />
    </a>
  );
}
