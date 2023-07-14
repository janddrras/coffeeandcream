"use client"

interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => {
  return <h1 className="font-serif font-black text-8xl tracking-tighter py-6">{children}</h1>
}

export default PageTitle
