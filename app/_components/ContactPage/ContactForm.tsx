"use client"

import SectionTitle from "@/app/_components/ui/SectionTitle"
import TextInput from "@/app/_components/ui/TextInput"
import AreaInput from "@/app/_components/ui/AreaInput"
import { useState } from "react"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section className="bg-cream-30/10 dark:bg-coffee-90/200">
      <div className="pt-16 md:pb-32 pb-8 px-2 md:px-8">
        <SectionTitle>Send me a message</SectionTitle>
        <form className="flex flex-col gap-4">
          <TextInput label="Name or Company" onChange={setName} value={name} type="text" isRequired />
          <TextInput label="Email address" onChange={setEmail} value={email} type="email" isRequired />
          <AreaInput label="Your Message" onChange={setMessage} value={message} type="textarea" isRequired />
        </form>
      </div>
    </section>
  )
}

export default ContactForm
