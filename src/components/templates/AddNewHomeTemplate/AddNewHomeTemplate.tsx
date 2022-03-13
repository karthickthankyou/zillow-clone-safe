/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react'
import { useInsertHomeMutation } from 'src/generated/graphql'
import { useForm, UseFormSetValue } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import HtmlSelect from 'src/components/atoms/HtmlSelect'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import Mapbox from 'src/components/organisms/Mapbox'
import { MapProvider } from 'src/store/map/mapContext'
import {
  Panel,
  PanelContainer,
  FetchingBool,
  Error,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import ZoomControls, {
  MapControl,
  MapControlAction,
} from 'src/components/organisms/ZoomControls/ZoomControls'
import { Marker } from 'react-map-gl'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import PinSolid from '@heroicons/react/solid/LocationMarkerIcon'
import MapIcon from '@heroicons/react/outline/MapIcon'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'
import { selectViewport, setViewport } from 'src/store/map/mapSlice'
import { useSearchAddress } from 'src/store/streams'
import Autocomplete from 'src/components/molecules/Autocomplete'
import { useAppDispatch, useAppSelector } from 'src/store'

export type AddressSearchType = {
  address: string
  city: string
  state: string
  postcode: string
  latitude: number
  longitude: number
}

const newHomeSchema = yup
  .object({
    address: yup.string().required('enter the address.'),
    bath: yup
      .number()
      .typeError(
        'enter the number of bathrooms. ex: 2. Your house has bathrooms right?'
      )
      .min(0, 'a negative number? Seriously?')
      .max(10000, `doesn't seem possible to me.`),
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
      .min(0, 'a negative number? Seriously?'),
    price: yup
      .number()
      .typeError('enter the price.')
      .min(0, 'a negative number? Seriously?'),
    sqft: yup
      .number()
      .typeError('enter the size of your house in square feet. ex: 1000')
      .min(0, 'a negative number? Seriously?'),
    city: yup.string().required('enter the city name.'),
    description: yup
      .string()
      .required(
        'Write a few words about the house you are trying to sell. You want to sell it or not?'
      ),
    facts: yup.string(),
    features: yup
      .string()
      .required(
        'A house with no features is not a house. It is a barren land.'
      ),

    state: yup.string().required('enter the state name.'),
    style: yup
      .string()
      .required('pick a style. Even if you dont find your house stylish.'),
    yearBuilt: yup
      .number()
      .min(1500, 'that house belongs in a museum.')
      .max(2022, `that's future date. Manifestations. Urgh!`)
      .required(
        'enter the year of construction. Prehistoric houses are not listed right now.'
      ),
    latitude: yup
      .number()
      .min(-90, 'Latitude must be -90 to 90')
      .max(90, `Latitude must be -90 to 90`)
      .required('Latitude is not set.'),
    longitude: yup
      .number()
      .min(-180, 'Longitude must be -180 to 180')
      .max(180, `Longitude must be -180 to 180`)
      .required('Longitude is not set.'),
    zipcode: yup.string().required('enter the zipcode.'),
  })
  .required()

type NewHomeSchema = yup.InferType<typeof newHomeSchema>

export interface IAddNewHomeTemplateProps {}

const MapLocationPicker = ({ setValue }: { setValue: Function }) => {
  const [marker, setMarker] = useState(() => ({
    latitude: 40,
    longitude: -100,
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

  useEffect(() => {
    console.log(searchTextError, markerDragError)
  }, [markerDragError, searchTextError])

  const dispatch = useAppDispatch()

  const setAddress = useCallback(
    (v: {
      address?: string
      state?: string
      city?: string
      postcode?: string
    }) => {
      const { address, city, postcode, state } = v
      setValue('address', address)
      setValue('state', state)
      setValue('city', city)
      setValue('zipcode', postcode)
    },
    [setValue]
  )

  useEffect(() => {
    if (markerDragData?.length > 0) setAddress(markerDragData[0])
  }, [markerDragData, setAddress])

  const viewport = useAppSelector(selectViewport)

  return (
    <MapProvider className='h-96'>
      <Mapbox>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable
          // onDragStart={onMarkerDragStart}
          onDrag={(event: { lngLat: [number, number] }) => {
            setMarker({
              longitude: event.lngLat[0],
              latitude: event.lngLat[1],
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
                  setMarker({ latitude, longitude })
                  dispatch(setViewport({ latitude, longitude, zoom: 14 }))
                  setAddress(v)
                }
              }}
              className='rounded-lg shadow-lg'
            />
            {/* <LocationSearch onChange={() => console.log('onChange')} /> */}
          </Panel>
          <Panel position='right-top'>
            <ZoomControls>
              <ZoomControls.ZoomIn />
              <ZoomControls.ZoomOut />
              <MapControlAction action={() => setMarker(viewport)} Icon={Pin} />
              <MapControlAction
                action={() => {
                  setAddress({})
                }}
                Icon={RefreshIcon}
              />
              <MapControl
                action={setViewport({
                  ...marker,
                  zoom: 3,
                })}
                Icon={GlobeIcon}
              />
            </ZoomControls>
          </Panel>
          <Panel position='center-bottom'>
            <FetchingBool fetching={searchTextFetching || markerDragFetching} />
            <Error />
          </Panel>
        </PanelContainer>
      </Mapbox>
    </MapProvider>
  )
}

const AddNewHomeTemplate = () => {
  const [home, addNewHome] = useInsertHomeMutation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewHomeSchema>({
    resolver: yupResolver(newHomeSchema),
    defaultValues: {
      address: undefined,
      bath: undefined,
      beds: undefined,
      city: '',
      description: '',
      facts: '',
      features: '',
      lotSize: undefined,
      price: undefined,
      sqft: undefined,
      state: undefined,
      style: '',
      yearBuilt: undefined,
      zipcode: undefined,
      latitude: undefined,
      longitude: undefined,
    },
  })

  const onSubmit = handleSubmit((data) => console.log('Signup: ', data))

  return (
    <div className='grid grid-cols-2 gap-4'>
      <form onSubmit={onSubmit} className='space-y-4 '>
        <Label title='Price' error={errors.price}>
          <Input
            type='number'
            placeholder='Enter the price.'
            {...register('price')}
          />
        </Label>
        <div className='grid grid-cols-2 gap-3'>
          <Label title='Style' error={errors.style}>
            <HtmlSelect {...register('style')}>
              <option value='' disabled selected>
                Select type of house
              </option>
              <option value='Condo'>Condo</option>
              <option value='Single_Family_Home'>Single Family Home</option>
              <option value='Townhouse'>Townhouse</option>
              <option value='Coop'>Coop</option>
              <option value='Unknown'>Unknown</option>
              <option value='Apartment'>Apartment</option>
              <option value='Multi_Family'>Multi Family</option>
              <option value='Mobile_Manufactured'>Mobile Manufactured</option>
              <option value='Farm_Ranch'>Farm Ranch</option>
              <option value='Lot_Land'>Lot Land</option>
            </HtmlSelect>
          </Label>
          <Label title='Year of construction' error={errors.yearBuilt}>
            <Input
              type='number'
              placeholder='Enter the year of construction.'
              {...register('yearBuilt')}
            />
          </Label>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <Label title='Bath' error={errors.bath}>
            <Input
              type='number'
              placeholder='Enter number of baths.'
              {...register('bath')}
            />
          </Label>
          <Label title='Beds' error={errors.beds}>
            <Input
              type='number'
              placeholder='Enter number of beds.'
              {...register('beds')}
            />
          </Label>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <Label title='Square feet' error={errors.sqft}>
            <Input
              type='number'
              placeholder='Enter the price.'
              {...register('sqft')}
            />
          </Label>
          <Label title='Lot size' error={errors.lotSize}>
            <Input
              type='number'
              placeholder='Enter the lot size.'
              {...register('lotSize')}
            />
          </Label>
        </div>

        <Label title='Description' error={errors.description}>
          <TextArea
            placeholder='Describe about the home.'
            {...register('description')}
          />
        </Label>
        <Label title='Features' error={errors.features}>
          <TextArea
            placeholder='Airconditioned | Parking | 3 stories'
            {...register('features')}
          />
        </Label>
        <Label title='Facts (Optional)' error={errors.facts}>
          <TextArea placeholder='Enter the facts.' {...register('facts')} />
        </Label>
        <button
          className='w-full py-2 text-white rounded bg-primary-600'
          type='submit'
        >
          Submit
        </button>
      </form>
      <div>
        <div className='mb-2 text-xl'>Select location</div>
        <MapLocationPicker setValue={setValue} />
        <Label title='Address' error={errors.address}>
          <TextArea
            readOnly
            placeholder='Enter the address.'
            {...register('address')}
          />
        </Label>
        <div className='grid grid-cols-2 gap-3'>
          <Label title='City' error={errors.city}>
            <Input
              readOnly
              type='string'
              placeholder='Enter the city.'
              {...register('city')}
            />
          </Label>
          <Label title='State' error={errors.state}>
            <Input
              readOnly
              placeholder='Enter the state name.'
              {...register('state')}
            />
          </Label>
          <Label title='Zip code' error={errors.zipcode}>
            <Input
              readOnly
              placeholder='Enter zipcode'
              {...register('zipcode')}
            />
          </Label>
        </div>
      </div>
    </div>
  )
}

export default AddNewHomeTemplate

//   .mixed().oneOf([
//   'Condo',
//   'Single_Family_Home',
//   'Townhouse',
//   'Coop',
//   'Unknown',
//   'Apartment',
//   'Multi_Family',
//   'Mobile_Manufactured',
//   'Farm_Ranch',
//   'Lot_Land',
// ])
