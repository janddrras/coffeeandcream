import { Variants } from "framer-motion"

export const tickVariants: Variants = {
  checked: { pathLength: 1, transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" } },
  unchecked: { pathLength: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}
