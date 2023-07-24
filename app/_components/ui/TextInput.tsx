"use client"

import { useRef, useState } from "react"
import type { ChangeEvent } from "react"
import type { AriaTextFieldProps } from "react-aria"
import { useTextField } from "react-aria"
import { motion } from "framer-motion"

const TextInput = (props: AriaTextFieldProps) => {
  const ref = useRef<HTMLInputElement>(null)
  let { labelProps, inputProps, errorMessageProps } = useTextField(props, ref)
  const labelText: string[] = Array.from(props.label as string)

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(e.target.value)
    e.target.value.length > 0 ? setFocused(true) : setFocused(false)
  }
  const onBlur = () => {
    setFocused(false)
    if (props.value) props.value.length > 0 ? setFocused(true) : setFocused(false)
  }

  return (
    <>
      <div className="relative w-full h-full pt-8">
        <label
          {...labelProps}
          className="absolute z-20 font-sans text-xl left-2 top-12 text-coffee-80/50 dark:text-cream-30/50 pointer-events-none"
        >
          {labelText.map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block ${letter === " " ? "w-2" : ""}`}
              initial={{ y: 0 }}
              animate={focused ? { y: -42 } : { y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: index * 0.06 }}
            >
              {letter}
            </motion.span>
          ))}
        </label>
        <input
          {...inputProps}
          ref={ref}
          className="font-sans text-xl px-2 py-4 focus:outline-none z-10 w-full bg-cream-30/10 autofill:bg-cream-30/10 dark:bg-cream-90/10 dark:autofill:bg-coffee-90/10 dark:text-cream-10"
          value={props.value}
          onFocus={onFocus}
          onChange={changeHandler}
          onBlur={onBlur}
        />
        <motion.div
          className={`absolute inset-x-0 bottom-0 h-0.5 bg-coffee-80/80 dark:bg-cream-30/80 origin-left ${
            props.errorMessage ? "bg-brightRed dark:bg-brightRed" : "bg-current"
          }`}
          initial={{ scale: 0 }}
          animate={focused ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
      <div className="px-2 h-6 font-sans text-lg text-brightRed -mt-4" {...errorMessageProps}>
        {props.errorMessage ? props.errorMessage : ""}
      </div>
    </>
  )
}

export default TextInput
