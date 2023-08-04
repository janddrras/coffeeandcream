import type { Locale } from "../../../../i18n-config"

import en from "./terms/en.json"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./terms/en.json").then((module) => module.default),
  ro: () => import("./terms/ro.json").then((module) => module.default),
  hu: () => import("./terms/hu.json").then((module) => module.default)
}

export const getTermsDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()

export type TermsDictionaryType = typeof en
