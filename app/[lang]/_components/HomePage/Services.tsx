"use client"

import SectionTitle from "../../_components/ui/SectionTitle"
import { useDictionary } from "../providers/LangProvider"
import ServiceCard from "../ui/ServiceCard"

const Services = () => {
  const dict = useDictionary()

  return (
    <section>
      <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
        <SectionTitle>{dict.homePage.services.title}</SectionTitle>
        <p className="font-sans font-regular text-sm tracking-wide leading-8 text-center max-w-3xl mx-auto">
          {dict.homePage.services.text}
        </p>
        <div className="flex flex-col md:flex-row lg:justify-between pt-12 max-w-4xl mx-auto gap-4 flex-wrap items-center justify-center">
          {dict.homePage.services.list.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
