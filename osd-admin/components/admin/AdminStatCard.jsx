import { ArrowUpRight } from "lucide-react";

export function AdminStatCard({ label, value, meta, icon: Icon, trend, featured = false }) {
  return (
    <div className={`admin-card admin-stat${featured ? " admin-stat--featured" : ""}`}>
      <div className="admin-stat__top">
        <div className="admin-stat__icon">{Icon ? <Icon size={18} /> : null}</div>
        {trend ? (
          <span className={`admin-stat__trend admin-stat__trend--${trend.tone || "muted"}`}>
            <ArrowUpRight size={14} />
            {trend.label}
          </span>
        ) : null}
      </div>
      <strong>{value}</strong>
      <span>{label}</span>
      <small>{meta}</small>
    </div>
  );
}
