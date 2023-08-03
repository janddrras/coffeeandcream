import AboutHero from "../_components/AboutPage/AboutHero"
import Tools from "../_components/AboutPage/Tools"

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
