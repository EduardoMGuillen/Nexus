import type { Locale } from "../types";
import { es, type Messages } from "./es";
import { en } from "./en";
import { fr } from "./fr";
import { pt } from "./pt";

export type { Messages };

export const messagesByLocale: Record<Locale, Messages> = {
  es,
  en,
  fr,
  pt,
};
