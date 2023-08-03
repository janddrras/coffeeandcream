"use client"

import { AriaButtonProps, useButton } from "react-aria"
import { useRef } from "react"
import { motion } from "framer-motion"
import { RiMailSendLine } from "react-icons/ri"
import { backgroundVariants, iconVariants, line1Variants, line2Variants, textVariants } from "../../_lib/variants/buttonVariants"

interface ButtonProps extends AriaButtonProps {
  icon?: React.ReactNode
}

const Button = (props: ButtonProps) => {
  let ref = useRef(null)
  let { buttonProps } = useButton(props, ref)
  let { children, isDisabled } = props
  const { icon } = props

  return (
    <button ref={ref} {...buttonProps} className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
      <motion.div
        className=" px-12 py-2 relative overflow-hidden"
        initial="initial"
        whileHover={!isDisabled ? "hover" : "initial"}
        whileTap={!isDisabled ? "pressed" : "initial"}
      >
        <motion.span className="absolute text-xl left-4 top-3 z-20 dark:text-cream-20 tracking-wide" variants={iconVariants}>
          {icon ? icon : <RiMailSendLine />}
        </motion.span>
        <motion.p className="relative z-20 font-bold font-sans text-lg dark:text-cream-20" variants={textVariants}>
          {children}
        </motion.p>
        <motion.span className="block inset-0 top-0 left-0 bg-cream-30/80 absolute z-0" variants={backgroundVariants} />
        <motion.span className="block inset-x-0 top-0 h-0.5 bg-coffee-90 dark:bg-cream-20 absolute" variants={line1Variants} />
        <motion.span className="block inset-x-0 bottom-0 h-0.5 bg-coffee-90 dark:bg-cream-20 absolute" variants={line2Variants} />
      </motion.div>
    </button>
  )
}

export default Button
