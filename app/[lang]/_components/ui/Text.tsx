interface TextProps {
  children?: React.ReactNode
  className?: string
}

const Text = ({ children, className }: TextProps) => {
  return <p className={`font-sans pb-4 ${className}`}>{children}</p>
}

export default Text
