import Autocomplete from 'src/components/molecules/Autocomplete'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

export interface IHeroProps {}

const Hero = () => {
  const [value, setValue] = useState<string>('')
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center w-screen bg-scroll bg-cover h-screen90 -z-10 bg-opacity-80 bg-hero'>
      <div className='max-w-lg'>
        <div className='font-black tracking-tight text-center text-white text-7xl leading-90p'>
          Change starts <em className=''>here</em>
        </div>

        <Autocomplete
          options={[
            'new york',
            'los angeles',
            'san francisco',
            'chicago',
            'houston',
            'philadelphia',
          ]}
          value=''
          onChange={(v) => {
            router.push({
              pathname: '/homes',
              query: {
                search: v,
                lat: 40.79224,
                lng: -73.98837,
                yearBuilt: ['2000', '2022'],
                price: ['100000', '200000'],
              },
            })
          }}
          className='mt-24 rounded-lg'
        />
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
