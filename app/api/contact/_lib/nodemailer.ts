import nodemailer from "nodemailer"
import type { ContactForm } from "./sendContactForm"

export const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
})

export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL
}

export const generateEmail = (data: ContactForm) => {
  return `
		<h1>You have a new message from ${data.name}</h1>
    <br />
		<p>${data.message}</p>
    <br />
		<p>Reply to: ${data.email}</p>
    <hr />
		<p>Interested for ${data.selectedItemsString}</p>
	`
}
