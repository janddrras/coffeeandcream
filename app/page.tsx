"use client"

import Intro from "@/app/_components/Intro"
import Hero from "@/app/_components/HomePage/Hero"
import Welcome from "@/app/_components/HomePage/Welcome"
import Services from "@/app/_components/HomePage/Services"

export default function Home() {
  return (
    <>
      {/* <Intro /> */}

      {/* <div className="h-screen">
        <Container>
          <h1 className="font-serif font-black text-8xl tracking-tighter pt-64">Main title</h1>
        </Container>
      </div> */}

      <Hero />
      <Welcome />
      <Services />
    </>
  )
}
