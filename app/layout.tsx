import "@/app/_lib/globals.css"
import type { Metadata } from "next"
import { Inter, Abhaya_Libre, Comfortaa } from "next/font/google"
import { AppContextProvider, Theme } from "@/app/_components/Providers"
import Footer from "@/app/_components/Layout/Footer"
import Header from "@/app/_components/Layout/Header"
import Container from "./_components/Layout/ui/Container"

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${abhaya.variable} ${comfortaa.variable} bg-cream-10 text-coffee-80 dark:bg-coffee-100 dark:text-cream-10 scroll-smooth`}
      >
        <Theme>
          <AppContextProvider>
            <Header />
          </AppContextProvider>
          <Container stain={true}>
            <main className="relative">{children}</main>
          </Container>
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
