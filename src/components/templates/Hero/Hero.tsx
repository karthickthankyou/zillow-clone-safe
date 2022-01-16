import SearchIcon from '@heroicons/react/outline/SearchIcon'
import { MailIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import SearchBox from 'src/components/molecules/SearchBox'

export interface IHeroProps {}

const Hero = () => {
  const [showDialog, setshowDialog] = useState(false)
  return (
    <div className='flex flex-col items-center justify-center w-screen bg-scroll bg-cover h-screen90 -z-10 bg-opacity-80 bg-hero'>
      <div className='max-w-lg'>
        <div className='font-black tracking-tight text-center text-white text-7xl leading-90p'>
          Change starts <em className=''>here</em>
        </div>
        {/* <div>
              <label className='flex block mt-6'>
                <SearchIcon className='w-6 h-6 ' />
                <input
                  type='search'
                  name=''
                  className='w-full p-4 -ml-12 bg-white border-2 border-white rounded-lg bg-opacity-60 backdrop-filter backdrop-blur'
                  placeholder='Enter an address, neighborhood, city, or ZIP code'
                />
              </label>
            </div> */}
        {/* <form className='relative mt-8 space-y-1' autoComplete='new-password'>
          <label
            htmlFor='location'
            className='block text-sm font-medium text-gray-700'
          >
            <div className='relative mt-1 overflow-hidden rounded-lg shadow-sm'>
              <input
                type='text'
                name='location'
                id='location'
                className='block w-full py-5 pl-12 bg-white border-2 border-black rounded-lg backdrop-filter bg-opacity-90 backdrop-blur focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Enter an address, neighborhood, city, or ZIP code'
                autoComplete='false'
                readOnly={!showDialog}
                onFocus={() => setshowDialog(true)}
                onBlur={() => setshowDialog(false)}
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none'>
                <SearchIcon className='w-6 h-6 text-black' aria-hidden='true' />
              </div>
            </div>
          </label>
          {showDialog && (
            <div className='absolute w-full bg-white rounded-lg shadow-lg bg-opacity-90 backdrop-filter backdrop-blur'>
              <div className='p-5 h-14'>Hello</div>
              <div className='p-5 h-14'>Hello</div>
              <div className='p-5 h-14'>Hello</div>
            </div>
          )}
        </form> */}
        <SearchBox className='mt-12 rounded-md shadow-md ' />
      </div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      {/* <video
        autoPlay
        className='absolute inset-0 object-cover w-screen h-screen pointer-events-none -z-20'
        src='https://res.cloudinary.com/thankyou/video/upload/eo_10,so_6.5/v1640789244/nike/videos//production_ID_4770380_uvxuxc.mp4'
      /> */}
    </div>
  )
}

export default Hero
