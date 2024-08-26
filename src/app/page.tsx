import Typography from '@/components/ui/typography'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Form from '@/components/email/form';

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      {/* <Waitlist firstName={''}/> */}
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Your Personal On-Demand Store
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Need something now? Breeze delivers it, fast. No more extra <span className="text-green-500">shipping</span> costs, long lines or <span className="text-green-500">waiting weeks</span> for packages to arrive.
        </Typography>
          {/* <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button> */}
        <Form/>
        {/* <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        /> */}
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Your Favorite Brands, Delivered Instantly"
              description="Tired of waiting weeks for online orders to arrive? Breez brings the latest styles and must-have essentials from your favorite brands right to your doorstep, within hours and minutes."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Lower Prices"
              description="Enjoy the convenience of same day fashion delivery without the added shipping costs. Why pay a $8.00 next day delivery fee when you can have it TODAY for $0."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Local Love"
              description="Support your local businesses while enjoying the convenience of on-demand delivery. Breeze partners with local stores to bring you the best of your community.





"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Pay Less, Get More.
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Why pay more to have it tommorow, when you can pay <span className="text-green-500">less</span> and have it <span className="text-green-500">today</span>.
          </Typography>
          {/* <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          /> */}
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Pre-Launch Sign Up
          </Typography>
          <div> Be the first to know when Breeze is available. </div>
            {/* <Button size="tiny" variant="ghost">
              {`Coming Soon`}
            </Button> */}
            <Form/>
        </div>
      </div>
    </div>
  )
}
