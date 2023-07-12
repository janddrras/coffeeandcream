import { Variants } from "framer-motion"

export const menuVariant: Variants = {
  closed: { opacity: 0, transition: { duration: 0.3 } },
  open: {
    opacity: 1,
    transition: { duration: 0.1, staggerChildren: 0.1, staggerDirection: -1 }
  }
}

export const menuLayer: Variants = {
  closed: { x: "110%" },
  open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}

export const listVariants: Variants = {
  closed: { transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 2, ease: "easeInOut" } },
  open: { transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 2, ease: "easeInOut" } }
}
export const linkVariants: Variants = {
  closed: { opacity: 0, x: -50 },
  open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } }
}
