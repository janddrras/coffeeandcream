/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import PageTitle from "@/app/[lang]/_components/ui/PageTitle"
import { motion } from "framer-motion"
import { circleVariants, lineVariants } from "@/app/[lang]/_lib/variants/hero"
import useMeasure from "react-use-measure"
import { useDictionary } from "../providers/LangProvider"

const AboutHero = () => {
  let [ref, { width }] = useMeasure()
  let circle = width > 1100 ? width - width / 3 : width - width / 4

  const dict = useDictionary()

  return (
    <section className="relative" ref={ref}>
      <div className="relative w-full pt-64 pb-24 px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8">
          <div className="w-full">
            <PageTitle>{dict.aboutPage.hero.title}</PageTitle>
            <motion.hr className="opacity-25 mt-8 origin-left" variants={lineVariants} initial="initial" animate="animate" />

            <p className="font-sans text-lg tracking-wide font-light py-8">{dict.aboutPage.hero.text}</p>
          </div>
          <div className="relative w-full z-10">
            <img src="/images/self.png" alt="Laptop" className="scale-75 lg:scale-100" />
          </div>
          <svg
            className="hidden lg:block absolute top-10 right-1 w-full z-0 opacity-100 max-w-min origin-center"
            width={circle}
            height={circle}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx={circle / 2}
              cy={circle / 2}
              r={circle / 2}
              fill="transparent"
              stroke="currentColor"
              strokeWidth={0.2}
              variants={circleVariants}
              initial="initial"
              animate="animate"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
