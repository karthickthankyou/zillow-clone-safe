import { useAppDispatch, useAppSelector } from 'src/store'
import {
  selectHomesDetailed,
  selectCitiesMap,
  selectStatesMap,
} from 'src/store/home/homeSlice'
import { selectDebouncedZoom, setZoom } from 'src/store/map/mapSlice'

import { selectWishlistedHomes } from 'src/store/userHome/userHomeSlice'
import ZoomInIcon from '@heroicons/react/outline/ZoomInIcon'
import {
  ZOOM_HOMES,
  showCities,
  showStates,
  ZOOM_CITIES,
} from 'src/store/static'

import { Children } from 'src/types'
import PropertyCard from '../PropertyCard'
import { PropertyCardSkeleton } from '../PropertyCard/PropertyCard'
import CityCard from '../CityCard'

const Layout = ({ children }: { children: Children | undefined }) => (
  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
    {children}
  </div>
)

const ProductListingResult = () => {
  const { data: wishlistedHomes } = useAppSelector(selectWishlistedHomes)

  const { data, fetching, error } = useAppSelector(selectHomesDetailed)
  const cities = useAppSelector(selectCitiesMap)
  const states = useAppSelector(selectStatesMap)

  const NO_RESULTS = !fetching && data?.homes.length === 0
  const dispatch = useAppDispatch()

  const zoom = useAppSelector(selectDebouncedZoom)

  if (error) {
    return <div>Something went wrong.</div>
  }

  if (showCities(zoom))
    return (
      <Layout>
        {cities.data?.cities.map(({ id, totalHomes, priceSqft, lat, lng }) => (
          <CityCard
            key={id}
            id={id}
            lat={lat}
            lng={lng}
            totalHomes={totalHomes}
            priceSqft={priceSqft}
            type='city'
          />
        ))}
      </Layout>
    )
  if (showStates(zoom))
    return (
      <Layout>
        {states.data?.states.map(({ id, totalHomes, priceSqft, lat, lng }) => (
          <CityCard
            key={id}
            id={id}
            lat={lat}
            lng={lng}
            totalHomes={totalHomes}
            priceSqft={priceSqft}
            type='state'
          />
        ))}
      </Layout>
    )

  if (NO_RESULTS) {
    return (
      <div className='flex flex-col items-center justify-center py-24 h-2/3'>
        <div className='text-2xl font-light'>No matching properties found.</div>
        <div className='mt-2 text-sm text-gray-600'>
          Try modifying the filters.
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
      {fetching
        ? [1, 2, 3, 4, 5, 6].map((item) => <PropertyCardSkeleton key={item} />)
        : data?.homes.map((item) => (
            <PropertyCard
              id={item.id}
              key={item.id}
              address={item.address}
              bath={item.bath}
              beds={item.beds}
              price={item.price}
              sqft={item.sqft}
              wishlisted={wishlistedHomes?.wishlisted.find(
                (wishlistedItem) => wishlistedItem.hId === item.id
              )}
            />
          ))}
    </div>
  )
}

export default ProductListingResult
