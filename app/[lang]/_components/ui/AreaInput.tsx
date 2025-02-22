"use client"

import { useRef, useState } from "react"
import type { ChangeEvent, TextareaHTMLAttributes } from "react"
import { motion } from "framer-motion"

interface AreaInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label: string
  errorMessage?: string
  onChange?: (value: string) => void
}

const AreaInput = (props: AreaInputProps) => {
  const { label, errorMessage, onChange, value, id, rows = 4, ...textareaProps } = props
  const ref = useRef<HTMLTextAreaElement>(null)
  const labelText: string[] = Array.from(label)
  const inputId = id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`

  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(Boolean(value))

  const onFocus = () => setFocused(true)
  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.target.value)
    setHasValue(e.target.value.length > 0)
  }
  const onBlur = () => {
    setFocused(false)
    setHasValue(Boolean(ref.current?.value))
  }

  return (
    <>
      <div className="relative w-full h-full pt-8">
        <label
          htmlFor={inputId}
          className="absolute z-10 font-sans text-xl left-2 top-12 text-coffee-80/50 dark:text-cream-30/50 pointer-events-none"
        >
          {labelText.map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block ${letter === " " ? "w-2" : ""}`}
              initial={{ y: 0 }}
              animate={(focused || hasValue) ? { y: -42 } : { y: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: index * 0.06 }}
            >
              {letter}
            </motion.span>
          ))}
        </label>
        <textarea
          {...textareaProps}
          id={inputId}
          ref={ref}
          className="font-sans text-xl px-2 py-4 focus:outline-none z-10 w-full bg-cream-30/10 autofill:bg-cream-30/10 dark:bg-cream-90/10 dark:autofill:bg-coffee-90/10 dark:text-cream-10"
          value={props.value}
          onFocus={onFocus}
          onChange={changeHandler}
          onBlur={onBlur}
          rows={4}
        />
        <motion.div
          className={`absolute inset-x-0 bottom-2 h-0.5 bg-coffee-80/80 dark:bg-cream-30/80 origin-left ${
            props.errorMessage ? "bg-brightRed dark:bg-brightRed" : "bg-current"
          }`}
          initial={{ scale: 0 }}
          animate={focused ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
      <div className="px-2 h-6 font-sans text-lg text-brightRed -mt-4" role="alert">
        {errorMessage || ""}
      </div>
    </>
  )
}

export default AreaInput
