"use client"

import SectionTitle from "@/app/_components/ui/SectionTitle"
import PriceCalculator from "./PriceCalculator"
import prices from "@/app/_lib/docs/prices.json"
import { ContactFormContextProvider } from "../providers/ContactFormProvider"
import Form from "./Form"

export type Price = (typeof prices)[0]

const ContactForm = () => {
  return (
    <ContactFormContextProvider>
      <section className="bg-cream-30/10 dark:bg-coffee-90/200">
        <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
          <SectionTitle>Send me a message</SectionTitle>
          <Form />
        </div>
        <PriceCalculator priceList={prices} />
      </section>
    </ContactFormContextProvider>
  )
}

export default ContactForm
