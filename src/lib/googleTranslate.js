import { languageList } from "@/utils/languageList";

export const GOOGLE_TRANSLATE_STORAGE_KEY = "osd-language";
export const GOOGLE_TRANSLATE_COOKIE_KEY = "googtrans";

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

export function applyGoogleLanguage(languageCode) {
  if (typeof window === "undefined") {
    return false;
  }

  setStoredLanguage(languageCode);
  setTranslateCookie(languageCode);

  if (languageCode === "en") {
    window.location.reload();
    return true;
  }

  const select = document.querySelector(".goog-te-combo");
  if (!(select instanceof HTMLSelectElement)) {
    return false;
  }

  select.value = languageCode;
  select.dispatchEvent(new Event("change"));
  return true;
}

export function getLanguageMeta(languageCode) {
  return languageList.find((language) => language.code === languageCode) ?? languageList[0];
}
