"use client"

import { ThemeProvider } from "next-themes"

export function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

// context

import { createContext, useContext } from "react"

export const AppContext = createContext({})
export const useAppContext = () => useContext(AppContext)
