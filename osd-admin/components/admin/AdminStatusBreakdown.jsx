function buildDonutStyle(items) {
  const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
  let current = 0;

  const toneMap = {
    new: "var(--admin-status-new)",
    reviewed: "var(--admin-status-reviewed)",
    replied: "var(--admin-status-replied)",
    closed: "var(--admin-status-closed)",
    published: "var(--admin-status-replied)",
    draft: "var(--admin-status-new)",
    muted: "var(--admin-status-closed)",
  };

  const segments = items
    .map((item) => {
      const start = Math.round((current / total) * 360);
      current += item.value;
      const end = Math.round((current / total) * 360);
      return `${toneMap[item.tone] || toneMap.muted} ${start}deg ${end}deg`;
    })
    .join(", ");

  return {
    background: `conic-gradient(${segments || `${toneMap.muted} 0deg 360deg`})`,
  };
}

export function AdminStatusBreakdown({ items = [] }) {
  const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="admin-breakdown">
      <div className="admin-chart__header">
        <div>
          <h3>Status Breakdown</h3>
          <p>Live split of enquiry workflow stages across the pipeline.</p>
        </div>
      </div>

      <div className="admin-breakdown__body">
        <div className="admin-breakdown__donut" style={buildDonutStyle(items)}>
          <div className="admin-breakdown__center">
            <strong>{total}</strong>
            <span>Total</span>
          </div>
        </div>

        <div className="admin-breakdown__list">
          {items.map((item) => {
            const percentage = total ? Math.round((item.value / total) * 100) : 0;
            return (
              <div className="admin-breakdown__row" key={item.label}>
                <div className="admin-breakdown__meta">
                  <span className={`admin-breakdown__dot admin-breakdown__dot--${item.tone || "muted"}`} />
                  <strong>{item.label}</strong>
                </div>
                <div className="admin-breakdown__numbers">
                  <span>{item.value}</span>
                  <small>{percentage}%</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
