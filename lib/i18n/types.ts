export const LOCALES = ["es", "en", "fr", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  es: "es",
  en: "en",
  fr: "fr",
  pt: "pt",
};
