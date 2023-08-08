import { Variants } from "framer-motion"

export const line1Variants: Variants = {
  initial: { x: -300 },
  hover: { x: 0, transition: { duration: 0.2, delay: 0.2 } },
  pressed: { x: 300, transition: { duration: 0.2, delay: 0.2 } }
}
export const line2Variants: Variants = {
  initial: { x: 300 },
  hover: { x: 0, transition: { duration: 0.2, delay: 0.3 } },
  pressed: { x: 300, transition: { duration: 0.2, delay: 0.2 } }
}
export const backgroundVariants: Variants = {
  initial: { x: 0 },
  hover: { x: -300, transition: { duration: 0.2, delay: 0.1 } },
  pressed: { x: 0, transition: { duration: 0.2, delay: 0.3 } }
}
export const textVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 15, transition: { duration: 0.2, delay: 0.3 } },
  pressed: { x: 100, transition: { duration: 0.2, delay: 0.2 } }
}
export const iconVariants: Variants = {
  initial: { x: -50 },
  hover: { x: 0, transition: { duration: 0.2, delay: 0.3 } },
  pressed: { x: 50, transition: { duration: 0.2, delay: 0.2 } }
}
