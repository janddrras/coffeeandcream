"use client"

import { useDictionary } from "../_components/providers/LangProvider"
import PageTitle from "../_components/ui/PageTitle"
import SectionTitle from "../_components/ui/SectionTitle"
import Text from "../_components/ui/Text"

const Gdpr = () => {
  const dict = useDictionary()

  return (
    <section className="relative w-full pt-64 lg:pb-24 pb-96 px-2">
      <div className="py-8">
        <PageTitle>{dict.gdpr.title}</PageTitle>
      </div>
      <Text>{dict.gdpr.subtitle}</Text>
      {dict.gdpr.content.map((item, index) => (
        <section key={index}>
          <SectionTitle>{item.title}</SectionTitle>
          <Text>{item.text}</Text>
          {item.list && (
            <ul className="font-sans pt-4 leading-8 list-disc pl-12">
              {item.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {item.email && (
            <a
              className="font-sans font-medium underline hover:text-coffee-80/50 dark:hover:text-cream-30"
              href="mailto:office@coffeeandcream.net"
            >
              office@coffeeandcream.net
            </a>
          )}
        </section>
      ))}
    </section>
  )
}

export default Gdpr
