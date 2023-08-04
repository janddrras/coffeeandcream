"use client"

import { LayoutGroup } from "framer-motion"

import { useState } from "react"
import SectionTitle from "../../_components/ui/SectionTitle"
import FaqCard from "../../_components/ui/FaqCard"
import { useDictionary } from "../providers/LangProvider"

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(null)
  const dict = useDictionary()

  return (
    <section>
      <div className="pt-16 pb-32 px-8">
        <SectionTitle>{dict.homePage.faq.title}</SectionTitle>
        <LayoutGroup>
          <div className="flex flex-col  pt-12 max-w-4xl mx-auto gap-4 flex-wrap items-center justify-center">
            {dict.homePage.faq.list.map((item) => (
              <FaqCard key={item.id} activeId={activeId} setActiveId={setActiveId} {...item} />
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}

export default Faq
