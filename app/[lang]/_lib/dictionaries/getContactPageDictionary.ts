import type { Locale } from "../../../../i18n-config"

import en from "./contact/en.json"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./contact/en.json").then((module) => module.default),
  ro: () => import("./contact/ro.json").then((module) => module.default),
  hu: () => import("./contact/hu.json").then((module) => module.default)
}

export const getContactPageDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()

export type ContactDictionaryType = typeof en
