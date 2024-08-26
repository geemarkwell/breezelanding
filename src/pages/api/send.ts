import type { NextApiRequest, NextApiResponse } from 'next'
import { Waitlist } from '@/components/email/waitlist'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: Waitlist({ firstName: 'John' })
  })

  if (error) {
    res.status(400).json(error)
    return
  }

  res.status(200).json(data)
}
