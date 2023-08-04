"use client"

import { sendContactForm } from "../../api/contact/_lib/sendContactForm"
import { SetStateAction, createContext, useState, useEffect, useContext } from "react"
import { useDictionary } from "./LangProvider"

interface ContactFormContextProps {
  name: string
  setName: (value: SetStateAction<string>) => void
  email: string
  setEmail: (value: SetStateAction<string>) => void
  message: string
  setMessage: (value: SetStateAction<string>) => void
  loading: boolean
  response: string
  error: {
    nameErrorMessage: string
    emailErrorMessage: string
    messageErrorMessage: string
  }
  setError: (value: SetStateAction<{ nameErrorMessage: string; emailErrorMessage: string; messageErrorMessage: string }>) => void
  selectedItems: string[]
  setSelectedItems: (value: SetStateAction<string[]>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const defaultFormValue = {
  name: "",
  setName: () => {},
  email: "",
  setEmail: () => {},
  message: "",
  setMessage: () => {},
  loading: false,
  response: "",
  error: {
    nameErrorMessage: "",
    emailErrorMessage: "",
    messageErrorMessage: ""
  },
  setError: () => {},
  selectedItems: [],
  setSelectedItems: () => {},
  handleSubmit: async () => {}
}

const ContactFormContext = createContext<ContactFormContextProps>(defaultFormValue)

export const ContactFormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const dict = useDictionary()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [error, setError] = useState({
    nameErrorMessage: "",
    emailErrorMessage: "",
    messageErrorMessage: ""
  })

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const selectedItemsString = selectedItems.join(", ")

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const validateForm = ({ name, email, message }: { name: string; email: string; message: string }): boolean => {
    if (name.length < 2) {
      setError((prev) => ({ ...prev, nameErrorMessage: `${dict.contactPage.form.messages["no-name"]}` }))
      setTimeout(() => setError((prev) => ({ ...prev, nameErrorMessage: "" })), 8000)
      return false
    }

    if (!isValidEmail(email)) {
      setError((prev) => ({ ...prev, emailErrorMessage: `${dict.contactPage.form.messages["no-email"]}` }))
      setTimeout(() => setError((prev) => ({ ...prev, emailErrorMessage: "" })), 8000)
      return false
    }
    if (message.length < 6) {
      setError((prev) => ({ ...prev, messageErrorMessage: `${dict.contactPage.form.messages["no-message"]}` }))
      setTimeout(() => setError((prev) => ({ ...prev, messageErrorMessage: "" })), 8000)
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    const isValidForm = validateForm({ name, email, message })
    if (!isValidForm) {
      setLoading(false)
      return
    }
    try {
      await sendContactForm({ name, email, message, selectedItemsString })
      setLoading(false)
      setName("")
      setEmail("")
      setMessage("")
      setSelectedItems([])
      setResponse(`${dict.contactPage.form.messages.success}`)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setResponse(`${dict.contactPage.form.messages.error}`)
    }
  }

  useEffect(() => {
    if (response) {
      setTimeout(() => setResponse(""), 6000)
    }
  }, [response])

  return (
    <ContactFormContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        error,
        setError,
        handleSubmit,
        loading,
        response,
        selectedItems,
        setSelectedItems
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export const useContactFormContext = () => useContext(ContactFormContext)
