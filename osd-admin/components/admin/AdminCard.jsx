export function AdminCard({ title, description, action, children }) {
  return (
    <section className="admin-card">
      <div className="admin-card__pad">
        {(title || description || action) ? (
          <div className="admin-card__header">
            <div>
              {title ? <h2>{title}</h2> : null}
              {description ? <p>{description}</p> : null}
            </div>
            {action}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
