"use client"

import { useTheme } from "next-themes"
import Intro from "./_components/Intro"

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Intro />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1 className="font-serif font-black text-8xl tracking-tighter">Main title</h1>
          <button onClick={() => setTheme("light")} className="bg-dbg rounded text-lbg px-4 dark:bg-lbg dark:text-dbg">
            Light
          </button>
          <button onClick={() => setTheme("dark")} className="bg-dbg rounded text-lbg px-4 dark:bg-lbg dark:text-dbg">
            Dark
          </button>
        </div>
      </main>
    </>
  )
}
