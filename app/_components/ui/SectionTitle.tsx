interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="max-w-max mx-auto mb-6 md:mb-12 overflow-hidden">
      <h2 className="font-serif font-black text-4xl md:text-6xl tracking-tighter pt-16 pb-4 md:px-16 text-center">{children}</h2>
      <hr />
    </div>
  )
}

export default SectionTitle
