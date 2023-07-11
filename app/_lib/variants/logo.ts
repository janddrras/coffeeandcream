import { Variants } from "framer-motion"

export const logoInner: Variants = {
  hidden: { rotate: 0, pathLength: 0.75 },
  visible: (i: number) => {
    const delay = i * 0.6
    return {
      rotate: 49,
      pathLength: 0.75
    }
  },
  whileHover: (i: number) => {
    const delay = i * 0.3
    return {
      rotate: 49 + 360,
      transition: { duration: 0.5, ease: "easeInOut", delay }
    }
  }
}
