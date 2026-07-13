function getMax(items) {
  return Math.max(...items.map((item) => item.value), 1);
}

export function AdminVolumeChart({ series = [] }) {
  const max = getMax(series);

  return (
    <div className="admin-chart">
      <div className="admin-chart__header">
        <div>
          <h3>Enquiry Volume</h3>
          <p>Last {series.length || 0} months of inbound quote and contact activity.</p>
        </div>
        <span className="admin-chart__chip">Monthly</span>
      </div>

      <div className="admin-chart__plot" aria-label="Enquiry volume chart" role="img">
        {series.map((item) => {
          const height = `${Math.max((item.value / max) * 100, item.value ? 12 : 4)}%`;

          return (
            <div className="admin-chart__column" key={item.key}>
              <span className="admin-chart__value">{item.value}</span>
              <div className="admin-chart__bar-wrap">
                <div className="admin-chart__bar" style={{ height }} />
              </div>
              <span className="admin-chart__label">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
