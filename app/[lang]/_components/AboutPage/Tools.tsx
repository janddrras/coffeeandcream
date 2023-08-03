import SectionTitle from "@/app/[lang]/_components/ui/SectionTitle"
import { design, coding, libraries, others } from "@/app/[lang]/_lib/docs/competences"
import ToolCard from "@/app/[lang]/_components/ui/ToolCard"
import ToolBanner from "../ui/ToolBanner"

const Tools = () => {
  const othersInverted = [...others].reverse()

  return (
    <section className="bg-cream-30/10 dark:bg-coffee-90/50">
      <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
        <SectionTitle>My Favorite Tools</SectionTitle>
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          <section className="mt-8">
            <h3 className="font-sans font-ligh text-2xl text-center pb-12">For coding</h3>
            <div className="grid grid-cols-2 gap-4">
              {coding.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          </section>
          <section className="mt-8">
            <h3 className="font-sans font-ligh text-2xl text-center pb-12">For design</h3>
            <div className="grid grid-cols-2 gap-4">
              {design.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          </section>
          <section className="mt-16 col-span-2">
            <h3 className="font-sans font-ligh text-2xl text-center pb-12">Libraries and Frameworks</h3>
            <div className="grid grid-cols-4 gap-4">
              {libraries.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          </section>
          <section className="mt-16 mb-8 col-span-2 overflow-hidden">
            <h3 className="font-sans font-ligh text-2xl text-center pb-12">Other Tools I Love</h3>
            <ToolBanner serie={others} />
            <ToolBanner serie={othersInverted} direction={-1} />
          </section>
        </div>
      </div>
    </section>
  )
}

export default Tools
