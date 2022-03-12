/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react'
import { useInsertHomeMutation } from 'src/generated/graphql'
import { useForm } from 'react-hook-form'
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
} from 'src/components/organisms/MapboxContent/MapboxContent'
import ZoomControls, {
  MapControl,
} from 'src/components/organisms/ZoomControls/ZoomControls'
import { Marker } from 'react-map-gl'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import PinSolid from '@heroicons/react/solid/LocationMarkerIcon'
import MapIcon from '@heroicons/react/outline/MapIcon'
import { setViewport } from 'src/store/map/mapSlice'

const MapLocationPicker = () => {
  const [marker, setMarker] = useState(() => ({
    latitude: 40,
    longitude: -100,
  }))

  const onMarkerDrag = useCallback((event: { lngLat: [number, number] }) => {
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    })
  }, [])

  return (
    <MapProvider className='h-72'>
      <Mapbox>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          draggable
          // onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}

          // onDragEnd={onMarkerDragEnd}
        >
          <PinSolid className='w-6 h-6' />
        </Marker>
        <PanelContainer>
          <Panel position='left-top'>
            <ZoomControls>
              <ZoomControls.ZoomIn />
              <ZoomControls.ZoomOut />
              <MapControl
                action={setViewport({
                  ...marker,
                  zoom: 13,
                })}
                Icon={Pin}
              />
              <MapControl
                action={setViewport({
                  ...marker,
                  zoom: 6,
                })}
                Icon={MapIcon}
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
        </PanelContainer>
      </Mapbox>
    </MapProvider>
  )
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
    zipcode: yup.string().required('enter the zipcode.'),
  })
  .required()

type NewHomeSchema = yup.InferType<typeof newHomeSchema>

export interface IAddNewHomeTemplateProps {}

const AddNewHomeTemplate = () => {
  const [home, addNewHome] = useInsertHomeMutation()

  const {
    register,
    handleSubmit,
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
    },
  })

  const onSubmit = handleSubmit((data) => console.log('Signup: ', data))

  return (
    <div className='grid grid-cols-2 gap-2'>
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
        <Label title='Address' error={errors.address}>
          <TextArea placeholder='Enter the address.' {...register('address')} />
        </Label>
        <div className='grid grid-cols-2 gap-3'>
          <Label title='City' error={errors.city}>
            <Input
              type='string'
              placeholder='Enter the city.'
              {...register('city')}
            />
          </Label>
          <Label title='State' error={errors.state}>
            <Input placeholder='Enter the state name.' {...register('state')} />
          </Label>
          <Label title='Zip code' error={errors.zipcode}>
            <Input placeholder='Enter zipcode' {...register('zipcode')} />
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
          <TextArea placeholder='Enter the address.' {...register('facts')} />
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
        <MapLocationPicker />
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
