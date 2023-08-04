import type { Locale } from "../../../../i18n-config"

import en from "./about/en.json"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./about/en.json").then((module) => module.default),
  ro: () => import("./about/ro.json").then((module) => module.default),
  hu: () => import("./about/hu.json").then((module) => module.default)
}

export const getAboutPageDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()

export type AboutDictionaryType = typeof en
