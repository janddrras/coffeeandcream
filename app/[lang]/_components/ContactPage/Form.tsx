"use client"

import AreaInput from "../ui/AreaInput"
import Button from "../ui/Button"
import Checkbox from "../ui/Checkbox"
import TextInput from "../ui/TextInput"
import { useState } from "react"
import { useContactFormContext } from "../providers/ContactFormProvider"

const Form = () => {
  const { name, setName, email, setEmail, message, setMessage, error, handleSubmit, loading, response } = useContactFormContext()
  const [privacyAgreement, setPrivacyAgreement] = useState(false)

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextInput label="Name or Company" onChange={setName} errorMessage={error.nameErrorMessage} value={name} type="text" isRequired />
      <TextInput label="Email address" onChange={setEmail} errorMessage={error.emailErrorMessage} value={email} type="email" isRequired />
      <AreaInput
        label="Your Message"
        onChange={setMessage}
        value={message}
        type="textarea"
        errorMessage={error.messageErrorMessage}
        isRequired
      />
      <div className="flex items-center justify-between gap-8">
        <Checkbox isSelected={privacyAgreement} onChange={setPrivacyAgreement} labelStyles="text-sm" lineColor="red">
          I agree with the privacy statement and to be contacted by Coffeeandcream office
        </Checkbox>
        <Button type="submit" isDisabled={!privacyAgreement || loading}>
          {loading ? "SENDING..." : "SEND"}
        </Button>
      </div>
      {response && <p className="text-center mt-12 text-lg font-sans">{response}</p>}
    </form>
  )
}

export default Form
