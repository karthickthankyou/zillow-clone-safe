import Image from 'src/components/atoms/Image'

import { LocationStatsQuery, LocationStatsType } from 'src/generated/graphql'
import { useAppDispatch } from 'src/store'
import { setViewport } from 'src/store/map/mapSlice'
import { ZOOM_CITIES, ZOOM_HOMES } from 'src/store/static'
import { startLongHoverDispatch, stopLongHoverDispatch } from 'src/hooks'
import {
  setHighlightedCityId,
  setHighlightedStateId,
} from 'src/store/home/homeSlice'

export type ICityCardProps = LocationStatsQuery['locationStats'][number] & {
  type: LocationStatsType
  zoomEffect?: boolean
}

export const CityCardShadow = () => (
  <div className='relative block overflow-hidden transition-all duration-500 border-2 border-white rounded-md shadow-md animate-pulse w-96 h-96'>
    <div className='absolute inset-x-0 bottom-0 p-3 space-y-2'>
      <div className='w-1/3 h-6 bg-white rounded-lg' />
      <div className='w-1/2 h-4 bg-white rounded-lg' />
    </div>
    <div className='h-full bg-gray-100 ' />
  </div>
)

const CityCard = ({
  id,
  lat,
  lng,
  name,
  totalHomes,
  priceSqft,
  type,
  zoomEffect = false,
}: ICityCardProps) => {
  const dispatch = useAppDispatch()

  const dispatchLocation = () =>
    dispatch(
      setViewport({
        latitude: lat,
        longitude: lng,
        zoom: type === 'city' ? ZOOM_HOMES : ZOOM_CITIES,
      })
    )

  const longHoverDispatch =
    type === 'city' ? setHighlightedCityId : setHighlightedStateId

  const zoomEffectClassesParent =
    zoomEffect && 'hover:scale-105 hover:shadow-xl hover:z-10'
  const zoomEffectClassesImage =
    zoomEffect &&
    ' scale-110 group-hover:brightness-110 brightness-95 group-hover:scale-100'
  const zoomEffectClassesBody =
    zoomEffect && 'group-hover:border-l-8 group-hover:border-white'

  return (
    <div
      role='button'
      tabIndex={0}
      onKeyPress={dispatchLocation}
      onClick={dispatchLocation}
      className={`relative block w-full overflow-hidden transition-all duration-500 border-2 border-white rounded-md shadow-md cursor-pointer group h-96 ${zoomEffectClassesParent}`}
      onMouseOver={() => startLongHoverDispatch(longHoverDispatch(id))}
      onFocus={() => startLongHoverDispatch(longHoverDispatch(id))}
      onMouseLeave={() => stopLongHoverDispatch()}
    >
      <Image
        className={`h-full transition-all duration-700 ${zoomEffectClassesImage}`}
        alt=''
        priority={false}
        src='https://res.cloudinary.com/thankyou/image/upload/v1640715615/nike/cities/newyork_zqnljo.jpg'
      />
      <div
        className={`absolute pt-24 pb-3 pl-3 pr-24 bottom-0 text-white bg-gradient-to-tr from-primary-800 via-transparent to-transparent ${zoomEffectClassesBody}`}
      >
        <div className='text-2xl font-semibold tracking-tighter'>{name}</div>
        <div className='text-sm text-opacity-75'>{totalHomes} homes</div>
        <div className='text-sm text-opacity-75'>$ {priceSqft}/sqft</div>
      </div>
    </div>
  )
}

export default CityCard
