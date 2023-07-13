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
  closed: { transition: { duration: 0 } },
  open: { transition: { duration: 0.2, staggerChildren: 0.1, delayChildren: 0.5, ease: "easeInOut" } }
}
export const linkVariants: Variants = {
  closed: { opacity: 0, y: 20, transition: { duration: 0.2, ease: "linear" } },
  open: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "linear" } }
}

export const spanVariants: Variants = {
  hovered: { opacity: 0.3, x: 40, transition: { duration: 0.4, ease: "easeInOut" } }
}
export const textVariants: Variants = {
  hovered: {
    x: 20,
    fontWeight: "bold",
    color: "#8A7259",
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeInOut" }
  }
}
