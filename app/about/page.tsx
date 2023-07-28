import AboutHero from "@/app/_components/AboutPage/AboutHero"
import Tools from "@/app/_components/AboutPage/Tools"

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <>
      <AboutHero />
      <Tools />
    </>
  )
}

export default About
