import Autocomplete from 'src/components/molecules/Autocomplete'

import { useDispatch } from 'react-redux'
import ArrowCircleDownIcon from '@heroicons/react/outline/ArrowCircleDownIcon'

import { useAppSelector } from 'src/store'
import {
  CitySlice,
  selectCityList,
  setCitySearchText,
  setMapLocation,
  setSelectedCity,
} from 'src/store/cities/citySlice'

import { useRouter } from 'next/dist/client/router'

export interface IHeroProps {
  className?: string
}

const Hero = ({ className }: IHeroProps) => {
  const dispatch = useDispatch()

  /** Selectors */
  const { data: cityList, fetching, error } = useAppSelector(selectCityList)

  /** Hooks */
  const router = useRouter()

  type CityList = CitySlice['cityList']['data']

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen bg-fixed bg-cover -z-10 bg-opacity-80 bg-hero ${className}`}
    >
      <div className='my-auto'>
        <div className='text-5xl font-black tracking-tight text-center text-white sm:text-6xl md:max-w-lg lg:text-7xl leading-90p'>
          Change starts <br /> <em>here</em>
        </div>

        <Autocomplete<
          CitySlice['cityList']['data'][number],
          false,
          false,
          false
        >
          options={cityList}
          getOptionLabel={(x) => x.displayName}
          onInputChange={(_, v) => dispatch(setCitySearchText(v))}
          loading={fetching}
          isOptionEqualToValue={(a, b) => a.displayName === b.displayName}
          onChange={(_, v) => {
            const { displayName, latitude, longitude } = v!

            if (v) {
              dispatch(
                setMapLocation({
                  latitude,
                  longitude,
                })
              )
              // dispatch(setMapLocation({ lat, lng }))
              router.push(
                {
                  pathname: '/homes',
                  query: { search: displayName, latitude, longitude },
                },
                '/homes'
              )
            }
          }}
          className='w-full mt-12 rounded-lg'
        />
      </div>
      <ArrowCircleDownIcon className='bottom-0 w-8 h-8 text-white justify-self-stretch animate-bounce' />
    </div>
  )
}

export default Hero
