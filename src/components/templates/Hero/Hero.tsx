import Autocomplete from 'src/components/molecules/Autocomplete'

import { useDispatch } from 'react-redux'

import { useAppSelector } from 'src/store'
import {
  CitySlice,
  selectCityOptions,
  setCitySearchText,
  setSelectedCity,
  setMapLocation,
} from 'src/store/cities/citySlice'
import { useSearchCity } from 'src/store/cities/cityHooks'
import { useRouter } from 'next/dist/client/router'

export interface IHeroProps {}

const Hero = () => {
  const dispatch = useDispatch()

  /** Selectors */
  const cityOptions = useAppSelector(selectCityOptions)

  /** Hooks */
  const router = useRouter()
  useSearchCity()

  return (
    <div className='flex flex-col items-center justify-center w-screen bg-scroll bg-cover h-screen90 -z-10 bg-opacity-80 bg-hero'>
      <div className='max-w-lg'>
        <div className='font-black tracking-tight text-center text-white text-7xl leading-90p'>
          Change starts <em className=''>here</em>
        </div>

        <Autocomplete<CitySlice['selectedCity'], false, false, false>
          options={cityOptions.data}
          getOptionLabel={(x) => x.displayName}
          onInputChange={(_, v) => dispatch(setCitySearchText(v))}
          loading={cityOptions.fetching}
          onChange={(_, v) => {
            const { displayName, lat, lng } = v!

            if (v) {
              dispatch(setSelectedCity(v))
              dispatch(setMapLocation({ lat, lng }))
              router.push(
                {
                  pathname: '/homes',
                  query: { search: displayName, lat, lng },
                },
                '/homes'
              )
            }
          }}
          className='mt-24 rounded-lg'
        />
      </div>
    </div>
  )
}

export default Hero
