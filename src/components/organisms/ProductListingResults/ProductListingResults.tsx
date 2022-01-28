import debounce from 'lodash.debounce'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchPropertiesByLocationQuery } from 'src/generated/graphql'

export interface IProductListingResultProps {
  watchAllData: {
    search: string
    lat: string
    lng: string
    zoom: string
    yearBuilt: [number, number]
    price: [number, number]
    sqft: [number, number]
    beds: string
    bath: string
    homeType: string[]
  }
  dirtyFields: any
}

const ProductListingResult = ({
  watchAllData,
  dirtyFields,
}: IProductListingResultProps) => {
  const filtered = useMemo(() => {
    // Search, lat, and lng are added to dirty fields as they are required by default in queries.
    const dirtyFieldsArray = [
      'search',
      'lat',
      'lng',
      'zoom',
      ...Object.keys(dirtyFields),
    ]

    return Object.keys(watchAllData)
      .filter((key) => dirtyFieldsArray.includes(key))
      .reduce((obj, key) => {
        obj[key] = watchAllData[key]
        return obj
      }, {})
  }, [dirtyFields, watchAllData])

  const [filteredDebounced, setFilteredDebounced] = useState({})

  const debounced = useCallback(
    debounce((filteredData) => {
      console.log('Debounced: ', filteredData)
      setFilteredDebounced(filteredData)
      // setRandom((state) => state + 1)
    }, 2000),
    []
  )

  useEffect(() => {
    debounced(filtered)
  }, [filtered, debounced])

  const [searchProperties] = useSearchPropertiesByLocationQuery({
    variables: {
      args: {
        distance_kms: +filteredDebounced?.zoom * 10,
        lat: filteredDebounced?.lat,
        lng: filteredDebounced?.lng,
      },
      offset: 2,
      limit: 10,
      where: {
        // bath: {
        //   _gte: 5,
        // },
      },
    },
  })

  return (
    <div>
      Hello, This is ProductListingResult component!
      {JSON.stringify(searchProperties)}
    </div>
  )
}

export default ProductListingResult
