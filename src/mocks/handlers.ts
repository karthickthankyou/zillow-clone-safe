/* eslint-disable no-underscore-dangle */
import { graphql, rest } from 'msw'
import { Homes, namedOperations } from '../generated/graphql'
import { getCitiesMockData, mockSearchCities } from './data/cities'
import { homesMockData } from './data/homes'

const zillowAPI = graphql.link(
  'https://zillow-karthick.herokuapp.com/v1/graphql'
)

const { SearchHomesByLocation, getCities, SearchHomesByLocationDetailed } =
  namedOperations.Query

export const mockGetCities = zillowAPI.query(getCities, (req, res, ctx) =>
  res(ctx.data(getCitiesMockData))
)

export const searchCities = rest.get(
  'https://api.mapbox.com/geocoding/v5/mapbox.places/:searchTerm.json',
  (req, res, ctx) => res(ctx.json(mockSearchCities))
)

const applyFilter = (allHomes: Partial<Homes>[], whereConditions: any) => {
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

export const mockSearchHomesByLocation = zillowAPI.query(
  SearchHomesByLocation,
  (req, res, ctx) => {
    const { homes } = homesMockData
    const filteredHomes = applyFilter(homes, req.variables.where)
    return res(ctx.data({ homes: filteredHomes }))
  }
)

export const mockSearchHomesByLocationErrors = zillowAPI.query(
  SearchHomesByLocation,
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)
export const mockSearchHomesByLocationFetching = zillowAPI.query(
  SearchHomesByLocation,
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)

export const mockSearchHomesByLocationDetailed = zillowAPI.query(
  SearchHomesByLocationDetailed,
  (req, res, ctx) => {
    const { homes } = homesMockData
    const filteredHomes = applyFilter(homes, req.variables.where)
    return res(ctx.data({ homes: filteredHomes }))
  }
)

export const handlers = [
  mockGetCities,
  mockSearchHomesByLocation,
  mockSearchHomesByLocationDetailed,
  searchCities,
]
