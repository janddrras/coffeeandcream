"use client"

import Link from "next/link"
import { PiGearLight } from "react-icons/pi"
import Container from "@/app/_components/ui/Container"
import Logo from "@/app/_components/ui/Logo"
import { logoInner } from "@/app/_lib/variants/logo"
import MenuButton from "@/app/_components/ui/MenuButton"
import Menu from "@/app/_components/Layout/Menu"
import Settings from "@/app/_components/Layout/Settings"
import { useAppContext } from "@/app/_components/Providers"

const Header = () => {
  const { settings, setSettings } = useAppContext()

  return (
    <header className="fixed h-52 w-full z-40 pt-12">
      <Container border={false}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-5 pl-2">
            <Link href="/">
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
