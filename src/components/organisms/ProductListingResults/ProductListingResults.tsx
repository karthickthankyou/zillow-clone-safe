import { useHomesList } from 'src/store/homes/homeHooks'
import PropertyCard from '../PropertyCard'
import { PropertyCardSkeleton } from '../PropertyCard/PropertyCard'

const ProductListingResult = () => {
  const { data, fetching, error } = useHomesList()

  const NO_RESULTS = !fetching && data?.homes.length === 0

  if (error) {
    return <div>Something went wrong.</div>
  }

  if (NO_RESULTS) {
    return (
      <div className='flex flex-col items-center justify-center h-2/3'>
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
            />
          ))}
    </div>
  )
}

export default ProductListingResult
