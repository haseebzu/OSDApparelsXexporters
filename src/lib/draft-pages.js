import { notFound } from "next/navigation";

export const draftPageRoutes = new Set([
  "/export-markets",
]);

export function areDraftPagesVisible() {
  return process.env.SHOW_DRAFT_PAGES === "true";
}

export function requireVisibleDraftPage(path) {
  if (!draftPageRoutes.has(path) || !areDraftPagesVisible()) {
    notFound();
  }
}
