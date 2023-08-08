/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import Checkbox from "../ui/Checkbox"
import type { Price } from "./ContactForm"
import { useContactFormContext } from "../providers/ContactFormProvider"
import { useDictionary } from "../providers/LangProvider"

interface PriceCalculatorProps {
  priceList: Price[]
}

const PriceCalculator = ({ priceList }: PriceCalculatorProps) => {
  const dict = useDictionary()
  const [price, setPrice] = useState(0)
  const defaultSelected = new Array(priceList.length).fill(false)
  const [selected, setSelected] = useState(defaultSelected)
  const { setSelectedItems } = useContactFormContext()

  const handleChange = (name: string, price: string) => {
    const index = priceList.findIndex((item) => item.name === name)
    setSelected((prev) => {
      const newSelected = [...prev]
      newSelected[index] = !prev[index]
      return newSelected
    })
    setPrice((prev) => (selected[index] ? prev - parseInt(price) : prev + parseInt(price)))
    setSelectedItems((prev) => (selected[index] ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  return (
    <section id="price-calculator" className="bg-cream-30/10 px-2 md:px-8 pb-24 pt-12">
      <form>
        <h3 className="font-sans text-lg font-bold">{dict.contactPage.prices.title}</h3>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="flex flex-col items-start gap-4 px-4 md:w-1/2">
            <h4 className="font-sans text-lg text-coffee-80/60 dark:text-cream-30/80 font-extrabold pb-2">
              {dict.contactPage.prices.subtitles[0]}
            </h4>
            {dict.contactPage.prices.items
              .filter((price) => price.category === "development")
              .map((item) => (
                <Checkbox
                  lineColor="blue"
                  name={item.name}
                  value={item.price}
                  key={item.name}
                  isSelected={selected[item.name as keyof typeof selected]}
                  onChange={() => handleChange(item.name, item.price)}
                >
                  {item.label}
                </Checkbox>
              ))}
          </div>
          <div className="flex flex-col items-start gap-4 px-4 mt-8 md:mt-0 md:w-1/2">
            <h4 className="font-sans text-lg text-coffee-80/60 dark:text-cream-30/80 font-extrabold pb-2">
              {dict.contactPage.prices.subtitles[1]}
            </h4>
            {dict.contactPage.prices.items
              .filter((price) => price.category === "design")
              .map((item) => (
                <Checkbox
                  lineColor="blue"
                  name={item.name}
                  value={item.price}
                  key={item.name}
                  isSelected={selected[item.name as keyof typeof selected]}
                  onChange={() => handleChange(item.name, item.price)}
                >
                  {item.label}
                </Checkbox>
              ))}
          </div>
        </div>
        <div className="bg-cream-30/10 mt-8 p-8">
          <h4 className="font-sans text-lg text-coffee-80/60 dark:text-cream-30/80 font-extrabold pb-8">
            {dict.contactPage.prices.subtitles[2]}
          </h4>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <h5 className="text-2xl  text-coffee-80/60 dark:text-cream-30/80 font-extrabold px-4 w-full md:w-36 py-4 font-sans bg-cream-10 shadow-inner">
              {price} €
            </h5>
            <p className="font-sans text-sm md:w-2/3">{dict.contactPage.prices.caption}</p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default PriceCalculator
