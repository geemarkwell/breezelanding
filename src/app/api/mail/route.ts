import { render } from '@react-email/render'
import NetlifyWelcomeEmail from '../../../../emails'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(
  request: Request,
  res: Response
) {
  const { email } = await request.json()

  const { error } = await resend.emails.send({
    from: 'Breeze <onboarding@breezenow.io>',
    to: [email],
    subject: 'Thank You',
    html: render(NetlifyWelcomeEmail({}))
  })

  if (error) {
    console.log('not sent')
    return Response.json(error)
  }

  return Response.json('Email sent succesfully')
}
