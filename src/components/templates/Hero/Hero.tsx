import Autocomplete from 'src/components/molecules/Autocomplete'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { useSearchCitiesQuery } from 'src/generated/graphql'
import { useDispatch } from 'react-redux'

import { useAppSelector } from 'src/store'
import {
  selectCitySearchText,
  selectCityOptions,
  selectSelectedCity,
  setCitySearchText,
  setSelectedCity,
} from 'src/store/cities/citySlice'
import { useSearchCity } from 'src/store/cities/cityHooks'

export interface IHeroProps {}

const Hero = () => {
  const router = useRouter()
  useSearchCity()
  const dispatch = useDispatch()
  const searchTerm = useAppSelector(selectCitySearchText)
  const cityOptions = useAppSelector(selectCityOptions)
  const selectedCity = useAppSelector(selectSelectedCity)

  console.log(
    'SearchTerm: ',
    searchTerm,
    'cityOptions: ',
    cityOptions,
    'selectedCity',
    selectedCity
  )

  // const onOptionSelect = (e: any, v: any) => {
  //   if (v) {
  //     const { lat, lng } = data?.search_cities.filter(
  //       (d) => d.displayName === v
  //     )[0]?

  //     router.push(
  //       {
  //         pathname: '/homes',
  //         query: {
  //           search: v,
  //           lat,
  //           lng,
  //         },
  //       },
  //       '/homes'
  //     )
  //   }
  // }

  return (
    <div className='flex flex-col items-center justify-center w-screen bg-scroll bg-cover h-screen90 -z-10 bg-opacity-80 bg-hero'>
      <div className='max-w-lg'>
        <div className='font-black tracking-tight text-center text-white text-7xl leading-90p'>
          Change starts <em className=''>here</em>
        </div>

        <Autocomplete
          options={cityOptions.data}
          getOptionLabel={(x) => x.displayName}
          onInputChange={(_e, v) => dispatch(setCitySearchText(v))}
          loading={cityOptions.fetching}
          onChange={(e, v) => dispatch(setSelectedCity(v))}
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
