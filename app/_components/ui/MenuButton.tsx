"use client"

import { motion } from "framer-motion"
import { menuButtonCircle, menuButtonSpan, menuLine1, menuLine2 } from "@/app/_lib/variants/menuButton"
import { useAppContext } from "@/app/_components/Providers"

interface MenuButtonProps {}

const MenuButton = ({}: MenuButtonProps) => {
  const { menu, setMenu, setSettings } = useAppContext()
  const clickAction = () => {
    setSettings(false)
    setMenu(!menu)
  }

  return (
    <motion.button
      className="relative w-14 h-14 z-50"
      initial="initial"
      whileHover="hover"
      onClick={clickAction}
      animate={menu ? "tap" : "initial"}
    >
      <svg viewBox="0 0 12 12">
        <motion.circle cx="50%" cy="50%" r="5.5" stroke="currentColor" strokeWidth="0.25" fill="none" variants={menuButtonCircle} />
        <motion.line
          x1="3"
          y1="4"
          x2="9"
          y2="4"
          stroke={menu ? "#F2EDDE" : "currentColor"}
          strokeWidth="0.25"
          fill="none"
          variants={menuLine1}
        />
        <motion.line
          x1="3"
          y1="8"
          x2="9"
          y2="8"
          stroke={menu ? "#F2EDDE" : "currentColor"}
          strokeWidth="0.25"
          fill="none"
          variants={menuLine2}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <motion.span className="font-sans text-xs block" variants={menuButtonSpan}>
          menu
        </motion.span>
      </div>
    </motion.button>
  )
}

export default MenuButton
