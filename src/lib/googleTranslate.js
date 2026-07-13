import { languageList } from "@/utils/languageList";

export const GOOGLE_TRANSLATE_STORAGE_KEY = "osd-language";
export const GOOGLE_TRANSLATE_COOKIE_KEY = "googtrans";
export const GOOGLE_TRANSLATE_REFRESH_KEY = "osd-language-refresh";
const TRANSLATE_SELECT_SELECTOR = ".goog-te-combo";

function findTranslateSelect() {
  const select = document.querySelector(TRANSLATE_SELECT_SELECTOR);
  return select instanceof HTMLSelectElement ? select : null;
}

function triggerLanguageChange(select, languageCode) {
  select.value = languageCode;
  select.dispatchEvent(new Event("change", { bubbles: true }));
  select.dispatchEvent(new Event("input", { bubbles: true }));
}

function scheduleTranslateRefresh(languageCode) {
  if (typeof window === "undefined") {
    return;
  }

  const refreshToken = `${languageCode}:${Date.now()}`;
  window.sessionStorage.setItem(GOOGLE_TRANSLATE_REFRESH_KEY, refreshToken);

  window.setTimeout(() => {
    const currentToken = window.sessionStorage.getItem(GOOGLE_TRANSLATE_REFRESH_KEY);
    if (currentToken === refreshToken) {
      window.location.reload();
    }
  }, 500);
}

export function clearScheduledTranslateRefresh() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(GOOGLE_TRANSLATE_REFRESH_KEY);
}

export function getIncludedLanguages() {
  return languageList.map((language) => language.code).join(",");
}

export function getStoredLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(GOOGLE_TRANSLATE_STORAGE_KEY) || "en";
}

export function setStoredLanguage(languageCode) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(GOOGLE_TRANSLATE_STORAGE_KEY, languageCode);
}

export function setTranslateCookie(languageCode) {
  if (typeof document === "undefined") {
    return;
  }

  const value = `/en/${languageCode}`;
  document.cookie = `${GOOGLE_TRANSLATE_COOKIE_KEY}=${value};path=/;max-age=31536000`;
}

export function applyGoogleLanguage(languageCode, options = {}) {
  if (typeof window === "undefined") {
    return false;
  }

  const { reloadAfterApply = false } = options;

  setStoredLanguage(languageCode);
  setTranslateCookie(languageCode);

  if (languageCode === "en") {
    clearScheduledTranslateRefresh();
    window.location.reload();
    return true;
  }

  const select = findTranslateSelect();
  if (select) {
    triggerLanguageChange(select, languageCode);
    if (reloadAfterApply) {
      scheduleTranslateRefresh(languageCode);
    }
    return true;
  }

  let attempts = 0;
  const maxAttempts = 30;
  const intervalId = window.setInterval(() => {
    const pendingSelect = findTranslateSelect();
    attempts += 1;

    if (pendingSelect) {
      triggerLanguageChange(pendingSelect, languageCode);
      if (reloadAfterApply) {
        scheduleTranslateRefresh(languageCode);
      }
      window.clearInterval(intervalId);
      return;
    }

    if (attempts >= maxAttempts) {
      window.clearInterval(intervalId);
      if (reloadAfterApply) {
        scheduleTranslateRefresh(languageCode);
      }
    }
  }, 200);

  return true;
}

export function getLanguageMeta(languageCode) {
  return languageList.find((language) => language.code === languageCode) ?? languageList[0];
}
