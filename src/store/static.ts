export const DEBOUNCE_DELAY = 300

export type Viewport = {
  latitude: number
  longitude: number
  zoom: number
}

export type PlaceTypesType =
  | 'region'
  | 'postcode'
  | 'district'
  | 'place'
  | 'locality'
  | 'neighborhood'
  | 'address'
  | 'poi'

export type MapSearch = {
  displayName: string
} & Viewport

export const placeTypeZoom: { [key in PlaceTypesType]: number } = {
  region: 6,
  postcode: 6,
  district: 7,
  place: 8,
  locality: 9,
  neighborhood: 10,
  address: 11,
  poi: 11,
}
