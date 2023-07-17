/* eslint-disable @next/next/no-img-element */
"use client"

import PageTitle from "../Layout/ui/PageTitle"

const Hero = () => {
  return (
    <section className="relative">
      <div className="relative w-full pt-64 pb-24 px-8">
        <div className="flex flex-col md:flex-row items-start justify-between z-10">
          <div>
            <PageTitle>Web</PageTitle>
            <PageTitle>Design</PageTitle>
            <PageTitle>Development</PageTitle>
            <hr className="opacity-25 mt-8 " />
            <p className="font-sans text-xl tracking-wide font-light py-8">Professional web pages at affordable prices.</p>
          </div>
          <div className="relative w-full z-10">
            <img src="/images/laptop.png" alt="Laptop" className="absolute top-8 -right-6" />
            <img src="/images/phone.png" alt="Mobile Phone" className="absolute top-24 right-8 scale-75" />
          </div>
        </div>
        <svg className="absolute bottom-0 right-0 w-full z-0 opacity-25" viewBox="0 0 50 50" preserveAspectRatio="none">
          <circle cx="33" cy="25" r="16" fill="transparent" stroke="currentColor" strokeWidth={0.05} />
        </svg>
      </div>
    </section>
  )
}

export default Hero
