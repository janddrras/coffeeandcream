"use client"

import { SetStateAction, createContext, useContext, useState } from "react"

interface MenuProps {
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

const Menu = createContext<MenuProps>(defaultContext)

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false)
  const [settings, setSettings] = useState(false)
  return <Menu.Provider value={{ menu, setMenu, setSettings, settings }}>{children}</Menu.Provider>
}

export const useMenuContext = () => useContext(Menu)
