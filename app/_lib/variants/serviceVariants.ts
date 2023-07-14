import { Variants } from "framer-motion"

export const titleVariants: Variants = {
  initial: { y: 75, transition: { duration: 0.4, ease: "easeInOut" } },
  hover: { y: 0, transition: { duration: 0.4, ease: "easeInOut" } }
}
export const listVariants: Variants = {
  initial: { opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  hover: { opacity: 100, transition: { duration: 0.4, delay: 0.2, ease: "easeInOut" } }
}
export const imgVariants: Variants = {
  initial: { scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  hover: { scale: 1.2, transition: { duration: 0.4, ease: "easeInOut" } }
}
