import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind
} from '@react-email/components'
import * as React from 'react'

interface NetlifyWelcomeEmailProps {
  steps?: {
    id: number
    Description: React.ReactNode
  }[]
  links?: string[]
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

const PropDefaults: NetlifyWelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Development Progress.</strong> As a
          waitlist member, you'll receive regular updates on
          our app's development, including our progress
          towards launch and exciting new features we've
          implemented.
        </li>
      )
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Feedback.</strong> Your insights are
          valuable to us. Share your thoughts and help us
          create the best possible experience.
        </li>
      )
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Early Signer Offers.</strong> Enjoy
          exclusive discounts and promotions available only
          to waitlist members.
        </li>
      )
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Early Access.</strong> Be among the first
          to experience our app when it launches.
        </li>
      )
    }
  ],
  links: ['- The Breeze team 💜']
}

export const NetlifyWelcomeEmail = ({
  steps = PropDefaults.steps,
  links = PropDefaults.links
}: NetlifyWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank You</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb'
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px'
              }
            }
          }
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`https://i.imgur.com/FoT7O98.jpeg`}
            width="154"
            height="45"
            alt="Breeze"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              You're on the List!
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Thanks for signing up for our email
                  waitlist! We're excited to have you join
                  our community.
                </Text>

                <Text className="text-base">
                  Here's what you can expect:
                </Text>
              </Row>
            </Section>

            <ul>
              {steps?.map(({ Description }) => Description)}
            </ul>

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link}>
                    <Link className="text-black underline font-bold">
                      {link}
                    </Link>{' '}
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link>Unsubscribe</Link>
                </Column>
              </Row>
            </Section>
            {/* <Text className="text-center text-gray-400 mb-45">
              Want To Help Fundraise?
              </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default NetlifyWelcomeEmail
