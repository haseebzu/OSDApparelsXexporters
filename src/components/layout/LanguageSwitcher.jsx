"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe2, Search } from "lucide-react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  applyGoogleLanguage,
  clearScheduledTranslateRefresh,
  getLanguageMeta,
  getStoredLanguage,
} from "@/lib/googleTranslate";
import { languageList } from "@/utils/languageList";

const dropdownMotion = {
  initial: { opacity: 0, y: 15, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 15, scale: 0.96 },
  transition: { duration: 0.25, ease: "easeOut" },
};

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const deferredQuery = useDeferredValue(query);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const searchRef = useRef(null);
  const optionRefs = useRef([]);

  const filteredLanguages = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();
    if (!normalized) return languageList;

    return languageList.filter((language) =>
      [language.nativeName, language.englishName, language.code]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    );
  }, [deferredQuery]);

  const activeMeta = getLanguageMeta(activeLanguage);

  useClickOutside([buttonRef, panelRef], () => setOpen(false), open);

  useEffect(() => {
    clearScheduledTranslateRefresh();

    const frameId = window.requestAnimationFrame(() => {
      setActiveLanguage(getStoredLanguage());
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    function handleReady() {
      const storedLanguage = getStoredLanguage();
      setActiveLanguage(storedLanguage);
      if (storedLanguage !== "en") {
        window.setTimeout(() => {
          applyGoogleLanguage(storedLanguage);
        }, 350);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handleRouteChange() {
      setOpen(false);
    }

    window.addEventListener("osd-google-translate-ready", handleReady);
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("osd-google-translate-ready", handleReady);
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    window.setTimeout(() => {
      searchRef.current?.focus();
    }, 10);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const button = optionRefs.current[focusedIndex];
    if (button) {
      button.focus();
    }
  }, [focusedIndex, open]);

  function handleSelect(languageCode) {
    setActiveLanguage(languageCode);
    applyGoogleLanguage(languageCode, { reloadAfterApply: true });
    setOpen(false);
    setQuery("");
    buttonRef.current?.focus();
  }

  function handleListKeyDown(event) {
    if (!filteredLanguages.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusedIndex((current) => (current + 1) % filteredLanguages.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((current) => (current - 1 + filteredLanguages.length) % filteredLanguages.length);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const target = filteredLanguages[focusedIndex];
      if (target) {
        handleSelect(target.code);
      }
    }
  }

  return (
    <div className="language-nav">
      <button
        ref={buttonRef}
        type="button"
        className="button button--outline button--compact language-nav__button"
        aria-label="Open language selector"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setFocusedIndex(0);
          setOpen((value) => !value);
        }}
      >
        <Globe2 size={16} />
        <span>Language</span>
        <ChevronDown size={16} className={`language-nav__chevron${open ? " language-nav__chevron--open" : ""}`} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            className="language-nav__dropdown"
            initial={dropdownMotion.initial}
            animate={dropdownMotion.animate}
            exit={dropdownMotion.exit}
            transition={dropdownMotion.transition}
            role="dialog"
            aria-label="Language selector"
          >
            <div className="language-nav__header">
              <div className="language-nav__header-icon">
                <Globe2 size={18} />
              </div>
              <div>
                <strong>Select Language</strong>
                <p>Choose your preferred language</p>
              </div>
            </div>

            <div className="language-nav__divider" />

            <label className="language-nav__search">
              <Search size={16} />
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search language..."
                aria-label="Search language"
              />
            </label>

            <div
              className="language-nav__list"
              role="listbox"
              aria-label="Language options"
              onKeyDown={handleListKeyDown}
            >
              {filteredLanguages.length ? (
                filteredLanguages.map((language, index) => {
                  const active = activeLanguage === language.code;

                  return (
                    <button
                      key={language.code}
                      ref={(element) => {
                        optionRefs.current[index] = element;
                      }}
                      type="button"
                      className={`language-nav__option${active ? " language-nav__option--active" : ""}`}
                      aria-pressed={active}
                      onClick={() => handleSelect(language.code)}
                    >
                      <span className="language-nav__flag" aria-hidden="true">
                        {language.flag}
                      </span>
                      <span className="language-nav__copy">
                        <strong>{language.nativeName}</strong>
                        <small>{language.englishName}</small>
                      </span>
                      {active ? <Check size={16} className="language-nav__check" /> : null}
                    </button>
                  );
                })
              ) : (
                <div className="language-nav__empty">No language matches your search.</div>
              )}
            </div>

            <div className="language-nav__current">
              <span>{activeMeta.flag}</span>
              <p>Current: {activeMeta.englishName}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
