import Autocomplete from 'src/components/molecules/Autocomplete'
import { useState } from 'react'

export interface IHeroProps {}

const Hero = () => {
  const [value, setValue] = useState<string>('')
  return (
    <div className='flex flex-col items-center justify-center w-screen bg-scroll bg-cover h-screen90 -z-10 bg-opacity-80 bg-hero'>
      <div className='max-w-lg'>
        <div className='font-black tracking-tight text-center text-white text-7xl leading-90p'>
          Change starts <em className=''>here</em>
        </div>

        <Autocomplete
          options={['Hello', 'not', 'bye']}
          value={value}
          onChange={(v) => setValue(v?.toString() || '')}
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
