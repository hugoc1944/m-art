import { Locale } from "./config";

const dictionaries = {
  fr: () => import("@/dictionaries/fr").then((m) => m.default),
  en: () => import("@/dictionaries/en").then((m) => m.default),
  es: () => import("@/dictionaries/es").then((m) => m.default),
  pt: () => import("@/dictionaries/pt").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}