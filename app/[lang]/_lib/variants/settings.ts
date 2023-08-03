import { Variants } from "framer-motion"

export const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
}

export const settingsVariant: Variants = {
  closed: { scale: 0 },
  open: { scale: 1 }
}
export const shadowVariant: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3, delay: 0.9 } }
}
export const backdropVariant: Variants = {
  closed: { scale: 0 },
  open: { scale: 1, transition: { duration: 0.3 } }
}

export const lineVariant: Variants = {
  closed: { scaleX: 0, transition: { duration: 0.3, ease: "linear" } },
  open: { scaleX: 1, transition: { duration: 0.3, ease: "linear", delay: 0.3 } }
}
export const backgroundVariant: Variants = {
  closed: { scaleY: 0, transition: { duration: 0.3, ease: "linear" } },
  open: { scaleY: 1, transition: { duration: 0.3, ease: "linear", delay: 0.6 } }
}
export const contentVariant: Variants = {
  closed: { opacity: 0, transition: { duration: 0.3, ease: "linear" } },
  open: { opacity: 1, transition: { duration: 0.3, ease: "linear", delay: 0.9 } }
}
