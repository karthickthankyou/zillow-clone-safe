import { useAppSelector } from 'src/store'
import { selectHomesDetailed } from 'src/store/home/homeSlice'

import { selectWishlistedHomes } from 'src/store/userHome/userHomeSlice'

import PropertyCard from '../PropertyCard'
import { PropertyCardSkeleton } from '../PropertyCard/PropertyCard'

// const Layout = ({ children }: { children: Children | undefined }) => (
//   <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
//     {children}
//   </div>
// )

const ProductListingResult = () => {
  const { data: wishlistedHomes } = useAppSelector(selectWishlistedHomes)

  const { data, fetching, error } = useAppSelector(selectHomesDetailed)

  const NO_RESULTS = !fetching && data?.properties.length === 0

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
        : data?.properties.map((item) => (
            <PropertyCard
              id={item.id}
              key={item.id}
              address={item.address}
              bath={item.bath}
              beds={item.beds}
              imgs={item.imgs}
              plan={item.plan}
              price={item.price}
              sqft={item.sqft}
              wishlisted={wishlistedHomes?.wishlisted.find(
                (wishlistedItem) => wishlistedItem.propertyId === item.id
              )}
            />
          ))}
    </div>
  )
}

export default ProductListingResult
