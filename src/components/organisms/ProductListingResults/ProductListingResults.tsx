import { useAppSelector } from 'src/store'
import { useHomesDetailed } from 'src/store/home/homeNetwork'
import {
  selectHomesDetailed,
  selectHomesDetailedWishlisted,
} from 'src/store/home/homeSlice'

import { useGetWishlisted } from 'src/store/userHome/userHomeHooks'

import PropertyCard from '../PropertyCard'
import { PropertyCardSkeleton } from '../PropertyCard/PropertyCard'

const ProductListingResult = () => {
  useGetWishlisted()
  useHomesDetailed()

  const { data, fetching, error } = useAppSelector(
    selectHomesDetailedWishlisted
  )

  // data?.homes.map(item => {
  //   console.log(item.)
  // })

  const NO_RESULTS = !fetching && data?.homes.length === 0

  if (error) {
    return <div>Something went wrong.</div>
  }

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
              wishlisted={item.wishlisted}
            />
          ))}
    </div>
  )
}

export default ProductListingResult
