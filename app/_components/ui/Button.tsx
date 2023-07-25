import { AriaButtonProps, useButton } from "react-aria"
import { useRef } from "react"

interface ButtonProps extends AriaButtonProps {}

const Button = (props: ButtonProps) => {
  let ref = useRef(null)
  let { buttonProps } = useButton(props, ref)
  let { children } = props

  return (
    <button ref={ref} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
