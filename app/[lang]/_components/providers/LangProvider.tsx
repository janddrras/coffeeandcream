"use client"

import { createContext, useContext } from "react"
import { LayoutDictionaryType, getLayoutDictionary } from "../../_lib/dictionaries/getLayoutDictionary"
import type { Locale } from "../../../../i18n-config"
import enLayout from "../../_lib/dictionaries/layout/en.json"
import enHome from "../../_lib/dictionaries/home/en.json"
import enAbout from "../../_lib/dictionaries/about/en.json"
import enContact from "../../_lib/dictionaries/contact/en.json"
import enGdpr from "../../_lib/dictionaries/gdpr/en.json"
import enTerms from "../../_lib/dictionaries/terms/en.json"
import { HomeDictionaryType, getHomePageDictionary } from "../../_lib/dictionaries/getHomePageDictionary"
import { AboutDictionaryType, getAboutPageDictionary } from "../../_lib/dictionaries/getAboutPageDictionary"
import { ContactDictionaryType, getContactPageDictionary } from "../../_lib/dictionaries/getContactPageDictionary"
import { GdprDictionaryType, getGdprDictionary } from "../../_lib/dictionaries/getGdprDictionary"
import { TermsDictionaryType, getTermsDictionary } from "../../_lib/dictionaries/getTermsDictionary"

type LangContextType = {
  layout: LayoutDictionaryType
  homePage: HomeDictionaryType
  aboutPage: AboutDictionaryType
  contactPage: ContactDictionaryType
  gdpr: GdprDictionaryType
  terms: TermsDictionaryType
}

const Lang = createContext<LangContextType>({
  layout: enLayout,
  homePage: enHome,
  aboutPage: enAbout,
  contactPage: enContact,
  gdpr: enGdpr,
  terms: enTerms
})

export const LangProvider = async ({ children, lang }: { children: React.ReactNode; lang: Locale }) => {
  const layout = await getLayoutDictionary(lang)
  const homePage = await getHomePageDictionary(lang)
  const aboutPage = await getAboutPageDictionary(lang)
  const contactPage = await getContactPageDictionary(lang)
  const gdpr = await getGdprDictionary(lang)
  const terms = await getTermsDictionary(lang)

  return <Lang.Provider value={{ layout, homePage, aboutPage, contactPage, gdpr, terms }}>{children}</Lang.Provider>
}

export const useDictionary = () => useContext(Lang)
