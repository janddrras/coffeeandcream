"use client"

import SectionTitle from "../../_components/ui/SectionTitle"
import { design, coding, libraries, others } from "../../_lib/docs/competences"
import ToolCard from "../../_components/ui/ToolCard"
import ToolBanner from "../ui/ToolBanner"
import { useDictionary } from "../providers/LangProvider"

const Tools = () => {
  const othersInverted = [...others].reverse()

  const dict = useDictionary()

  return (
    <section className="bg-cream-30/10 dark:bg-coffee-90/50 pt-16 md:pb-32 pb-8 px-2 md:px-8" id="tools">
      <SectionTitle>{dict.aboutPage.tools.title}</SectionTitle>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row flex-wrap md:flex-row items-center justify-center gap-4">
          <section className="mt-16">
            <h3 className="font-sans font-ligh text-2xl text-center pb-12">{dict.aboutPage.tools.subtitles[0]}</h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {coding.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          </section>
          <section className="mt-16">
            <h3 className="font-sans font-ligh text-2xl text-center pb-12">{dict.aboutPage.tools.subtitles[1]}</h3>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {design.map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          </section>
        </div>
        <section className="mt-16">
          <h3 className="font-sans font-ligh text-2xl text-center pb-12">{dict.aboutPage.tools.subtitles[2]}</h3>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            {libraries.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>
        <section className="mt-16 mb-8 col-span-2 overflow-hidden">
          <h3 className="font-sans font-ligh text-2xl text-center pb-12">{dict.aboutPage.tools.subtitles[3]}</h3>
          <ToolBanner serie={others} />
          <ToolBanner serie={othersInverted} direction={-1} />
        </section>
      </div>
    </section>
  )
}

export default Tools
