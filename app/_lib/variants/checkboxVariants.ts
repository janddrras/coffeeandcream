import { Variants } from "framer-motion"

export const line1Variants: Variants = {
  checked: { pathLength: 1, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  unchecked: { pathLength: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}

export const line2Variants: Variants = {
  checked: { pathLength: 1, rotate: 180, opacity: 1, transition: { duration: 0.3, delay: 0.3, ease: "easeInOut" } },
  unchecked: { pathLength: 0, rotate: 180, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}
