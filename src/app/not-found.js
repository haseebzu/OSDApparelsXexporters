import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container empty-state">
        <p className="section-eyebrow">404</p>
        <h1 className="section-title">This page could not be found.</h1>
        <p className="section-text">The route may have moved, or the content has not been added yet.</p>
        <Link className="button button--gold" href="/">Back to Homepage</Link>
      </div>
    </section>
  );
}
