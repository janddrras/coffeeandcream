"use client"

import SectionTitle from "@/app/_components/ui/SectionTitle"
import TextInput from "@/app/_components/ui/TextInput"
import AreaInput from "@/app/_components/ui/AreaInput"
import { useState } from "react"
import Checkbox from "@/app/_components/ui/Checkbox"
import Button from "../ui/Button"
import useContactForm from "@/app/_hooks/useContactForm"

const ContactForm = () => {
  const { name, setName, email, setEmail, message, setMessage, error, handleSubmit } = useContactForm()
  const [privacyAgreement, setPrivacyAgreement] = useState(false)

  return (
    <section className="bg-cream-30/10 dark:bg-coffee-90/200">
      <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
        <SectionTitle>Send me a message</SectionTitle>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextInput label="Name or Company" onChange={setName} errorMessage={error.nameErrorMessage} value={name} type="text" isRequired />
          <TextInput
            label="Email address"
            onChange={setEmail}
            errorMessage={error.emailErrorMessage}
            value={email}
            type="email"
            isRequired
          />
          <AreaInput
            label="Your Message"
            onChange={setMessage}
            value={message}
            type="textarea"
            errorMessage={error.messageErrorMessage}
            isRequired
          />
          <div className="flex items-center justify-between gap-8">
            <Checkbox isSelected={privacyAgreement} onChange={setPrivacyAgreement} labelStyles="text-sm">
              I agree with the privacy statement and to be contacted by Coffeeandcream office
            </Checkbox>
            <Button type="submit" isDisabled={!privacyAgreement}>
              SEND
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
