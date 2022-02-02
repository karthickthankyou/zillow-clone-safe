import { Dispatch, memo } from 'react'
import {
  FilterAction,
  FilterState,
} from 'src/components/templates/ProductListingPage/ProductListingPage'
import { useSearchHomesByLocationDetailedQuery } from 'src/generated/graphql'
import PropertyCard from '../PropertyCard'
import { PropertyCardSkeleton } from '../PropertyCard/PropertyCard'

export interface IProductListingResultProps {
  dirtyFields: Partial<FilterState>
  dispatch: Dispatch<FilterAction>
}

const ProductListingResult = memo(
  ({ dirtyFields, dispatch }: IProductListingResultProps) => {
    const { search, location, beds, bath, sqft, yearBuilt, price } = dirtyFields
    const whereConditions = {
      lat: {
        _gt: location?.ne[1],
        _lt: location?.sw[1],
      },
      lng: {
        _gt: location?.ne[0],
        _lt: location?.sw[0],
      },
    }
    if (beds) whereConditions['beds'] = { _gte: beds }
    if (bath) whereConditions['bath'] = { _gte: bath }
    if (sqft) whereConditions['sqft'] = { _gte: sqft[0], _lte: sqft[1] }
    if (price) whereConditions['price'] = { _gte: price[0], _lte: price[1] }
    if (yearBuilt)
      whereConditions['yearBuilt'] = { _gte: yearBuilt[0], _lte: yearBuilt[1] }

    const [{ data, fetching }] = useSearchHomesByLocationDetailedQuery({
      variables: {
        offset: 0,
        limit: 10,
        where: whereConditions,
      },
    })

    if (data?.homes.length === 0) {
      return (
        <div className='flex flex-col items-center justify-center h-2/3'>
          <div className='text-2xl font-light'>
            No matching properties found.
          </div>
          <div className='mt-2 text-sm text-gray-600'>
            Try modifying the filters.
          </div>
        </div>
      )
    }

    return (
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
        {fetching
          ? [1, 2, 3, 4, 5].map((item) => <PropertyCardSkeleton key={item} />)
          : data?.homes.map((item) => (
              <PropertyCard
                dispatch={dispatch}
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
)

ProductListingResult.displayName = 'ProductListingResult'

export default ProductListingResult
