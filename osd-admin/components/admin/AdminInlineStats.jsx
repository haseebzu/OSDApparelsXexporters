export function AdminInlineStats({ items = [] }) {
  return (
    <div className="admin-inline-stats" role="list" aria-label="Summary statistics">
      {items.map((item) => (
        <div className="admin-inline-stats__item" key={item.label} role="listitem">
          <strong className={`admin-inline-stats__value admin-inline-stats__value--${item.tone || "muted"}`}>
            {item.value}
          </strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
