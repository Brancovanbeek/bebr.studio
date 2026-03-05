export const prerender = false

import nodemailer from "nodemailer"

const MAIL_CONFIG = {
  host: "h57.mijn.host",
  port: 587,
  secure: false,
  auth: {
    user: "contact@bebr.studio",
    pass: "Bebr130306!",
  },
  tls: {
    rejectUnauthorized: false,
  },
}

function buildMailOptions(firstName, lastName, email, message) {
  return {
    from: "contact@bebr.studio",
    to: "contact@bebr.studio",
    replyTo: email,
    subject: `Nieuw bericht van ${firstName} ${lastName}`,
    text: `Naam: ${firstName} ${lastName}\nEmail: ${email}\n\nBericht:\n${message}`,
  }
}

export async function POST({ request }) {
  const contentType = request.headers.get('content-type') || ''
  
  const isJSON = contentType.includes('application/json')
  const { firstName, lastName, email, message } = isJSON
    ? await request.json()
    : Object.fromEntries(await request.formData())

  const transporter = nodemailer.createTransport(MAIL_CONFIG)

  try {
    const result = await transporter.sendMail(
      buildMailOptions(firstName, lastName, email, message)
    )
    console.log("Message sent:", result.response)

    if (!isJSON) return Response.redirect('/?success=true', 303)
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (err) {
    console.error("MAIL ERROR:", err)

    if (!isJSON) return Response.redirect('/?success=false', 303)
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}