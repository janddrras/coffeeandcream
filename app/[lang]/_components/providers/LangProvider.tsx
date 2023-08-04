"use client"

import { createContext, useContext } from "react"
import { LayoutDictionaryType, getLayoutDictionary } from "../../_lib/dictionaries/getLayoutDictionary"
import type { Locale } from "../../../../i18n-config"
import enLayout from "../../_lib/dictionaries/layout/en.json"
import enHome from "../../_lib/dictionaries/home/en.json"
import { HomeDictionaryType, getHomePageDictionary } from "../../_lib/dictionaries/getHomePageDictionary"

type LangContextType = {
  layout: LayoutDictionaryType
  homePage: HomeDictionaryType
}

const Lang = createContext<LangContextType>({
  layout: enLayout,
  homePage: enHome
})

export const LangProvider = async ({ children, lang }: { children: React.ReactNode; lang: Locale }) => {
  const layout = await getLayoutDictionary(lang)
  const homePage = await getHomePageDictionary(lang)

  return <Lang.Provider value={{ layout, homePage }}>{children}</Lang.Provider>
}

export const useDictionary = () => useContext(Lang)
