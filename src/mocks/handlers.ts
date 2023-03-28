/* eslint-disable no-underscore-dangle */
import { graphql, rest } from 'msw'
import { getQueryParam } from 'src/lib/util'
import {
  namedOperations,
  //   SearchCitiesByLocationQuery,
  //   SearchCitiesByLocationQueryVariables,
  SearchPropertiesDetailedQuery,
  SearchPropertiesDetailedQueryVariables,
  SearchPropertiesQuery,
  //   SearchStatesByLocationQuery,
  //   SearchStatesByLocationQueryVariables,
  UserHomesQuery,
  UserHomesQueryVariables,
  PropertyQuery,
  PropertyQueryVariables,
  //   GetRegionByIdQuery,
  //   GetRegionByIdQueryVariables,
  Style,
  SearchPropertiesQueryVariables,
} from '../generated/graphql'
import {
  mockDataGetCities,
  mockDataGetRegionById,
  mockDataSearchCities,
  mockDataSearchCitiesByLocation,
  mockDataSearchStatesByLocation,
} from './data/cities'
import { homesMockData } from './data/homes'

const zillowAPI = graphql.link(
  'https://zillow-karthick.herokuapp.com/v1/graphql'
)

// const {
//   SearchHomesByLocation,
//   getCities,
//   SearchHomesByLocationDetailed,
//   SearchCitiesByLocation,
//   SearchStatesByLocation,
// } = namedOperations.Query

const QUERY_NAMES = namedOperations.Query

// export const mockGetCities = zillowAPI.query(
//   QUERY_NAMES.getCities,
//   (req, res, ctx) => res(ctx.data(mockDataGetCities))
// )

export const mockGetWishlistedHomes = zillowAPI.query<
  UserHomesQuery,
  UserHomesQueryVariables
>(QUERY_NAMES.UserHomes, (req, res, ctx) => res(ctx.data({ userHomes: [] })))

export const mockGetHomeByIdQuery = zillowAPI.query<
  PropertyQuery,
  PropertyQueryVariables
>(QUERY_NAMES.Property, (req, res, ctx) =>
  res(
    ctx.data({
      property: {
        price: 100000,
        id: 10,
        sqft: 1200,
        bath: 8,
        beds: 12,
        lotSize: 100,
        address: '13, Main St',
        style: Style.SingleFamilyHome,
        imgs: [],
      },
    })
  )
)
export const mockGetHomeByIdQueryFetching = zillowAPI.query(
  QUERY_NAMES.Property,
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)
export const mockGetHomeByIdQueryError = zillowAPI.query(
  QUERY_NAMES.Property,
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)

// export const mockGetRegionByIdQuery = zillowAPI.query<
//   GetRegionByIdQuery,
//   GetRegionByIdQueryVariables
// >(QUERY_NAMES.GetRegionById, (req, res, ctx) =>
//   res(ctx.data(mockDataGetRegionById))
// )

// export const mockGetRegionByIdQueryFetching = zillowAPI.query(
//   QUERY_NAMES.GetRegionById,
//   (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
// )
// export const mockGetRegionByIdQueryError = zillowAPI.query(
//   QUERY_NAMES.GetRegionById,
//   (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
// )

export const mockSearchCities = rest.get(
  'https://api.mapbox.com/geocoding/v5/mapbox.places/:searchTerm.json',
  (req, res, ctx) => {
    const searchTerm = getQueryParam(
      req.params.searchTerm as string | string[]
    )?.toLowerCase()
    const result = mockDataSearchCities.features.filter((city) =>
      city.place_name.toLowerCase().includes(searchTerm || '')
    )

    return res(ctx.json({ features: result }))
  }
)

const applyFilter = (
  allHomes: typeof homesMockData.properties,
  whereConditions: any
) => {
  const { beds, bath, price, sqft, yearBuilt } = whereConditions
  let homes = allHomes

  if (price)
    homes = homes.filter(
      (home) => home.price! >= price._gte && home.price! <= price._lte
    )
  if (sqft)
    homes = homes.filter(
      (home) => home.sqft! >= sqft._gte && home.sqft! <= sqft._lte
    )
  if (yearBuilt)
    homes = homes.filter(
      (home) =>
        home.yearBuilt >= yearBuilt._gte && home.yearBuilt <= yearBuilt._lte
    )
  if (beds) homes = homes.filter((home) => home.beds! >= beds._gte)
  if (bath) homes = homes.filter((home) => home.bath! >= bath._gte)

  return homes
}

export const mockSearchHomesByLocation = zillowAPI.query<
  SearchPropertiesQuery,
  SearchPropertiesQueryVariables
>(QUERY_NAMES.SearchProperties, (req, res, ctx) => {
  const { properties } = homesMockData
  const { where, take } = req.variables
  const filteredHomes = take ? applyFilter(properties, where) : []
  return res(ctx.data({ properties: filteredHomes }))
})

// export const mockSearchCitiesByLocation = zillowAPI.query<
//   SearchCitiesByLocationQuery,
//   SearchCitiesByLocationQueryVariables
// >(QUERY_NAMES.SearchCitiesByLocation, (req, res, ctx) => {
//   const { cities } = mockDataSearchCitiesByLocation
//   const { limit } = req.variables
//   const filteredCities = limit ? cities : []
//   return res(ctx.data({ cities: filteredCities }))
// })

// export const mockSearchStatesByLocation = zillowAPI.query<
//   SearchStatesByLocationQuery,
//   SearchStatesByLocationQueryVariables
// >(QUERY_NAMES.SearchStatesByLocation, (req, res, ctx) => {
//   const { states } = mockDataSearchStatesByLocation
//   const { limit } = req.variables
//   const filteredStates = limit ? states : []
//   return res(ctx.data({ states: filteredStates }))
// })

export const mockSearchHomesByLocationErrors = zillowAPI.query(
  QUERY_NAMES.SearchProperties,
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)
export const mockSearchHomesByLocationFetching = zillowAPI.query(
  QUERY_NAMES.SearchProperties,
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)

export const mockSearchHomesByLocationDetailed = zillowAPI.query<
  SearchPropertiesDetailedQuery,
  SearchPropertiesDetailedQueryVariables
>(QUERY_NAMES.SearchPropertiesDetailed, (req, res, ctx) => {
  const { properties } = homesMockData
  // const filteredHomes = applyFilter(homes, req.variables.where)
  return res(ctx.data({ properties }))
})

export const mockInsertUserHome = zillowAPI.mutation(
  'InsertUserHome',
  (req, res, ctx) =>
    res(
      ctx.data({
        user: {
          sessionId: 'abc-123',
        },
      })
    )
)

export const handlers = [
  //   mockGetCities,
  mockGetWishlistedHomes,
  mockGetHomeByIdQuery,
  mockGetHomeByIdQueryFetching,
  mockGetHomeByIdQueryError,
  mockInsertUserHome,
  mockSearchHomesByLocation,
  mockSearchHomesByLocationDetailed,
  //   mockSearchCitiesByLocation,
  //   mockSearchStatesByLocation,
  mockSearchCities,
  //   mockGetRegionByIdQuery,
]
