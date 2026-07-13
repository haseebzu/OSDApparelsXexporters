import { Suspense } from "react";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = {
  title: "Login | OSD Admin",
};

export default function LoginPage() {
  return (
    <main className="admin-login">
      <div className="admin-login__card">
        <div className="admin-login__brand">
          <span className="section-eyebrow">OSD Admin</span>
          <strong>Secure dashboard access for OSD Apparels.</strong>
          <p>
            Sign in with an approved admin account to manage enquiries, content, testimonials, products, and site
            settings.
          </p>
        </div>

        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
