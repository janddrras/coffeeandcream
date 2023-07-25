import { useCallback, useState } from "react"
import { sendContactForm } from "@/app/_lib/api"

const useContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState({
    nameErrorMessage: "",
    emailErrorMessage: "",
    messageErrorMessage: ""
  })

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const validateForm = useCallback(({ name, email, message }: { name: string; email: string; message: string }) => {
    if (name.length < 2) setError((prev) => ({ ...prev, nameErrorMessage: "Please enter your name, company name or an alias" }))

    if (!isValidEmail(email)) setError((prev) => ({ ...prev, emailErrorMessage: "Please provide a valid email" }))

    if (message.length < 6) setError((prev) => ({ ...prev, messageErrorMessage: "Sending an empty message doesn't make any sense!" }))

    setTimeout(() => setError((prev) => ({ ...prev, nameErrorMessage: "", emailErrorMessage: "", messageErrorMessage: "" })), 5000)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validateForm({ name, email, message })
    await sendContactForm({ name, email, message })
  }

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    error,
    setError,
    handleSubmit
  }
}

export default useContactForm
