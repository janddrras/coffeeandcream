import { use, useCallback, useEffect, useState } from "react"
import { sendContactForm } from "@/app/_lib/api"

const useContactForm = () => {
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
    setLoading(true)
    e.preventDefault()
    validateForm({ name, email, message })
    try {
      await sendContactForm({ name, email, message })
      setLoading(false)
      setName("")
      setEmail("")
      setMessage("")
      setResponse("Thank you for your message! I'll get back to you as soon as possible.")
    } catch (error) {
      console.log(error)
      setLoading(false)
      setResponse("Something went wrong. Please try again later.")
    }
  }

  useEffect(() => {
    if (response) {
      setTimeout(() => setResponse(""), 5000)
    }
  }, [response])

  return {
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
    response
  }
}

export default useContactForm
