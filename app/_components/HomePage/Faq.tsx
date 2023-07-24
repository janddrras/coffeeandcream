"use client"
import { LayoutGroup, motion } from "framer-motion"

import { useState } from "react"
import SectionTitle from "@/app/_components/ui/SectionTitle"
import FaqCard from "@/app/_components/ui/FaqCard"
import faq from "@/app/_lib/docs/faq.json"

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section>
      <div className="pt-16 pb-32 px-8">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <LayoutGroup>
          <div className="flex flex-col  pt-12 max-w-4xl mx-auto gap-4 flex-wrap items-center justify-center">
            {faq.map((item) => (
              <FaqCard key={item.id} activeId={activeId} setActiveId={setActiveId} {...item} />
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}

export default Faq
