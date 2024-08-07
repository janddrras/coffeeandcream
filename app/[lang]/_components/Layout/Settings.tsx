/* eslint-disable @next/next/no-img-element */
"use client"
import { IoClose, IoSunny, IoMoon } from "react-icons/io5"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import {
  backdropVariant,
  backgroundVariant,
  contentVariant,
  lineVariant,
  settingsVariant,
  shadowVariant,
  spring
} from "../../_lib/variants/settings"
import Link from "next/link"
import { useMenuContext } from "../providers/MenuProvider"
import { usePathname } from "next/navigation"
import { i18n } from "../../../../i18n-config"
import { useDictionary } from "../providers/LangProvider"

const Settings = () => {
  const dict = useDictionary()
  const { settings, setSettings } = useMenuContext()
  const { theme, setTheme } = useTheme()
  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light")

  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <div className="relative w-full">
      <motion.aside
        className="absolute m-auto left-0 right-0 top-12 w-64 h-64 z-40 origin-top-right "
        variants={settingsVariant}
        animate={settings ? "open" : "closed"}
        initial="closed"
      >
        <motion.div
          className="absolute inset-0 w-64 h-64 z-10 shadow-lg shadow-coffee-80/40 dark:shadow-cream-10/20 pointer-events-none"
          variants={shadowVariant}
          animate={settings ? "open" : "closed"}
          initial="closed"
        />
        <motion.div className="w-full h-1 bg-coffee-80 dark:bg-cream-10" variants={lineVariant} />
        <motion.div className="w-full h-full bg-cream-20/95 dark:bg-coffee-80/95 relative origin-top" variants={backgroundVariant}>
          <button
            className="absolute top-2 right-2 hover:text-brightRed text-xl"
            onClick={() => setSettings(false)}
            aria-label="Settings Button"
          >
            <IoClose />
          </button>
          <motion.div className="" variants={contentVariant}>
            <h3 className="text-xl font-semibold font-sans text-center pt-10 pb-6 tracking-wide">{dict.layout.settings.settings}</h3>
            <hr className="opacity-10" />
            <div className="flex p-4 justify-between">
              <p className="font-sans font-light tracking-wider">{dict.layout.settings.theme}:</p>
              <div className="flex gap-2">
                <IoSunny className="text-2xl" />
                <div className="w-12 h-6 bg-cream-30 relative p-2 rounded-full items-center cursor-pointer" onClick={switchTheme}>
                  <motion.div
                    className="absolute w-6 h-6 bg-cream-10 rounded-full shadow left-0"
                    animate={{ y: -8, x: theme === "light" ? 0 : 24 }}
                    transition={spring}
                  />
                </div>
                <IoMoon className="text-2xl" />
              </div>
            </div>
            <hr className="opacity-10" />
            <div className="p-4">
              <p className="font-sans font-light tracking-wider mb-3">{dict.layout.settings.language}:</p>
              <div className="flex justify-between">
                {i18n.locales.map((locale) => (
                  <Link key={locale} href={redirectedPathName(locale)} onClick={() => setSettings(false)}>
                    <div className="py-1 px-3 border border-coffee-90/20 dark:border-cream-30/40 rounded-sm flex items-center gap-2 hover:shadow-sm hover:bg-cream-30/30 dark:hover:bg-cream-30/30 transition-colors duration-150">
                      <img src={`/flags/${locale}.svg`} alt={`${locale} flag`} className="w-4 h-4 rounded" />
                      <p className="font-sans font-medium tracking-wider capitalize">{locale}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.aside>
      <motion.div
        className="fixed inset-0 bg-cream-10/90 dark:bg-coffee-100/90 z-0"
        variants={backdropVariant}
        animate={settings ? "open" : "closed"}
        initial="closed"
        onClick={() => setSettings(false)}
      />
    </div>
  )
}

export default Settings
