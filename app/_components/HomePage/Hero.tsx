/* eslint-disable @next/next/no-img-element */
"use client"

import useMeasure from "react-use-measure"
import PageTitle from "../ui/PageTitle"
import { motion } from "framer-motion"
import { circleVariants, lineVariants } from "@/app/_lib/variants/hero"

const Hero = () => {
  let [ref, { width }] = useMeasure()
  let circle = width > 1100 ? width - width / 3 : width - width / 4

  return (
    <section className="relative" ref={ref}>
      <div className="w-full pt-64 pb-24 px-8">
        <div className="relative">
          <PageTitle>Web</PageTitle>
          <PageTitle>Design</PageTitle>
          <PageTitle>Development</PageTitle>
          <motion.hr className="opacity-25 mt-8 origin-left" variants={lineVariants} initial="initial" animate="animate" />
          <p className="font-sans text-xl tracking-wide font-light py-8">Professional web pages at affordable prices.</p>
        </div>
        <div className="hidden lg:block absolute top-48 -right-16 w-3/5">
          <img src="/images/laptop.png" alt="Laptop" className="absolute top-8 md:-right-6 md:scale-75 lg:scale-100" />
          <img src="/images/phone.png" alt="Mobile Phone" className="absolute md:top-24 md:right-8 scale-50 lg:scale-75" />
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
    </section>
  )
}

export default Hero
