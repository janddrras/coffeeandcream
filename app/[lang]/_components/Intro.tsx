"use client"

import { motion } from "framer-motion"
import { introFull, introParent, introQuarter, introSpan } from "../_lib/variants/intro"
import Logo from "../_components/ui/Logo"

const Intro = () => {
  const name = "coffeeandcream".split("")

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
        <div className="mb-12">
          <Logo size={200} r={40} color="#F2EDDE" variant1={introQuarter} variant2={introFull} />
        </div>
        <motion.div variants={introParent} animate="visible" initial="hidden">
          {name.map((letter, i) => (
            <motion.span className="inline-block text-4xl tracking-wider font-light font-logo text-cream-10" variants={introSpan} key={i}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Intro
