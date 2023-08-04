import type { Locale } from "../../../../i18n-config"

import en from "./gdpr/en.json"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./gdpr/en.json").then((module) => module.default),
  ro: () => import("./gdpr/ro.json").then((module) => module.default),
  hu: () => import("./gdpr/hu.json").then((module) => module.default)
}

export const getGdprDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()

export type GdprDictionaryType = typeof en
