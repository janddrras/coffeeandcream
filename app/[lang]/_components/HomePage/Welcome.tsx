/* eslint-disable react/no-unescaped-entities */
"use client"
import { useDictionary } from "../providers/LangProvider"
import SectionTitle from "../ui/SectionTitle"

const Welcome = () => {
  const dict = useDictionary()

  return (
    <section className="bg-cream-30/10 dark:bg-coffee-90/50">
      <div className="pt-16 pb-32 px-8">
        <SectionTitle>{dict.homePage.welcome.title}</SectionTitle>
        <div className="lg:columns-2 md:gap-16">
          {dict.homePage.welcome.text.map((text, idx) => (
            <p key={idx} className="font-sans font-regular tracking-wide leading-8 md:text-justify">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Welcome
