/* eslint-disable @next/next/no-img-element */
"use client"

import useMeasure from "react-use-measure"
import PageTitle from "../ui/PageTitle"
import { motion } from "framer-motion"
import { circleVariants, lineVariants } from "../../_lib/variants/hero"
import { useDictionary } from "../providers/LangProvider"
import Image from "next/image"
import laptop from "/public/images/laptop.png"
import phone from "/public/images/phone.png"

const Hero = () => {
  let [ref, { width }] = useMeasure()
  let circle = width > 1100 ? width - width / 3 : width - width / 4

  const dict = useDictionary()

  return (
    <section className="relative pt-32 md:pt-64 mb-32 px-8 flex flex-col lg:flex-row z-10" ref={ref} id="hero">
      <div className="relative">
        {dict.homePage.hero.title.map((title) => (
          <PageTitle key={title}>{title}</PageTitle>
        ))}
        <motion.hr className="opacity-25 mt-8 origin-left" variants={lineVariants} initial="initial" animate="animate" />
        <p className="font-sans text-xl tracking-wide font-light py-8">{dict.homePage.hero.subtitle}</p>
      </div>
      <div className="relative w-full h-full mb-64 lg:mb-0">
        <Image src={laptop} alt="Laptop" className="absolute inset-0 md:scale-75 lg:scale-100" />
        <Image src={phone} alt="Mobile Phone" className="absolute -md:bottom-24 md:left-20 scale-50 md:scale-50" />
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
    </section>
  )
}

export default Hero
