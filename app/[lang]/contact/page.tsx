import ContactHero from "../_components/ContactPage/ContactHero"
import ContactForm from "../_components/ContactPage/ContactForm"

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
