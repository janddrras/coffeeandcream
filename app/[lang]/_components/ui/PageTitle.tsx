"use client"

interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <h1 className="font-serif font-black text-5xl sm:text-6xl text-center md:text-left md:text-8xl tracking-tighter py-6">{children}</h1>
  )
}

export default PageTitle
