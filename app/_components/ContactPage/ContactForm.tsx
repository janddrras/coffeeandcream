"use client"

import SectionTitle from "@/app/_components/ui/SectionTitle"
import TextInput from "@/app/_components/ui/TextInput"
import AreaInput from "@/app/_components/ui/AreaInput"
import { useState } from "react"
import Checkbox from "@/app/_components/ui/Checkbox"
import Button from "../ui/Button"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [privacyAgreement, setPrivacyAgreement] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, email, message, privacyAgreement })
  }

  return (
    <section className="bg-cream-30/10 dark:bg-coffee-90/200">
      <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
        <SectionTitle>Send me a message</SectionTitle>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextInput label="Name or Company" onChange={setName} value={name} type="text" isRequired />
          <TextInput label="Email address" onChange={setEmail} value={email} type="email" isRequired />
          <AreaInput label="Your Message" onChange={setMessage} value={message} type="textarea" isRequired />
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
