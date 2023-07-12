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

import { SetStateAction, createContext, useContext, useState } from "react"

interface AppContextProps {
  menu: boolean
  setMenu: (value: SetStateAction<boolean>) => void
  settings: boolean
  setSettings: (value: SetStateAction<boolean>) => void
}

const defaultContext = {
  menu: false,
  setMenu: () => {},
  settings: false,
  setSettings: () => {}
}

const AppContext = createContext<AppContextProps>(defaultContext)

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false)
  const [settings, setSettings] = useState(false)
  return <AppContext.Provider value={{ menu, setMenu, setSettings, settings }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
