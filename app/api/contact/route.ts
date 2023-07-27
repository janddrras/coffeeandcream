import { generateEmail, mailOptions, transporter } from "@/app/_lib/nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  if (!body.name || !body.email || !body.message) return NextResponse.json({ status: 400, message: "Bad Request" })
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New message from ${body.name}`,
      text: body.message,
      html: generateEmail(body),
      replyTo: body.email
    })
    return NextResponse.json({ status: 200, message: "OK" })
  } catch (error) {
    console.error(error)
  }

  return NextResponse.json({ status: 400, message: "Bad Request" })
}
