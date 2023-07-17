"use client"
import { answerTextVariant, answerVariant, arrowVariant, faqVariant } from "@/app/_lib/variants/faq"
import { motion } from "framer-motion"

import { ImArrowDown2 } from "react-icons/im"

interface FaqCardProps {
  id: number
  activeId: number | null
  setActiveId: (id: number | null) => void
  question: string
  answer: string
}

const FaqCard = ({ id, question, answer, activeId, setActiveId }: FaqCardProps) => {
  const active = activeId === id
  const toggleActive = (id: number) => (activeId === id ? setActiveId(null) : setActiveId(id))

  return (
    <motion.article
      className="w-full p-8 border-2 border-coffee-80/20 dark:border-cream-30/20 shadow-md hover:shadow-sm transition-all duration-300 cursor-pointer"
      onClick={() => toggleActive(id)}
      layout
      variants={faqVariant}
      initial="closed"
      animate="open"
    >
      <div className="flex justify-between gap-4 items-center">
        <h4 className="font-sans font-bold text-2xl text-coffee-80/80 dark:text-cream-30/80">{question}</h4>
        <motion.div initial="closed" animate="open" variants={arrowVariant} className="max-h-max max-w-max">
          <ImArrowDown2 className="text-coffee-80/80 dark:text-cream-30/80" />
        </motion.div>
      </div>
      {active && (
        <motion.div className="w-full h-full p-8 " initial="closed" animate="open" variants={answerVariant}>
          <motion.p initial="closed" animate="open" variants={answerTextVariant} className="font-sans text-smleading-7">
            {answer}
          </motion.p>
        </motion.div>
      )}
    </motion.article>
  )
}

export default FaqCard
