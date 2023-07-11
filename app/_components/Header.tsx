"use client"

import { useTheme } from "next-themes"
import Container from "./Container"
import Logo from "./Logo"
import { useEffect, useState } from "react"
import { logoInner } from "../_lib/variants/logo"
import Link from "next/link"

const Header = () => {
  const { theme } = useTheme()
  const [color, setcolor] = useState("currentColor")
  useEffect(() => {
    theme === "light" ? setcolor("#261E1A") : setcolor("#F2EDDE")
  }, [theme])

  return (
    <header className="fixed h-52 w-full z-20">
      <Container border={false}>
        <div className="relative flex items-center z-10 gap-5 pt-12">
          <Link href="/">
            <Logo size={60} r={14} strokeWidth={2} color={color} variant1={logoInner} whileHover="whileHover" />
          </Link>
          <h3 className="font-logo text-2xl tracking-wider font-light">coffeeandcream</h3>
        </div>
      </Container>
    </header>
  )
}

export default Header
