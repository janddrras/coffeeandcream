"use client"

import { useDictionary } from "../_components/providers/LangProvider"
import PageTitle from "../_components/ui/PageTitle"
import SectionTitle from "../_components/ui/SectionTitle"
import Text from "../_components/ui/Text"

const Terms = () => {
  const dict = useDictionary()

  return (
    <section className="relative w-full pt-64 lg:pb-24 pb-96 px-2">
      <div className="py-8">
        <PageTitle>{dict.terms.title}</PageTitle>
      </div>
      {dict.terms.subtitle.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
      {dict.terms.content.map((item, index) => (
        <article key={index}>
          <SectionTitle>
            <span className="mr-4">{index + 1}.</span>
            {item.title}
          </SectionTitle>
          {item.text.map((text, idx) => (
            <Text key={idx}>
              <span className="mr-4 font-medium">
                {index + 1}.{idx + 1}
              </span>
              {text}
            </Text>
          ))}
        </article>
      ))}

      <hr className="py-4" />
      <Text>{dict.terms.footer}</Text>
    </section>
  )
}

export default Terms
