import { Variants } from "framer-motion"

export const faqVariant: Variants = {
  closed: { height: "min-content", transition: { duration: 0.3 } },
  open: { height: "auto", transition: { duration: 0.3 } }
}

export const arrowVariant: Variants = {
  closed: { rotate: 0, transition: { duration: 0.3 } },
  open: { rotate: 180, transition: { duration: 0.3 } }
}

export const answerVariant: Variants = {
  closed: { height: 0, transition: { duration: 0.3 } },
  open: { height: "auto", transition: { duration: 0.3 } }
}
export const answerTextVariant: Variants = {
  closed: { opacity: 0, transition: { duration: 0.3, delay: 0.5 } },
  open: { opacity: 1, transition: { duration: 0.3, delay: 0.5 } }
}
