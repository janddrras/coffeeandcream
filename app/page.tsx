"use client"

import { useTheme } from "next-themes"
import Intro from "./_components/Intro"
import Container from "./_components/Layout/Container"

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      {/* <Intro /> */}
      <div className="h-screen">
        <Container>
          <h1 className="font-serif font-black text-8xl tracking-tighter pt-64">Main title</h1>
        </Container>
      </div>
    </>
  )
}
