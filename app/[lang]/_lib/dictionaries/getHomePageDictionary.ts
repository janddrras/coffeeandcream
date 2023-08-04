import type { Locale } from "../../../../i18n-config"

import en from "./home/en.json"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./home/en.json").then((module) => module.default),
  ro: () => import("./home/ro.json").then((module) => module.default),
  hu: () => import("./home/hu.json").then((module) => module.default)
}

export const getHomePageDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()

export type HomeDictionaryType = typeof en
