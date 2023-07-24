import ContactHero from "@/app/_components/ContactPage/ContactHero"
import ContactForm from "@/app/_components/ContactPage/ContactForm"

interface ContactProps {}

const Contact = ({}: ContactProps) => {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}

export default Contact
