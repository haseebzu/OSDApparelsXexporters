import { saveTestimonialAction } from "@/lib/actions";

export function TestimonialEditorForm({ testimonial }) {
  return (
    <form action={saveTestimonialAction} className="admin-form">
      <input defaultValue={testimonial?.id || ""} name="id" type="hidden" />

      <label className="admin-field">
        <span>Client Name</span>
        <input defaultValue={testimonial?.client_name || testimonial?.name || ""} name="clientName" required type="text" />
      </label>

      <label className="admin-field">
        <span>Company / Role</span>
        <input defaultValue={testimonial?.company || testimonial?.role || ""} name="company" type="text" />
      </label>

      <label className="admin-field">
        <span>Country</span>
        <input defaultValue={testimonial?.country || ""} name="country" type="text" />
      </label>

      <label className="admin-field">
        <span>Quote</span>
        <textarea defaultValue={testimonial?.quote || ""} name="quote" required />
      </label>

      <label className="admin-field">
        <span>Status</span>
        <select defaultValue={testimonial?.status || (testimonial?.visible ? "published" : "draft")} name="status">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </label>

      <button className="button button--gold" type="submit">
        Save Testimonial
      </button>
    </form>
  );
}
