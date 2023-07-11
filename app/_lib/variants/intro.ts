import { Variants } from "framer-motion"

export const introQuarter: Variants = {
  hidden: { opacity: 0, rotate: -560, pathLength: 0 },
  visible: (i: number) => {
    const delay = i * 0.6
    return {
      opacity: 1,
      rotate: 49,
      pathLength: 0.75,
      transition: { duration: 1, ease: "easeInOut", delay }
    }
  }
}
export const introFull: Variants = {
  hidden: { opacity: 0, rotate: -560, pathLength: 0 },
  visible: (i: number) => {
    const delay = i * 0.5
    return {
      opacity: 1,
      rotate: 49,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut", delay }
    }
  }
}
export const introSpan: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: { duration: 0.75, ease: "easeOut" }
  }
}
export const introParent: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 1 }
  }
}
