"use client"

import { createContext, useContext } from "react"
import { LayoutDictionaryType, getLayoutDictionary } from "../../_lib/dictionaries/getLayoutDictionary"
import type { Locale } from "../../../../i18n-config"
import en from "../../_lib/dictionaries/layout/en.json"

type LangContextType = {
  layout: LayoutDictionaryType
}

const Lang = createContext<LangContextType>({
  layout: en
})

export const LangProvider = async ({ children, lang }: { children: React.ReactNode; lang: Locale }) => {
  const layout = await getLayoutDictionary(lang)

  return <Lang.Provider value={{ layout }}>{children}</Lang.Provider>
}

export const useDictionary = () => useContext(Lang)
