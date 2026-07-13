import { saveSettingAction } from "@/lib/actions";

export function SettingsForm({ settings }) {
  return (
    <form action={saveSettingAction} className="admin-form">
      <label className="admin-field">
        <span>Admin Display Name</span>
        <input defaultValue={settings.adminDisplayName || "OSD Admin"} name="adminDisplayName" type="text" />
      </label>

      <label className="admin-field">
        <span>Notification Email</span>
        <input defaultValue={settings.notificationEmail || ""} name="notificationEmail" type="email" />
      </label>

      <label className="admin-field">
        <span>Internal Notes</span>
        <textarea
          defaultValue={settings.internalNotes || "Use this space for rollout notes, handoff comments, or admin-only reminders."}
          name="internalNotes"
        />
      </label>

      <button className="button button--gold" type="submit">
        Save Settings
      </button>
    </form>
  );
}
