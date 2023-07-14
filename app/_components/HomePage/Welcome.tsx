/* eslint-disable react/no-unescaped-entities */
import Container from "@/app/_components/Layout/ui/Container"
import SectionTitle from "../Layout/ui/SectionTitle"

const Welcome = () => {
  return (
    <section className="bg-cream-20 dark:bg-coffee-90">
      <Container>
        <div className="pt-16 pb-32">
          <SectionTitle>Welcome !</SectionTitle>
          <div className="md:columns-2 md:gap-16">
            <p className="font-sans font-regular tracking-wide leading-8 text-justify">
              I am a freelance web designer and developer with years of experience providing high-quality services to clients around the
              world. My services include web design, web development, e-commerce solutions, content management systems, and much more. I use
              the latest technologies and best practices to ensure that my projects are always up to date and of the highest quality.
            </p>
            <p className="font-sans font-regular tracking-wide leading-8 text-justify">
              I believe that every business deserves a great website, and I am committed to making that a reality for my clients. Contact me
              today to learn more about my services and how I can help you take your online presence to the next level. Thank you for
              considering me for your web design and development needs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Welcome
