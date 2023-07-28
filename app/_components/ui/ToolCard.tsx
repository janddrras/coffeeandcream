interface ToolCardProps {
  name: string
  link: string
  color: string
  background: string
  icon: () => JSX.Element
}

const ToolCard = ({ name, link, color, background, icon }: ToolCardProps) => {
  return (
    <a href={link} target="_blank" className="block max-w-min">
      <article className="w-64 h-20 flex px-4 py-2 items-center bg-coffee-80/10 dark:bg-cream-30/20 hover:bg-coffee-80/20 hover:dark:bg-cream-30/30 transition-colors duration-150">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full mr-4 text-2xl"
          style={{ background: background, color: color }}
        >
          {icon()}
        </div>
        <h4 className="font-sans text-xl font-bold dark:font-semibold uppercase">{name}</h4>
      </article>
    </a>
  )
}

export default ToolCard
