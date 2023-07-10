"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const Intro = () => {
  const r = 40
  const strokeLength = (r: number) => 2 * Math.PI * r
  const strokeDasharray = (r: number) => `${strokeLength(r)} ${strokeLength(r)}`
  const name = "coffeeandcream".split("")

  const quarter: Variants = {
    hidden: { opacity: 0, rotate: -560, pathLength: 0 },
    visible: (i: number) => {
      const delay = i * 0.6
      return {
        opacity: 1,
        rotate: 49,
        pathLength: 0.75,
        transition: { duration: 1, ease: "easeInOut", delay }
      }
    }
  }
  const full: Variants = {
    hidden: { opacity: 0, rotate: -560, pathLength: 0 },
    visible: (i: number) => {
      const delay = i * 0.5
      return {
        opacity: 1,
        rotate: 49,
        pathLength: 1,
        transition: { duration: 1, ease: "easeInOut", delay }
      }
    }
  }
  const span: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -10, 0],
      transition: { duration: 0.75, ease: "easeOut" }
    }
  }
  const parent: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1 }
    }
  }

  return (
    <motion.section
      className="fixed bg-black top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20"
      animate={{
        y: "-110%",
        transition: {
          duration: 1,
          ease: [0.6, 0.05, -0.11, 0.9],
          delay: 3.5
        }
      }}
    >
      <div className="w-[600px] h-[600px] flex-col items-center flex place-self-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.circle
            cx="100"
            cy="100"
            r={`${r}`}
            style={{ fill: "none", stroke: "#F2EDDE", strokeWidth: "4", strokeLinecap: "round" }}
            pathLength={`${strokeLength(r)}`}
            strokeDasharray={`${strokeDasharray(r)}`}
            custom={0}
            variants={quarter}
          />
          <motion.circle
            cx="100"
            cy="100"
            r={`${r + 20}`}
            style={{ fill: "none", stroke: "#F2EDDE", strokeWidth: "4", strokeLinecap: "round" }}
            pathLength={`${strokeLength(r)}`}
            strokeDasharray={`${strokeDasharray(r)}`}
            custom={1}
            variants={quarter}
          />
          <motion.circle
            cx="100"
            cy="100"
            r={`${r + 40}`}
            style={{ fill: "none", stroke: "#F2EDDE", strokeWidth: "4", strokeLinecap: "round" }}
            pathLength={`${strokeLength(r)}`}
            strokeDasharray={`${strokeDasharray(r)}`}
            custom={2}
            variants={full}
          />
        </motion.svg>
        <motion.div variants={parent} animate="visible" initial="hidden">
          {name.map((letter, i) => (
            <motion.span className="inline-block text-4xl tracking-wider font-light font-logo text-lbg" variants={span} key={i}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Intro
