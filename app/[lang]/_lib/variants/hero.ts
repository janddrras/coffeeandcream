import { Variants } from "framer-motion"

export const lineVariants: Variants = {
  initial: { scaleX: 1 },
  animate: { scaleX: [1, 0.75, 0.25, 1], transition: { duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }
}

export const circleVariants: Variants = {
  initial: { pathLength: 0.65 },
  animate: {
    pathLength: [0.65, 0.25, 1, 0.65],
    transition: { duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
  }
}
