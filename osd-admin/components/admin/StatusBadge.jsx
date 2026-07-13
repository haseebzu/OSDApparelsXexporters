function mapStatus(value) {
  const normalized = String(value || "").toLowerCase();

  if (["new", "draft"].includes(normalized)) return normalized;
  if (["reviewed", "active"].includes(normalized)) return normalized;
  if (["replied", "published"].includes(normalized)) return normalized;
  if (["closed", "muted"].includes(normalized)) return normalized;
  return "muted";
}

export function StatusBadge({ value }) {
  const tone = mapStatus(value);
  return (
    <span className={`admin-badge admin-badge--${tone}`}>
      <span className="admin-badge__dot" />
      {value || "Muted"}
    </span>
  );
}
