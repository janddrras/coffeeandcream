"use client"
import { answerTextVariant, answerVariant, arrowVariant } from "../../_lib/variants/faq"
import { motion } from "framer-motion"
import useMesure from "react-use-measure"
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
  let [ref, { height }] = useMesure()

  return (
    <article
      className="w-full p-4 md:p-8 border-2 border-coffee-80/20 dark:border-cream-30/20 shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer"
      onClick={() => toggleActive(id)}
    >
      <div className="flex justify-between gap-4 items-center">
        <h3 className="font-sans font-bold text-lg md:text-2xl text-coffee-80/80 dark:text-cream-30/80">{question}</h3>
        <motion.div initial="closed" variants={arrowVariant} animate={active ? "open" : "closed"} className="max-h-max max-w-max">
          <ImArrowDown2 className="text-coffee-80/80 dark:text-cream-30/80" />
        </motion.div>
      </div>
      <motion.div animate={{ height }} transition={{ duration: 0.3, ease: "linear" }}>
        {active && (
          <div className="p-1 text-center md:text-left md:p-8" ref={ref}>
            <motion.p initial="closed" animate="open" variants={answerTextVariant} className="font-sans text-smleading-7">
              {answer}
            </motion.p>
          </div>
        )}
      </motion.div>
    </article>
  )
}

export default FaqCard
