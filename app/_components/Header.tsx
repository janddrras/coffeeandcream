"use client"

import Link from "next/link"
import { PiGearLight } from "react-icons/pi"
import Container from "./Container"
import Logo from "./Logo"
import { logoInner } from "../_lib/variants/logo"
import MenuButton from "./MenuButton"
import Menu from "./Menu"
import Settings from "./Settings"
import { useAppContext } from "./Providers"

const Header = () => {
  const { settings, setSettings } = useAppContext()

  return (
    <header className="fixed h-52 w-full z-20 pt-12">
      <Container border={false}>
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Link href="/">
              <Logo size={60} r={14} strokeWidth={2} variant1={logoInner} whileHover="whileHover" />
            </Link>
            <h3 className="font-logo text-2xl tracking-wider font-light">coffeeandcream</h3>
          </div>
          <div className="flex items-center gap-5">
            <PiGearLight
              className="text-4xl hover:rotate-180 hover:scale-150 transition-transform duration-500 cursor-pointer opacity-40"
              onClick={() => setSettings(!settings)}
            />
            <MenuButton />
            <Menu />
            <Settings />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
