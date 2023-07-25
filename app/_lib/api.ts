export interface ContactForm {
  name: string
  email: string
  message: string
}

export const sendContactForm = async (data: ContactForm) =>
  fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
