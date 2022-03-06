import Autocomplete from 'src/components/molecules/Autocomplete'
import MapIcon from '@heroicons/react/outline/MapIcon'

import { useDispatch } from 'react-redux'
import ArrowCircleDownIcon from '@heroicons/react/outline/ArrowCircleDownIcon'

import { useAppSelector } from 'src/store'
import {
  setViewport,
  selectMapSearchOptions,
  setSearchText,
  MapSlice,
} from 'src/store/map/mapSlice'

import { useRouter } from 'next/dist/client/router'

export interface IHeroProps {
  className?: string
  executeScroll: () => void
}

const Hero = ({ className, executeScroll }: IHeroProps) => {
  const dispatch = useDispatch()

  /** Selectors */
  const { data: cityList, fetching } = useAppSelector(selectMapSearchOptions)

  /** Hooks */
  const router = useRouter()

  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen bg-fixed bg-cover -z-10 bg-opacity-80 bg-hero ${className}`}
    >
      <div className='my-auto'>
        <div className='text-5xl font-black tracking-tight text-center text-white sm:text-6xl md:max-w-lg lg:text-7xl leading-90p'>
          Change starts <br /> <em>here</em>
        </div>

        <Autocomplete<
          MapSlice['mapSearchOptions']['data'][number],
          false,
          false,
          false
        >
          options={cityList}
          getOptionLabel={(x) => x.displayName}
          onInputChange={(_, v) => dispatch(setSearchText(v))}
          loading={fetching}
          isOptionEqualToValue={(a, b) => a.displayName === b.displayName}
          onChange={(_, v) => {
            const { displayName, latitude, longitude, zoom } = v!

            if (v) {
              dispatch(
                setViewport({
                  latitude,
                  longitude,
                  zoom,
                })
              )
              router.push(
                {
                  pathname: '/homes',
                  query: {
                    search: displayName,
                    latitude,
                    longitude,
                  },
                },
                '/homes'
              )
            }
          }}
          className='w-full mt-12 rounded-md'
        />
        <button
          type='button'
          onClick={() => executeScroll()}
          className='w-full px-4 py-2 mt-6 font-bold text-white underline rounded-md underline-offset-4 hover:bg-black/20'
        >
          Or, Use the interactive map.
          <MapIcon className='inline w-8 h-8 p-1 animate-pulse' />
        </button>
      </div>
      <ArrowCircleDownIcon className='bottom-0 w-8 h-8 text-white justify-self-stretch animate-bounce' />
    </div>
  )
}

export default Hero
