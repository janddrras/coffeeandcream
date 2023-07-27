import nodemailer from "nodemailer"
import { ContactForm } from "./api"

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
		<p>${data.message}</p>
		<p>Reply to: ${data.email}</p>
	`
}
