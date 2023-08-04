"use client"

import AreaInput from "../ui/AreaInput"
import Button from "../ui/Button"
import Checkbox from "../ui/Checkbox"
import TextInput from "../ui/TextInput"
import { useState } from "react"
import { useContactFormContext } from "../providers/ContactFormProvider"
import { useDictionary } from "../providers/LangProvider"

const Form = () => {
  const { name, setName, email, setEmail, message, setMessage, error, handleSubmit, loading, response } = useContactFormContext()
  const [privacyAgreement, setPrivacyAgreement] = useState(false)

  const dict = useDictionary()

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextInput
        label={dict.contactPage.form["text-inputs"][0]}
        onChange={setName}
        errorMessage={error.nameErrorMessage}
        value={name}
        type="text"
        isRequired
      />
      <TextInput
        label={dict.contactPage.form["text-inputs"][1]}
        onChange={setEmail}
        errorMessage={error.emailErrorMessage}
        value={email}
        type="email"
        isRequired
      />
      <AreaInput
        label={dict.contactPage.form["text-inputs"][2]}
        onChange={setMessage}
        value={message}
        type="textarea"
        errorMessage={error.messageErrorMessage}
        isRequired
      />
      <div className="flex items-center justify-between gap-8">
        <Checkbox isSelected={privacyAgreement} onChange={setPrivacyAgreement} labelStyles="text-sm" lineColor="red">
          {dict.contactPage.form.checkbox}
        </Checkbox>
        <Button type="submit" isDisabled={!privacyAgreement || loading}>
          {loading ? `${dict.contactPage.form.button[1]}` : `${dict.contactPage.form.button[0]}`}
        </Button>
      </div>
      {response && <p className="text-center mt-12 text-lg font-sans">{response}</p>}
    </form>
  )
}

export default Form
