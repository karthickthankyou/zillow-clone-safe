/* eslint-disable no-underscore-dangle */
import { graphql } from 'msw'
import { namedOperations } from 'src/generated/graphql'
import { getCitiesMockData } from './data/cities'
import {
  searchHomesByLocationMockData,
  searchHomesResultsMockData,
} from './data/homes'

const zillowAPI = graphql.link(
  'https://zillow-karthick.herokuapp.com/v1/graphql'
)

const { SearchHomesByLocation, getCities, SearchHomesByLocationDetailed } =
  namedOperations.Query

export const mockGetCities = zillowAPI.query(getCities, (req, res, ctx) =>
  res(ctx.data(getCitiesMockData))
)

export const mockSearchHomesByLocation = zillowAPI.query(
  SearchHomesByLocation,
  (req, res, ctx) => res(ctx.data(searchHomesByLocationMockData))
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
    let { homes } = searchHomesResultsMockData
    const { id, lat, lng, beds, bath, price, sqft } = req.variables.where
    console.log('req.variables: ', req.variables)
    if (price)
      homes = homes.filter(
        (home) => home.price >= price._gte && home.price <= price._lte
      )
    if (beds) homes = homes.filter((home) => home.beds >= beds._gte)

    console.log('where', id, lat, lng, beds, bath, price, sqft, homes)
    return res(ctx.data({ homes }))
  }
)

export const handlers = [
  mockGetCities,
  mockSearchHomesByLocation,
  mockSearchHomesByLocationDetailed,
]
