import { logoutAction } from "@/lib/actions";

function buildInitial(email) {
  return (email || "A").slice(0, 1).toUpperCase();
}

export function AdminTopbar({ user }) {
  const email = user?.email || "admin@osdapparels.com";

  return (
    <header className="admin-topbar">
      <div className="admin-topbar__title">
        <h1>OSD Apparels Admin</h1>
        <p>Separate internal workspace for enquiries, publishing, testimonials, and settings.</p>
      </div>

      <div className="admin-topbar__actions">
        <div className="admin-topbar__identity">
          <span className="admin-topbar__avatar">{buildInitial(email)}</span>
          <span>{email}</span>
        </div>

        <form action={logoutAction}>
          <button className="button button--outline button--compact" type="submit">
            Logout
          </button>
        </form>
      </div>
    </header>
  );
}
