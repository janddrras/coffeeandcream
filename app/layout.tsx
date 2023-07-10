import "./globals.css"
import type { Metadata } from "next"
import { Inter, Abhaya_Libre, Comfortaa } from "next/font/google"
import { Theme } from "./_components/Providers"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const abhaya = Abhaya_Libre({ subsets: ["latin"], display: "swap", weight: ["800"], variable: "--font-abhaya" })
const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap", weight: ["300"], variable: "--font-comfortaa" })

export const metadata: Metadata = {
  title: "coffeeandcream",
  description: "Professional web pages at a reasonable price."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${abhaya.variable} ${comfortaa.variable} bg-lbg text-dbg dark:bg-dbg dark:text-lbg`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
