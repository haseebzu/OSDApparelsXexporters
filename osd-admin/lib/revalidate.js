export async function requestPublicRevalidation({ paths = [], tags = [] } = {}) {
  if (!process.env.PUBLIC_SITE_URL || !process.env.REVALIDATE_SECRET) {
    return { ok: false, message: "PUBLIC_SITE_URL or REVALIDATE_SECRET is missing." };
  }

  try {
    const response = await fetch(`${process.env.PUBLIC_SITE_URL}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": process.env.REVALIDATE_SECRET,
      },
      body: JSON.stringify({ paths, tags }),
      cache: "no-store",
    });

    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      return { ok: false, message: result.error || "Revalidation request failed." };
    }

    return { ok: true };
  } catch (error) {
    console.error("Public-site revalidation failed:", error);
    return { ok: false, message: error.message || "Revalidation request failed." };
  }
}
