interface ContainerProps {
  children: React.ReactNode
  border?: boolean
}

const Container = ({ children, border = true }: ContainerProps) => {
  return (
    <div className="max-w-screen-2xl sm:px-24 md:px-32 lg:px-40 mx-auto h-full">
      <div className={`px-2 h-full ${border ? "border-x border-cream-30/25 dark:border-coffee-80 relative" : ""}`}>
        <div className="relative z-10">{children}</div>
        {border && <div className="w-1/2 h-full border-r border-cream-30/25 dark:border-coffee-80 absolute top-0 left-0 z-0" />}
      </div>
    </div>
  )
}

export default Container
