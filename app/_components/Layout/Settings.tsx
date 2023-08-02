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
} from "@/app/_lib/variants/settings"
import Link from "next/link"
import { useMenu } from "../providers/MenuProvider"

const Settings = () => {
  const { settings, setSettings } = useMenu()
  const { theme, setTheme } = useTheme()
  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <>
      <motion.aside
        className="absolute top-32 right-2 w-64 h-64 z-40 origin-top-right "
        variants={settingsVariant}
        animate={settings ? "open" : "closed"}
        initial="closed"
      >
        <motion.div
          className="absolute inset-0 w-64 h-64 z-10 shadow-lg shadow-coffee-80/60 dark:shadow-cream-10/40 pointer-events-none"
          variants={shadowVariant}
          animate={settings ? "open" : "closed"}
          initial="closed"
        />
        <motion.div className="w-full h-1 bg-coffee-80 dark:bg-cream-10" variants={lineVariant} />
        <motion.div className="w-full h-full bg-cream-20/95 dark:bg-coffee-80/95 relative origin-top" variants={backgroundVariant}>
          <button className="absolute top-2 right-2 hover:text-brightRed text-xl" onClick={() => setSettings(false)}>
            <IoClose />
          </button>
          <motion.div className="" variants={contentVariant}>
            <h3 className="text-xl font-semibold font-sans text-center pt-10 pb-6 tracking-wide">Settings</h3>
            <hr className="opacity-10" />
            <div className="flex p-4 justify-between">
              <p className="font-sans font-light tracking-wider">theme:</p>
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
              <p className="font-sans font-light tracking-wider mb-3">language:</p>
              <div className="flex justify-between">
                <Link href="/" onClick={() => setSettings(false)}>
                  <div className="py-1 px-1 border border-coffee-90/20 dark:border-cream-30/40 rounded-sm flex items-center gap-2 hover:shadow-sm hover:bg-cream-30/30 dark:hover:bg-cream-30/30 transition-colors duration-150">
                    <img src="/flags/gb.svg" alt="british flag" className="w-4 h-4 rounded" />
                    <p className="font-sans font-medium tracking-wider">Eng</p>
                  </div>
                </Link>
                <Link href="/ro" onClick={() => setSettings(false)}>
                  <div className="py-1 px-1 border border-coffee-90/20 dark:border-cream-30/40 rounded-sm flex items-center gap-2 hover:shadow-sm hover:bg-cream-30/30 dark:hover:bg-cream-30/30 transition-colors duration-150">
                    <img src="/flags/ro.svg" alt="british flag" className="w-4 h-4 rounded" />
                    <p className="font-sans font-medium tracking-wider">Rom</p>
                  </div>
                </Link>
                <Link href="/hu" onClick={() => setSettings(false)}>
                  <div className="py-1 px-1 border border-coffee-90/20 dark:border-cream-30/40 rounded-sm flex items-center gap-2 hover:shadow-sm hover:bg-cream-30/30 dark:hover:bg-cream-30/30 transition-colors duration-150">
                    <img src="/flags/hu.svg" alt="british flag" className="w-4 h-4 rounded" />
                    <p className="font-sans font-medium tracking-wider">Hun</p>
                  </div>
                </Link>
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
    </>
  )
}

export default Settings
