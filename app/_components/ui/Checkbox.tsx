import { useToggleState } from "react-stately"
import { VisuallyHidden, useCheckbox, useFocusRing } from "react-aria"
import type { AriaCheckboxProps } from "react-aria"
import { useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { boxVariants, tickVariants } from "@/app/_lib/variants/checkboxVariants"

interface CheckboxProps extends AriaCheckboxProps {
  children: React.ReactNode
}

const Checkbox = (props: CheckboxProps) => {
  let state = useToggleState(props)
  let ref = useRef(null)
  let { inputProps } = useCheckbox(props, state, ref)
  let { isFocusVisible, focusProps } = useFocusRing()
  let isSelected = state.isSelected

  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  return (
    <label className="flex items-center cursor-pointer font-sans">
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        initial={false}
        animate={isSelected ? "checked" : "unchecked"}
        width={21}
        height={21}
        className="mr-2"
      >
        <motion.rect fill="transparent" strokeWidth="3" stroke="currentColor" width="21" height="21" variants={boxVariants} />
        {isFocusVisible && (
          <motion.rect fill="transparent" strokeWidth="3" stroke="currentColor" width="20" height="20" variants={boxVariants} />
        )}
        <motion.polyline
          points="4 11 8 15 17 6"
          fill="transparent"
          strokeWidth="4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={tickVariants}
          style={{ pathLength, opacity }}
        />
      </motion.svg>
      {props.children}
    </label>
  )
}

export default Checkbox
