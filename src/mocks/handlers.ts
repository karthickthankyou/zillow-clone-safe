import { graphql } from 'msw'
import { getCities } from './data/cities'
import { searchHomesByLocationMockData } from './data/homes'

const zillowAPI = graphql.link(
  'https://zillow-karthick.herokuapp.com/v1/graphql'
)

export const mockGetCities = zillowAPI.query('getCities', (req, res, ctx) =>
  res(ctx.data(getCities))
)

export const mockSearchHomesByLocation = zillowAPI.query(
  'SearchHomesByLocation',
  (req, res, ctx) => res(ctx.data(searchHomesByLocationMockData))
)
export const mockSearchHomesByLocationErrors = zillowAPI.query(
  'SearchHomesByLocation',
  (req, res, ctx) => res(ctx.errors([{ message: 'Something went wrong...' }]))
)
export const mockSearchHomesByLocationFetching = zillowAPI.query(
  'SearchHomesByLocation',
  (req, res, ctx) => res(ctx.delay(1000 * 60 * 60 * 60), ctx.data([]))
)

export const handlers = [mockGetCities, mockSearchHomesByLocation]
