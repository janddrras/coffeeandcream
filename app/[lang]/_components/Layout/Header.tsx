"use client"

import Link from "next/link"
import { PiGearLight } from "react-icons/pi"
import Logo from "../../_components/ui/Logo"
import { logoInner } from "../../_lib/variants/logo"
import MenuButton from "../../_components/ui/MenuButton"
import Menu from "../../_components/Layout/Menu"
import Settings from "../../_components/Layout/Settings"
import { useMenu } from "../providers/MenuProvider"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useScrollDirection } from "../../_hooks/useScrollDirection"
import useMeasure from "react-use-measure"
import { useState } from "react"
import { useIsomorphicLayoutEffect } from "../../_hooks/useIsomorphicLayoutEffect"

const Header = () => {
  const { settings, setSettings, menu } = useMenu()
  const locale = usePathname().split("/")[1]
  const [active, top] = useScrollDirection()
  let [ref, { width }] = useMeasure()
  const [mobile, setMobile] = useState(false)

  useIsomorphicLayoutEffect(() => {
    width < 768 ? setMobile(true) : setMobile(false)
  }, [ref])

  return (
    <motion.header
      className={`fixed h-52 w-full z-40 pt-12 ${
        mobile ? (top === 0 ? "bg-cream-20 dark:bg-coffee-90 transition-colors delay-150" : "") : ""
      }`}
      ref={ref}
      initial={{ y: 0 }}
      animate={
        mobile
          ? !active
            ? { y: -200, transition: { duration: 0.3, ease: "linear" } }
            : { y: 0, transition: { duration: 0.3, ease: "linear" } }
          : false
      }
    >
      <div className="flex justify-between items-start max-w-screen-2xl md:px-20 lg:px-40 mx-auto">
        <motion.div
          className="flex items-center gap-5 pl-2"
          initial={{ x: 0 }}
          animate={!mobile ? (top === 0 ? { x: 0 } : { x: -80 }) : false}
        >
          <Link href={`/${locale}`}>
            <Logo size={60} r={14} strokeWidth={2} variant1={logoInner} whileHover="whileHover" />
          </Link>

          <motion.h3
            className="font-logo hidden md:block text-2xl tracking-wider font-light pointer-events-none"
            initial={{ opacity: 1 }}
            animate={top === 0 ? { opacity: 1 } : { opacity: 0 }}
          >
            coffeeandcream
          </motion.h3>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-5 pr-2 z-50"
          initial={{ x: 0 }}
          animate={!mobile ? (top === 0 ? { x: 0 } : { x: 80 }) : false}
        >
          <MenuButton />
          <PiGearLight
            className={`${
              menu ? "hidden" : "block"
            } text-4xl hover:rotate-180 hover:scale-150 transition-transform duration-500 cursor-pointer opacity-40 z-30`}
            onClick={() => setSettings(!settings)}
          />
        </motion.div>
      </div>
      <Menu />
      <Settings />
    </motion.header>
  )
}

export default Header
