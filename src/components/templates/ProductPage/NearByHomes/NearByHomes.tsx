import HScroll from 'src/components/molecules/HScroll'
import PropertyCard from 'src/components/organisms/PropertyCard'
import { PropertyCardSkeleton } from 'src/components/organisms/PropertyCard/PropertyCard'
import { useAppSelector } from 'src/store'
import { selectHomesDetailed } from 'src/store/home/homeSlice'
import { selectWishlistedHomes } from 'src/store/userHome/userHomeSlice'

export interface INearByHomesProps {
  homeId: number
}

const NearByHomes = ({ homeId }: INearByHomesProps) => {
  const { data, fetching } = useAppSelector(selectHomesDetailed)
  const { data: wishlistedHomes } = useAppSelector(selectWishlistedHomes)

  return (
    <HScroll className='mt-12'>
      <div className='flex items-center justify-between space-x-2'>
        <div className='text-2xl'>Nearby homes</div>
        <div className='space-x-2'>
          <HScroll.Arrow
            className='left-0 z-10 h-full transition-all border border-white rounded-full hover:shadow-xl hover:bg-primary-50'
            distance={-240}
          />
          <HScroll.Arrow
            right
            className='right-0 z-10 h-full transition-all border border-white rounded-full hover:shadow-xl hover:bg-primary-50'
            distance={-240}
          />
        </div>
      </div>
      <HScroll.Body className='gap-2'>
        <>
          {fetching
            ? [1, 2, 3, 4, 5, 6].map((item) => (
                <PropertyCardSkeleton
                  className='flex-shrink-0 w-64'
                  key={item}
                />
              ))
            : data?.properties
                .filter((item) => item.id !== homeId)
                .map((item) => (
                  <HScroll.Child key={item.id}>
                    <PropertyCard
                      id={item.id}
                      key={item.id}
                      address={item.address}
                      bath={item.bath}
                      beds={item.beds}
                      price={item.price}
                      sqft={item.sqft}
                      wishlisted={wishlistedHomes?.wishlisted.find(
                        (wishlistedItem) =>
                          wishlistedItem.propertyId === item.id
                      )}
                    />
                  </HScroll.Child>
                ))}
          {!fetching && !data?.properties.length && (
            <div className='flex items-center justify-center w-full h-96'>
              No nearby properties found.
            </div>
          )}
        </>
      </HScroll.Body>
    </HScroll>
  )
}

export default NearByHomes
