"use client"

import { useTheme } from "next-themes"
import Intro from "./_components/Intro"
import Container from "./_components/Container"

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Intro />
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        </div>
      </main> */}

      <div className="h-screen">
        <Container>
          <h1 className="font-serif font-black text-8xl tracking-tighter pt-64">Main title</h1>
          <button
            onClick={() => setTheme("light")}
            className="bg-coffee-100 rounded text-cream-10 px-4 dark:bg-cream-10 dark:text-coffee-80"
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="bg-coffee-100 rounded text-cream-10 px-4 dark:bg-cream-10 dark:text-coffee-80"
          >
            Dark
          </button>
        </Container>
      </div>
    </>
  )
}
