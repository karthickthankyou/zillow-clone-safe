import { RefreshIcon, GlobeIcon } from '@heroicons/react/solid'
import { useCallback, useEffect, useState } from 'react'
import Mapbox from 'src/components/organisms/Mapbox'
import {
  PanelContainer,
  Panel,
  MapMessage,
  FetchingBool,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import ZoomControls from 'src/components/organisms/ZoomControls'
import {
  MapControl,
  MapControlAction,
} from 'src/components/organisms/ZoomControls/ZoomControls'
import { notify } from 'src/hooks'
import { useAppDispatch, useAppSelector } from 'src/store'
import { MapProvider } from 'src/store/map/mapContext'
import { selectViewport, setViewport } from 'src/store/map/mapSlice'
import { useSearchAddress } from 'src/store/streams'
import * as yup from 'yup'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import PinSolid from '@heroicons/react/solid/LocationMarkerIcon'
import { Marker } from 'react-map-gl'
import Autocomplete from 'src/components/molecules/Autocomplete'
import { Style } from 'src/generated/graphql'

export type AddressSearchType = {
  address: string
  city: string
  state: string
  postcode: string
  latitude: number
  longitude: number
}

export const newHomeSchema = yup
  .object({
    address: yup.string().required('enter the address.'),
    bath: yup
      .number()
      .typeError(
        'enter the number of bathrooms. ex: 2. Your house has bathrooms right?'
      )
      .min(0, 'a negative number? Seriously?')
      .max(10000, `doesn't seem possible to me.`),
    plan: yup.mixed<0 | 1 | 2 | 3>().oneOf([0, 1, 2, 3]),
    beds: yup
      .number()
      .typeError(
        'enter the number of bedrooms. ex: 2. Enter 0 if it is just a kitchen.'
      )
      .min(0, 'a negative number? Seriously?')
      .max(10000, 'no.'),
    lotSize: yup
      .number()
      .typeError('enter the lot size in square feet. ex: 1000')
      .min(0, 'a negative number? Seriously?')
      .required(),
    price: yup
      .number()
      .typeError('enter the price.')
      .min(0, 'a negative number? Seriously?')
      .required(),
    sqft: yup
      .number()
      .typeError('enter the size of your house in square feet. ex: 1000')
      .min(0, 'a negative number? Seriously?')
      .required(),
    city: yup.string().required('enter the city name.'),
    description: yup
      .string()
      .required(
        'Write a few words about the house you are trying to sell. You want to sell it or not?'
      ),
    facts: yup.string(),
    published: yup.boolean().required(),
    features: yup
      .string()
      .required(
        'A house with no features is not a house. It is a barren land.'
      ),

    state: yup.string().required('enter the state name.'),
    style: yup
      .mixed<Style>()
      .oneOf(Object.values(Style))
      .required('pick a style. Even if you dont find your house stylish.'),
    yearBuilt: yup
      .number()
      .min(1500, 'that house belongs in a museum.')
      .max(2022, `that's future date. Manifestations. Urgh!`)
      .required(
        'enter the year of construction. Prehistoric houses are not listed right now.'
      ),
    lat: yup
      .number()
      .min(-90, 'lat must be -90 to 90')
      .max(90, `lat must be -90 to 90`)
      .required('lat is not set.'),
    lng: yup
      .number()
      .min(-180, 'lng must be -180 to 180')
      .max(180, `lng must be -180 to 180`)
      .required('images in required.'),
    imgs: yup
      .array()
      .of(yup.string().required())
      .required('select 1 to 8 images')
      .min(1, 'select 1 to 8 images')
      .max(8, 'select 1 to 8 images'),

    zipcode: yup.string().required('enter the zipcode.'),
  })
  .required()

export type NewHomeSchema = yup.InferType<typeof newHomeSchema>

export const MapLocationPicker = ({
  setValue,
  className,
}: {
  setValue: Function
  className?: string
}) => {
  const [marker, setMarker] = useState(() => ({
    lat: 40,
    lng: -100,
  }))

  const [searchText, setSearchText] = useState('')
  const [location, setLocation] = useState('')

  const {
    data: searchTextData,
    loading: searchTextFetching,
    error: searchTextError,
  } = useSearchAddress({ searchText })
  const {
    data: markerDragData,
    loading: markerDragFetching,
    error: markerDragError,
  } = useSearchAddress({ searchText: location })

  const dispatch = useAppDispatch()

  const setAddress = useCallback(
    (v: {
      latitude?: number
      longitude?: number
      address?: string
      state?: string
      city?: string
      postcode?: string
    }) => {
      const { latitude, longitude, address, city, postcode, state } = v
      setValue('lat', latitude)
      setValue('lng', longitude)
      setValue('address', address)
      setValue('state', state)
      setValue('city', city)
      setValue('zipcode', postcode)
    },
    [setValue]
  )

  useEffect(() => {
    if (markerDragData?.length > 0) {
      setAddress(markerDragData[0])
      const { latitude, longitude } = markerDragData[0]
      if (latitude && longitude) {
        notify({ message: `Location saved as ${latitude}, ${longitude}` })
      }
    }
  }, [markerDragData, setAddress])

  const viewport = useAppSelector(selectViewport)

  return (
    <MapProvider className={`h-96 ${className}`}>
      <Mapbox>
        <Marker
          longitude={marker.lng}
          latitude={marker.lat}
          draggable
          // onDragStart={onMarkerDragStart}
          onDrag={(event: { lngLat: [number, number] }) => {
            setMarker({
              lng: event.lngLat[0],
              lat: event.lngLat[1],
            })
          }}
          onDragEnd={(event) => {
            setLocation(event.lngLat.join(','))
          }}
        >
          <PinSolid className='w-6 h-6' />
        </Marker>
        <PanelContainer>
          <Panel position='left-top'>
            <Autocomplete<AddressSearchType, false, false, false>
              options={searchTextData}
              getOptionLabel={(x) => x.address}
              onInputChange={(_, v) => {
                setSearchText(v)
              }}
              loading={searchTextFetching}
              isOptionEqualToValue={(a, b) => a.address === b.address}
              onChange={(_, v) => {
                if (v) {
                  const { latitude, longitude } = v
                  setMarker({ lat: latitude, lng: longitude })
                  dispatch(setViewport({ latitude, longitude, zoom: 14 }))
                  setAddress(v)
                }
              }}
              className='rounded-lg shadow-lg'
            />
          </Panel>
          <Panel position='right-top'>
            <ZoomControls>
              <ZoomControls.ZoomIn />
              <ZoomControls.ZoomOut />
              <MapControlAction
                action={() =>
                  setMarker({ lat: viewport.latitude, lng: viewport.longitude })
                }
                Icon={Pin}
              />
              <MapControlAction
                action={() => {
                  setAddress({})
                }}
                Icon={RefreshIcon}
              />
              <MapControl
                action={setViewport({
                  latitude: marker.lat,
                  longitude: marker.lng,
                  zoom: 3,
                })}
                Icon={GlobeIcon}
              />
            </ZoomControls>
          </Panel>
          <Panel position='center-bottom'>
            <FetchingBool fetching={searchTextFetching || markerDragFetching} />
            <MapMessage message={markerDragError} />
          </Panel>
        </PanelContainer>
      </Mapbox>
    </MapProvider>
  )
}
