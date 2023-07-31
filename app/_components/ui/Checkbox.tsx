import { useToggleState } from "react-stately"
import { VisuallyHidden, useCheckbox, useFocusRing } from "react-aria"
import type { AriaCheckboxProps } from "react-aria"
import { useRef } from "react"
import { motion } from "framer-motion"
import { line1Variants, line2Variants } from "@/app/_lib/variants/checkboxVariants"

interface CheckboxProps extends AriaCheckboxProps {
  children: React.ReactNode
  labelStyles?: string
  lineColor?: "blue" | "red"
}

const Checkbox = (props: CheckboxProps) => {
  let state = useToggleState(props)
  let ref = useRef(null)
  let { inputProps } = useCheckbox(props, state, ref)
  let { isFocusVisible, focusProps } = useFocusRing()
  let isSelected = state.isSelected

  return (
    <label className={`flex items-center cursor-pointer font-sans ${props.labelStyles}`}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <motion.svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        initial={false}
        animate={isSelected ? "checked" : "unchecked"}
        className="mr-2"
      >
        <rect
          x="0.5"
          y="0.5"
          width="20"
          height="20"
          strokeWidth={3}
          stroke="#8A7259"
          className={`${
            isSelected ? "dark:fill-cream-10 fill-cream-30/50" : "fill-transparent"
          } origin-center transition-transform duration-200 ease-in-out`}
        />
        {isFocusVisible && (
          <rect
            x="4.5"
            y="5.5"
            width="17"
            height="17"
            strokeWidth={3}
            stroke="#8A7259"
            className={`${
              isSelected ? "dark:fill-cream-10 fill-cream-30/50" : "fill-transparent"
            } origin-center transition-transform duration-200 ease-in-out`}
          />
        )}
        <motion.path
          d="M16 5.5L5 16.5"
          stroke={`${props.lineColor === "red" ? "#a51111" : "#0d3c5c"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          initial="unchecked"
          variants={line1Variants}
          animate={isSelected ? "checked" : "unchecked"}
        />
        <motion.path
          d="M16 16.5L5 5.5"
          stroke={`${props.lineColor === "red" ? "#a51111" : "#0d3c5c"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          initial="unchecked"
          variants={line2Variants}
          animate={isSelected ? "checked" : "unchecked"}
        />
      </motion.svg>
      {props.children}
    </label>
  )
}

export default Checkbox
