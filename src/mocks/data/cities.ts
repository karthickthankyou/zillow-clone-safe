import {
  GetRegionByIdQuery,
  SearchCitiesByLocationQuery,
  SearchStatesByLocationQuery,
} from 'src/generated/graphql'

export const mockDataGetCities = {
  cities: [
    {
      displayName: 'New York!',
      lat: 40.7128,
      lng: -74.006,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1640715615/nike/cities/newyork_zqnljo.jpg',
      propertiesCount: 1202,
      __typename: 'cities',
    },
    {
      displayName: 'Los Angeles',
      lat: 34.0522,
      lng: -118.2437,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1640725349/nike/cities/maarten-van-den-heuvel-gZXx8lKAb7Y-unsplash_llua9m.jpg',
      propertiesCount: 780,
      __typename: 'cities',
    },
    {
      displayName: 'Chicago',
      lat: 41.8781136,
      lng: -87.6297982,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1640725977/nike/cities/sawyer-bengtson-tnv84LOjes4-unsplash_yl9elq.jpg',
      propertiesCount: 780,
      __typename: 'cities',
    },
    {
      displayName: 'Houston',
      lat: 29.7604267,
      lng: -95.3698028,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005128/nike/cities/carlos-alfonso-AlBgcDfDG_s-unsplash_m5qxxz.jpg',
      propertiesCount: 989,
      __typename: 'cities',
    },
    {
      displayName: 'Philadelphia',
      lat: 39.9525839,
      lng: -75.1652215,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005209/nike/cities/chris-henry-cifAc-YVKNg-unsplash_goqi4q.jpg',
      propertiesCount: 77,
      __typename: 'cities',
    },
    {
      displayName: 'Phoenix',
      lat: 33.4483771,
      lng: -112.0740373,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005320/nike/cities/pj-gal-szabo-FGdiw1y1lKY-unsplash_fih0zs.jpg',
      propertiesCount: 771,
      __typename: 'cities',
    },
    {
      displayName: 'San Antonio',
      lat: 29.4241219,
      lng: -98.49362819,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005384/nike/cities/chandra-maharzan-9GLaucc3HqY-unsplash_gk16as.jpg',
      propertiesCount: 84,
      __typename: 'cities',
    },
    {
      displayName: 'San Diego',
      lat: 32.715738,
      lng: -117.1610838,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005468/nike/cities/gerson-repreza-88_Wt6-3PA8-unsplash_r6r7lf.jpg',
      propertiesCount: 109,
      __typename: 'cities',
    },
    {
      displayName: 'Dallas',
      lat: 32.7766642,
      lng: 96.79698789,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005544/nike/cities/koushik-beeram-rgj0XAcG0T0-unsplash_owhbkn.jpg',
      propertiesCount: 109,
      __typename: 'cities',
    },
    {
      displayName: 'San Jose',
      lat: 37.3382082,
      lng: -121.8863286,
      image:
        'https://res.cloudinary.com/thankyou/image/upload/v1643005642/nike/cities/timo-wielink-8bB9xmJqyz4-unsplash_pfeiao.jpg',
      propertiesCount: 109,
      __typename: 'cities',
    },
  ],
}

export const mockDataSearchCities = {
  features: [
    {
      place_name: 'Northwest, Michigan, United States',
      geometry: {
        coordinates: [-83.7629, 43.0447],
      },
    },
    {
      place_name: 'Northwest, Indiana, United States',
      geometry: {
        coordinates: [-86.6167, 38.6667],
      },
    },
    {
      place_name: 'NW Jr College, Mississippi, United States',
      geometry: {
        coordinates: [-89.97, 34.62],
      },
    },
    {
      place_name: 'Northwest Junior College, Mississippi, United States',
      geometry: {
        coordinates: [-89.97, 34.62],
      },
    },
    {
      place_name: 'Northwest Plaza, Missouri, United States',
      geometry: {
        coordinates: [-90.39, 38.74],
      },
    },
  ],
}

export const mockDataSearchCitiesByLocation: SearchCitiesByLocationQuery = {
  cities: [
    {
      id: 'Portland',
      lat: 45.50777,
      lng: -122.64656,
      priceSqft: 263,
      totalHomes: 233,
      __typename: 'location_stats',
    },
    {
      id: 'Tigard',
      lat: 45.42003,
      lng: -122.80309,
      priceSqft: 244,
      totalHomes: 18,
      __typename: 'location_stats',
    },
    {
      id: 'Happy Valley',
      lat: 45.44364,
      lng: -122.53548,
      priceSqft: 201,
      totalHomes: 7,
      __typename: 'location_stats',
    },
  ],
}

export const mockDataSearchStatesByLocation: SearchStatesByLocationQuery = {
  states: [
    {
      id: 'CA',
      lat: 34.73573,
      lng: -118.86715,
      priceSqft: 853,
      totalHomes: 1998,
      __typename: 'location_stats',
    },
    {
      id: 'FL',
      lat: 27.83937,
      lng: -81.17595,
      priceSqft: 228,
      totalHomes: 1554,
      __typename: 'location_stats',
    },
    {
      id: 'AZ',
      lat: 33.27059,
      lng: -111.75183,
      priceSqft: 297,
      totalHomes: 1366,
      __typename: 'location_stats',
    },
    {
      id: 'NV',
      lat: 36.46021,
      lng: -115.63055,
      priceSqft: 186,
      totalHomes: 1091,
      __typename: 'location_stats',
    },
    {
      id: 'OH',
      lat: 40.74146,
      lng: -82.637,
      priceSqft: 107,
      totalHomes: 1043,
      __typename: 'location_stats',
    },
    {
      id: 'CO',
      lat: 39.53653,
      lng: -104.8958,
      priceSqft: 232,
      totalHomes: 729,
      __typename: 'location_stats',
    },
    {
      id: 'NY',
      lat: 41.24988,
      lng: -75.10831,
      priceSqft: 452,
      totalHomes: 691,
      __typename: 'location_stats',
    },
    {
      id: 'PA',
      lat: 40.12196,
      lng: -76.5741,
      priceSqft: 318,
      totalHomes: 688,
      __typename: 'location_stats',
    },
    {
      id: 'MN',
      lat: 44.98078,
      lng: -93.22463,
      priceSqft: 177,
      totalHomes: 619,
      __typename: 'location_stats',
    },
    {
      id: 'NC',
      lat: 35.65175,
      lng: -79.8944,
      priceSqft: 163,
      totalHomes: 618,
      __typename: 'location_stats',
    },
    {
      id: 'IL',
      lat: 41.87119,
      lng: -87.67333,
      priceSqft: 3129,
      totalHomes: 571,
      __typename: 'location_stats',
    },
    {
      id: 'MD',
      lat: 39.31646,
      lng: -76.59665,
      priceSqft: 135,
      totalHomes: 513,
      __typename: 'location_stats',
    },
    {
      id: 'GA',
      lat: 33.79591,
      lng: -84.39133,
      priceSqft: 233,
      totalHomes: 499,
      __typename: 'location_stats',
    },
    {
      id: 'TN',
      lat: 35.71964,
      lng: -88.07005,
      priceSqft: 166,
      totalHomes: 469,
      __typename: 'location_stats',
    },
    {
      id: 'VA',
      lat: 37.07136,
      lng: -76.65298,
      priceSqft: 162,
      totalHomes: 423,
      __typename: 'location_stats',
    },
    {
      id: 'MI',
      lat: 42.4052,
      lng: -83.09781,
      priceSqft: 55,
      totalHomes: 354,
      __typename: 'location_stats',
    },
    {
      id: 'KY',
      lat: 38.15595,
      lng: -85.34646,
      priceSqft: 126,
      totalHomes: 351,
      __typename: 'location_stats',
    },
    {
      id: 'OK',
      lat: 35.71578,
      lng: -96.90628,
      priceSqft: 113,
      totalHomes: 351,
      __typename: 'location_stats',
    },
    {
      id: 'WA',
      lat: 47.63156,
      lng: -120.65477,
      priceSqft: 349,
      totalHomes: 345,
      __typename: 'location_stats',
    },
    {
      id: 'WI',
      lat: 43.05606,
      lng: -88.29846,
      priceSqft: 140,
      totalHomes: 281,
      __typename: 'location_stats',
    },
    {
      id: 'OR',
      lat: 45.49956,
      lng: -122.65429,
      priceSqft: 260,
      totalHomes: 259,
      __typename: 'location_stats',
    },
    {
      id: 'NE',
      lat: 41.10509,
      lng: -96.271,
      priceSqft: 119,
      totalHomes: 242,
      __typename: 'location_stats',
    },
    {
      id: 'DC',
      lat: 38.91717,
      lng: -77.01855,
      priceSqft: 433,
      totalHomes: 148,
      __typename: 'location_stats',
    },
    {
      id: 'MA',
      lat: 42.33028,
      lng: -71.0821,
      priceSqft: 725,
      totalHomes: 128,
      __typename: 'location_stats',
    },
    {
      id: 'AL',
      lat: 33.46488,
      lng: -86.76792,
      priceSqft: 124,
      totalHomes: 117,
      __typename: 'location_stats',
    },
    {
      id: 'IA',
      lat: 41.60087,
      lng: -93.65509,
      priceSqft: 145,
      totalHomes: 102,
      __typename: 'location_stats',
    },
    {
      id: 'NJ',
      lat: 40.73403,
      lng: -74.19958,
      priceSqft: 149,
      totalHomes: 39,
      __typename: 'location_stats',
    },
  ],
}

export const mockDataGetRegionById: GetRegionByIdQuery = {
  location_stats_by_pk: {
    id: 'Mocked State',
    totalHomes: 18,
    bedsPrice: [
      {
        avg: 405000,
        beds: '2',
        count: 1,
        sqftAvg: 311,
      },
      {
        avg: 441660,
        beds: '3',
        count: 5,
        sqftAvg: 265,
      },
      {
        avg: 647976,
        beds: '4',
        count: 10,
        sqftAvg: 234,
      },
      {
        avg: 849950,
        beds: '5+',
        count: 2,
        sqftAvg: 215,
      },
    ],
    __typename: 'location_stats',
  },
}
