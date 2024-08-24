import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Your Personal On-Demand Store
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Need something now? Breeze delivers it, fast. No
          more endless browsing or waiting in line.
        </Typography>
        <Link
          href="https://geemarkwell.com"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
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
              headline="Instant Delivery"
              description="Tired of waiting for online orders to arrive? Breez delivers your essentials right to your doorstep, instantly."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Curated Selection"
              description="Our handpicked selection of products ensures you find exactly what you need, from electronics to fashion."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Local Love"
              description="Support your local businesses while enjoying the convenience of on-demand delivery. Breez partners with local stores to bring you the best of your community.





"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Shop Smarter, Not Harder.
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Imagine a world where your favorite outfits are
            just a few taps away. Breez revolutionizes the
            way you shop for clothes. No more endless
            scrolling or waiting for packages to arrive.
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
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://geemarkwell.com"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Coming Soon`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
