"use client"

import Link from "next/link"
import { PiGearLight } from "react-icons/pi"
import Container from "../../_components/ui/Container"
import Logo from "../../_components/ui/Logo"
import { logoInner } from "../../_lib/variants/logo"
import MenuButton from "../../_components/ui/MenuButton"
import Menu from "../../_components/Layout/Menu"
import Settings from "../../_components/Layout/Settings"
import { useMenu } from "../providers/MenuProvider"
import { usePathname } from "next/navigation"

const Header = () => {
  const { settings, setSettings } = useMenu()
  const locale = usePathname().split("/")[1]

  return (
    <header className="fixed h-52 w-full z-40 pt-12">
      <Container border={false}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-5 pl-2">
            <Link href={`/${locale}`}>
              <Logo size={60} r={14} strokeWidth={2} variant1={logoInner} whileHover="whileHover" />
            </Link>
            <h3 className="font-logo hidden md:block text-2xl tracking-wider font-light">coffeeandcream</h3>
          </div>
          <div className="flex flex-col items-center gap-5 pr-2">
            <MenuButton />
            <PiGearLight
              className="text-4xl hover:rotate-180 hover:scale-150 transition-transform duration-500 cursor-pointer opacity-40"
              onClick={() => setSettings(!settings)}
            />
            <Menu />
            <Settings />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
