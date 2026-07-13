import { Inbox } from "lucide-react";

export function AdminEmptyState({ title, text, icon: Icon = Inbox }) {
  return (
    <div className="admin-empty">
      <div className="admin-empty__icon">{Icon ? <Icon size={18} /> : null}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
