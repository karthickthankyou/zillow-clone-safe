import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/dist/client/router'
import { MapLocation } from 'src/components/organisms/Mapbox/Mapbox'
import ProductListingPage from 'src/components/templates/ProductListingPage'
import { getQueryParam } from 'src/lib/util'

export interface FilterState {
  search: string
  location: MapLocation
  highlightedId?: number | null
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: string
  bath: string
  homeType: string[]
}

export type FilterAction =
  | { type: 'SET_SEARCH'; payload: FilterState['search'] }
  | { type: 'SET_LOCATION'; payload: FilterState['location'] }
  | { type: 'SET_YEARS'; payload: FilterState['yearBuilt'] }
  | { type: 'SET_PRICE'; payload: FilterState['price'] }
  | { type: 'SET_SQFT'; payload: FilterState['sqft'] }
  | { type: 'SET_BEDS'; payload: FilterState['beds'] }
  | { type: 'SET_BATH'; payload: FilterState['bath'] }
  | { type: 'SET_HOMETYPE'; payload: FilterState['homeType'] }
  | { type: 'SET_HIGHLIGHTED_ID'; payload: FilterState['highlightedId'] }
  | { type: 'RESET'; payload: FilterState }

const Homes: NextPage = () => {
  const router = useRouter()
  const search = getQueryParam(router.query.search, 'New York')
  console.log('search', search)

  const initiaLatitude = getQueryParam(router.query.lat, '40.7128')
  const initialLongitude = getQueryParam(router.query.lng, '-74.0060')

  const reducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
      case 'SET_SEARCH': {
        return { ...state, search: action.payload }
      }
      case 'SET_LOCATION': {
        return { ...state, location: action.payload }
      }
      case 'SET_YEARS': {
        return { ...state, yearBuilt: action.payload }
      }
      case 'SET_PRICE': {
        return { ...state, price: action.payload }
      }
      case 'SET_SQFT': {
        return { ...state, sqft: action.payload }
      }
      case 'SET_BEDS': {
        return { ...state, beds: action.payload }
      }
      case 'SET_BATH': {
        return { ...state, bath: action.payload }
      }
      case 'SET_HOMETYPE': {
        return { ...state, homeType: action.payload }
      }
      case 'SET_HIGHLIGHTED_ID': {
        return { ...state, highlightedId: action.payload }
      }
      case 'RESET': {
        return {
          // Use all the initial properties to reset the state.
          ...action.payload,
          // But, we dont have to reset the search and location.
          search: state.search,
          location: state.location,
        }
      }
      default:
        return state
    }
  }

  return (
    <div>
      <ProductListingPage
        search={search}
        initiaLatitude={+initiaLatitude}
        initialLongitude={+initialLongitude}
      />
    </div>
  )
}

export default Homes
