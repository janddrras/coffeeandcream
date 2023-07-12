import { Variants } from "framer-motion"

export const menuButtonCircle: Variants = {
  initial: { pathLength: 1.1 },
  hover: { pathLength: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  tap: { pathLength: 0, transition: { duration: 0.5, ease: "easeInOut" } }
}

export const menuButtonSpan: Variants = {
  initial: { y: 0 },
  hover: { y: -20, transition: { duration: 0.5, ease: "easeInOut" } },
  tap: { y: -20, transition: { duration: 0.5, ease: "easeInOut" } }
}

export const menuLine1: Variants = {
  initial: { pathLength: 0 },
  hover: { pathLength: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } },
  tap: { pathLength: 1, rotate: 45, y: 2, transition: { duration: 0.5, ease: "easeInOut" } }
}

export const menuLine2: Variants = {
  initial: { pathLength: 0 },
  hover: { pathLength: 1, transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" } },
  tap: { pathLength: 1, rotate: -45, y: -2, transition: { duration: 0.5, ease: "easeInOut" } }
}
