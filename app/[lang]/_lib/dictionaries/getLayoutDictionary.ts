import type { Locale } from "../../../../i18n-config"

import en from "./layout/en.json"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./layout/en.json").then((module) => module.default),
  ro: () => import("./layout/ro.json").then((module) => module.default),
  hu: () => import("./layout/hu.json").then((module) => module.default)
}

export const getLayoutDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()

export type LayoutDictionaryType = typeof en
