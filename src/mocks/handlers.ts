/* eslint-disable no-underscore-dangle */
import { graphql, rest } from 'msw'
import { getQueryParam } from 'src/lib/util'
import {
  namedOperations,
  SearchHomesByLocationDetailedQuery,
  SearchHomesByLocationDetailedQueryVariables,
  SearchHomesByLocationQuery,
  GetWishlistedHomesQuery,
  GetWishlistedHomesQueryVariables,
  GetHomeByIdQuery,
  GetHomeByIdQueryVariables,
  GetRegionByIdQuery,
  GetRegionByIdQueryVariables,
  Style,
  SearchHomesByLocationQueryVariables,
} from '../generated/graphql'

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

export const mockGetWishlistedHomes = zillowAPI.query<
  GetWishlistedHomesQuery,
  GetWishlistedHomesQueryVariables
>(QUERY_NAMES.GetWishlistedHomes, (req, res, ctx) =>
  res(ctx.data({ wishlisted: [] }))
)

export const mockGetHomeByIdQuery = zillowAPI.query<
  GetHomeByIdQuery,
  GetHomeByIdQueryVariables
>(QUERY_NAMES.GetHomeById, (req, res, ctx) =>
  res(
    ctx.data({
      property: {
        price: 100000,
        id: 10,
        sqft: 1200,
        bath: 8,
        beds: 12,
        address: '13, Main St',
        style: Style.SingleFamilyHome,
        imgs: [],
      },
    })
  )
)
export const mockGetHomeByIdQueryFetching = zillowAPI.query(
  QUERY_NAMES.GetHomeById,
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)
export const mockGetHomeByIdQueryError = zillowAPI.query(
  QUERY_NAMES.GetHomeById,
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)

export const mockGetRegionByIdQueryFetching = zillowAPI.query(
  QUERY_NAMES.GetRegionById,
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)
export const mockGetRegionByIdQueryError = zillowAPI.query(
  QUERY_NAMES.GetRegionById,
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)

const applyFilter = (
  allHomes: typeof homesMockData.properties,
  whereConditions: any
) => {
  const { beds, bath, price, sqft, yearBuilt } = whereConditions
  let homes = allHomes

  if (price)
    homes = homes.filter(
      (property) =>
        property.price! >= price._gte && property.price! <= price._lte
    )
  if (sqft)
    homes = homes.filter(
      (property) => property.sqft! >= sqft._gte && property.sqft! <= sqft._lte
    )
  if (yearBuilt)
    homes = homes.filter(
      (property) =>
        property.yearBuilt >= yearBuilt._gte &&
        property.yearBuilt <= yearBuilt._lte
    )
  if (beds) homes = homes.filter((home) => home.beds! >= beds._gte)
  if (bath) homes = homes.filter((home) => home.bath! >= bath._gte)

  return homes
}

export const mockSearchHomesByLocation = zillowAPI.query<
  SearchHomesByLocationQuery,
  SearchHomesByLocationQueryVariables
>(QUERY_NAMES.SearchHomesByLocation, (req, res, ctx) => {
  const { properties } = homesMockData
  const { where, take } = req.variables
  const filteredHomes = take ? applyFilter(properties, where) : []
  return res(ctx.data({ properties: filteredHomes }))
})

export const mockSearchHomesByLocationErrors = zillowAPI.query(
  QUERY_NAMES.SearchHomesByLocation,
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)
export const mockSearchHomesByLocationFetching = zillowAPI.query(
  QUERY_NAMES.SearchHomesByLocation,
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)

export const mockSearchHomesByLocationDetailed = zillowAPI.query<
  SearchHomesByLocationDetailedQuery,
  SearchHomesByLocationDetailedQueryVariables
>(QUERY_NAMES.SearchHomesByLocationDetailed, (req, res, ctx) => {
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
  mockGetWishlistedHomes,
  mockGetHomeByIdQuery,
  mockGetHomeByIdQueryFetching,
  mockGetHomeByIdQueryError,
  mockInsertUserHome,
  mockSearchHomesByLocation,
  mockSearchHomesByLocationDetailed,
]
