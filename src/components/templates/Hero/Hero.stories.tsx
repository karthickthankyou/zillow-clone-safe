import React from 'react'
import Image from 'src/components/atoms/Image'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navbar from 'src/components/organisms/Navbar'
import BannerHomeLoan from 'src/components/organisms/BannerHomeLoan'
import BadgeCheckIcon from '@heroicons/react/outline/BadgeCheckIcon'
import Footer from 'src/components/organisms/Footer'
import useTriggerOnScroll from 'src/hooks'
import CityCard from 'src/components/organisms/CityCard'
import Hero from './Hero'
import Cities from '../Cities'

export default {
  title: 'templates/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = () => {
  const [show, el] = useTriggerOnScroll()
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container mx-auto space-y-24'>
        <Cities title='Buy a home' description=''>
          <CityCard />
          <CityCard
            title='San Fransisco'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640725349/nike/cities/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash_llua9m.jpg'
          />
          <CityCard
            title='Chicago'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640725977/nike/cities/sawyer-bengtson-tnv84LOjes4-unsplash_yl9elq.jpg'
          />
          <CityCard
            title='Los Angeles'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
          />
          <CityCard />
        </Cities>
        <Cities
          title='Sell a home'
          description='No matter what path you take to sell your home, we can help you navigate a successful sale.'
        >
          <CityCard
            title='Los Angeles'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640726401/nike/cities/denys-nevozhai-k5w21D7PgMk-unsplash_zz2obf.jpg'
          />
          <CityCard />
          <CityCard />
          <CityCard />
        </Cities>
        <Cities
          title='Sell a home'
          description='No matter what path you take to sell your home, we can help you navigate a successful sale.'
        >
          <CityCard
            title='Chicago'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640725977/nike/cities/sawyer-bengtson-tnv84LOjes4-unsplash_yl9elq.jpg'
          />
          <CityCard />
          <CityCard />
        </Cities>
        <Cities
          title='Pick your style'
          description='No matter what path you take to sell your home, we can help you navigate a successful sale.'
        >
          <CityCard
            title='Houses'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640768807/nike/home_types/dillon-kydd-XGvwt544g8k-unsplash_abk2fw.jpg'
          />
          <CityCard
            title='Townhomes'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640770068/nike/home_types/mark-tryapichnikov-78OthQBU4bM-unsplash_pvzhr2.jpg'
          />
          <CityCard
            title='Condos/Co-ops'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640769955/nike/home_types/scott-webb-JR9xhk0nS4Q-unsplash_mgyv80.jpg'
          />
          <CityCard
            title='Lots/Land'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640769955/nike/home_types/scott-webb-JR9xhk0nS4Q-unsplash_mgyv80.jpg'
          />
          <CityCard
            title='Apartments'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640770024/nike/home_types/beazy-ABohRftG_Os-unsplash_mtyk71.jpg'
          />
          <CityCard
            title='Manufactured'
            src='https://res.cloudinary.com/thankyou/image/upload/v1640770024/nike/home_types/beazy-ABohRftG_Os-unsplash_mtyk71.jpg'
          />
        </Cities>

        <BannerHomeLoan
          title='Zillow Home Loans'
          description={
            <div>
              Get pre-approved and take a big step toward buying your new home.
            </div>
          }
          btnText='Request Pre approval'
        />
        <BannerHomeLoan
          reverse
          title='Find an Agent'
          src='https://res.cloudinary.com/thankyou/image/upload/v1640726673/nike/people/austin-distel-va_Opp86kfQ-unsplash_avexl4.jpg'
          description={
            <div>
              Zillow&apos;s directory of local real estate agents and brokers
              connects you with professionals who can help meet your needs.
            </div>
          }
          btnText='Find agents'
        />
        <BannerHomeLoan
          title='Zillow Rental Manager'
          description={
            <div>
              <ul>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5 text-black' /> List your
                  rental.
                </li>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5 text-black' /> Screen
                  tenants.
                </li>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5 text-black' /> Sign a
                  lease.
                </li>
                <li className='flex items-center gap-2'>
                  <BadgeCheckIcon className='w-5 h-5 text-black' /> Get paid.
                </li>
              </ul>
              <div className='mt-2'>All in one place!</div>
            </div>
          }
          btnText='Post your first listing free'
        />
        <div
          ref={el}
          className='flex flex-col items-center justify-center h-96'
        >
          <div className='text-4xl font-bold tracking-tighter text-luxury'>
            Most visited rental network
          </div>
          <div className='max-w-lg mt-4 text-center tex-gray-600'>
            Zillow Rentals is the most visited rental network with more than{' '}
            <strong className='whitespace-nowrap text-primary-500'>
              194 million
            </strong>{' '}
            average monthly unique users in Q2 2019.
          </div>
          <button
            className='px-8 py-3 mt-6 text-white uppercase rounded-full bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
            type='button'
          >
            JOIN NOW
          </button>
        </div>
        <div>
          <Image
            className='h-12'
            alt=''
            src='https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/2/2020/05/Zillow_Sites2x-cd3144-c697dc-fbb28e.png'
          />
        </div>
      </div>
      <Footer className='mt-24' />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
