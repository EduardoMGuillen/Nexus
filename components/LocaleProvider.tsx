"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LOCALE_HTML_LANG, type Locale, isLocale } from "@/lib/i18n/types";
import { messagesByLocale, type Messages } from "@/lib/i18n/messages";

const STORAGE_KEY = "nexus-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && isLocale(raw)) return raw;
  } catch {
    /* ignore */
  }
  return "es";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const initial = readStoredLocale();
    setLocaleState(initial);
    document.documentElement.lang = LOCALE_HTML_LANG[initial];
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = LOCALE_HTML_LANG[next];
  }, []);

  const messages = messagesByLocale[locale];

  const value = useMemo(
    () => ({ locale, setLocale, messages }),
    [locale, setLocale, messages]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (ctx === undefined) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return ctx;
}

export function useMessages() {
  return useLocaleContext().messages;
}
