import Intro from "./_components/Intro"
import Hero from "./_components/HomePage/Hero"
import Welcome from "./_components/HomePage/Welcome"
import Services from "./_components/HomePage/Services"
import Faq from "./_components/HomePage/Faq"

export default function Home() {
  return (
    <>
      {/* <Intro /> */}
      <Hero />
      <Welcome />
      <Services />
      <Faq />
    </>
  )
}
