import { useState, useEffect, useCallback } from "react"

export const useScrollDirection = () => {
  const [active, setActive] = useState(true)
  const [top, setTop] = useState(0)
  const [last, setLast] = useState(0)

  const scrollDirection = useCallback(() => {
    setTop(window.scrollY)
    if (top - last < 0) {
      setActive(true)
    } else {
      setActive(false)
    }
    setLast(top)
  }, [last, top])

  useEffect(() => {
    window.addEventListener("scroll", scrollDirection)
    return () => {
      window.removeEventListener("scroll", scrollDirection)
    }
  }, [active, scrollDirection, top])

  return [active, top]
}
