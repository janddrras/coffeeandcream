"use client"

import { useIsomorphicLayoutEffect } from "@/app/_hooks/useIsomorphicLayoutEffect"
import { motion, Variants } from "framer-motion"
import { useRef, useState } from "react"

interface ToolBannerProps {
  serie: string[]
  direction?: 1 | -1
}

const ToolBanner = ({ serie, direction = 1 }: ToolBannerProps) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [width, setWidth] = useState(0)

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth)
    }
  }, [ref.current])

  const variants: Variants = {
    toRight: { x: [0, -width], transition: { duration: width / 50, repeat: Infinity, repeatType: "loop", repeatDelay: 0, ease: "linear" } },
    toLeft: { x: [-width, 0], transition: { duration: width / 50, repeat: Infinity, repeatType: "loop", repeatDelay: 0, ease: "linear" } }
  }

  return (
    <div className="py-6 overflow-hidden">
      <motion.div className="flex" animate={direction === 1 ? "toRight" : "toLeft"} variants={variants}>
        <h4 className="font-sans text-6xl font-black uppercase" ref={ref} style={{ transform: "translateX: -100%" }}>
          {serie.map((tool, idx) => (
            <span
              className={`${
                idx % 2 === 0 ? "font-outline-1 dark:font-outline-2 text-cream-10 dark:text-coffee-90" : "text-red dark:text-cream-30"
              }  px-0.5`}
              key={idx}
            >
              {tool}
            </span>
          ))}
        </h4>
        <h4 className="font-sans text-6xl font-black uppercase" ref={ref}>
          {serie.map((tool, idx) => (
            <span
              className={`${
                idx % 2 === 0 ? "font-outline-1 dark:font-outline-2 text-cream-10 dark:text-coffee-90" : "text-red dark:text-cream-30"
              }  px-0.5`}
              key={idx}
            >
              {tool}
            </span>
          ))}
        </h4>
      </motion.div>
    </div>
  )
}

export default ToolBanner
