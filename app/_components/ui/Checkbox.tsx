import { useToggleState } from "react-stately"
import { VisuallyHidden, useCheckbox, useFocusRing } from "react-aria"
import type { AriaCheckboxProps } from "react-aria"
import { useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { tickVariants } from "@/app/_lib/variants/checkboxVariants"

interface CheckboxProps extends AriaCheckboxProps {
  children: React.ReactNode
  labelStyles?: string
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
          d="M4 11L10 16.5L18.5 3.5"
          stroke="#8A7259"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          variants={tickVariants}
          style={{ pathLength, opacity }}
        />
      </motion.svg>
      {props.children}
    </label>
  )
}

export default Checkbox
