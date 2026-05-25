import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'fukeharizwan2003@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.log(error)
    return Response.json({ success: false }, { status: 500 })
  }
}