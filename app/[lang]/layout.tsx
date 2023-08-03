import "./_lib/globals.css"
import type { Metadata } from "next"
import { Inter, Abhaya_Libre, Comfortaa } from "next/font/google"
import { Theme } from "./_components/providers/ThemeProvider"
import Footer from "./_components/Layout/Footer"
import Header from "./_components/Layout/Header"
import Container from "./_components/ui/Container"
import { MenuProvider } from "./_components/providers/MenuProvider"
import { i18n } from "../../i18n-config"
import { getLayoutDictionary } from "./_lib/dictionaries/getLayoutDictionary"
import type { Locale } from "@/i18n-config"
import { LangProvider } from "./_components/providers/LangProvider"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const abhaya = Abhaya_Libre({ subsets: ["latin"], display: "swap", weight: ["800"], variable: "--font-abhaya" })
const comfortaa = Comfortaa({ subsets: ["latin"], display: "swap", weight: ["300"], variable: "--font-comfortaa" })

export const metadata: Metadata = {
  title: "coffeeandcream",
  description: "Professional web pages at a reasonable price."
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  const dictionary = await getLayoutDictionary(params.lang)

  return (
    <LangProvider lang={params.lang}>
      <html lang={params.lang} suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={`${inter.variable} ${abhaya.variable} ${comfortaa.variable} bg-cream-10 text-coffee-80 dark:bg-coffee-100 dark:text-cream-10 scroll-smooth`}
        >
          <Theme>
            <MenuProvider>
              <Header dictionary={dictionary} />
            </MenuProvider>
            <main className="relative">
              <Container stain={true}>{children}</Container>
            </main>
            <Footer dictionary={dictionary} />
          </Theme>
        </body>
      </html>
    </LangProvider>
  )
}