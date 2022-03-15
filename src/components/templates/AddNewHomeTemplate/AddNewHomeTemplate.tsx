/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState, ReactElement } from 'react'
import { useInsertHomeMutation } from 'src/generated/graphql'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
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
  MapMessage,
} from 'src/components/organisms/MapboxContent/MapboxContent'
import ZoomControls, {
  MapControl,
  MapControlAction,
} from 'src/components/organisms/ZoomControls/ZoomControls'
import { Marker } from 'react-map-gl'
import GlobeIcon from '@heroicons/react/outline/GlobeIcon'
import Pin from '@heroicons/react/outline/LocationMarkerIcon'
import PinSolid from '@heroicons/react/solid/LocationMarkerIcon'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'
import { selectViewport, setViewport } from 'src/store/map/mapSlice'
import { useSearchAddress } from 'src/store/streams'
import Autocomplete from 'src/components/molecules/Autocomplete'
import { useAppDispatch, useAppSelector } from 'src/store'
import { notify } from 'src/hooks'
import { Children } from 'src/types'
import Link from 'src/components/atoms/Link'
import Dialog from 'src/components/molecules/Dialog'
import ProductPageTemplate from 'src/components/templates/ProductPage'

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
    lat: yup
      .number()
      .min(-90, 'lat must be -90 to 90')
      .max(90, `lat must be -90 to 90`)
      .required('lat is not set.'),
    lng: yup
      .number()
      .min(-180, 'lng must be -180 to 180')
      .max(180, `lng must be -180 to 180`)
      .required('lng is not set.'),
    zipcode: yup.string().required('enter the zipcode.'),
  })
  .required()

type NewHomeSchema = yup.InferType<typeof newHomeSchema>

export interface IAddNewHomeTemplateProps {}

const MapLocationPicker = ({
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

const FormSection = ({
  title,
  children,
}: {
  title: string | ReactElement
  children: Children
}) => (
  <div className='grid gap-8 pb-6 sm:grid-cols-2 md:grid-cols-3'>
    <div className='col-span-1'>{title}</div>
    <div className='grid col-span-2 gap-4 sm:grid-cols-2'>{children}</div>
  </div>
)

const FormSectionTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className='space-y-4'>
    <div className='text-xl font-semibold'>{title}</div>
    <div className='text-sm text-gray-600'>{description}</div>
  </div>
)

const AddNewHomeTemplate = () => {
  const [home, addNewHome] = useInsertHomeMutation()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
      style: 'Select type of house',
      yearBuilt: undefined,
      zipcode: undefined,
      lat: undefined,
      lng: undefined,
    },
  })

  const homeData = watch()

  const [showPreview, setshowPreview] = useState(false)

  const formData = watch()
  console.log('Errors and data: ', errors, formData)

  const onSubmit = handleSubmit((data) => {
    console.log('Submitting: ', data)
    addNewHome({ object: data })
  })

  return (
    <form onSubmit={onSubmit} className='mt-12 mb-24 space-y-20'>
      <div className='text-3xl font-medium'>Add new home</div>
      <FormSection
        title={
          <FormSectionTitle
            title='Basic information'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
          />
        }
      >
        <Label title='Price' error={errors.price}>
          <Input
            type='number'
            placeholder='Enter the price.'
            {...register('price')}
          />
        </Label>
        <Label title='Style' error={errors.style}>
          <HtmlSelect {...register('style')}>
            <option value='Select type of house' disabled>
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
      </FormSection>
      <FormSection
        title={
          <FormSectionTitle
            title='Property size'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
          />
        }
      >
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
      </FormSection>
      <FormSection
        title={
          <FormSectionTitle
            title='Location'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
          />
        }
      >
        <MapLocationPicker setValue={setValue} className='sm:col-span-2' />

        <Label title='Address' error={errors.address}>
          <TextArea
            readOnly
            placeholder='Enter the address.'
            {...register('address')}
            rows={4}
            disabled
          />
        </Label>
        <Label title='City' error={errors.city}>
          <Input
            readOnly
            type='string'
            placeholder='Enter the city.'
            disabled
            {...register('city')}
          />
        </Label>
        <Label title='State' error={errors.state}>
          <Input
            readOnly
            placeholder='Enter the state name.'
            disabled
            {...register('state')}
          />
        </Label>
        <Label title='Zip code' error={errors.zipcode}>
          <Input
            readOnly
            placeholder='Enter zipcode'
            disabled
            {...register('zipcode')}
          />
        </Label>
      </FormSection>

      <FormSection
        title={
          <FormSectionTitle
            title='Additional information'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
          />
        }
      >
        <Label title='Description' error={errors.description}>
          <TextArea
            placeholder='Describe about the home.'
            rows={4}
            {...register('description')}
          />
        </Label>
        <Label title='Features' error={errors.features}>
          <TextArea
            placeholder='Airconditioned | Parking | 3 stories'
            rows={4}
            {...register('features')}
          />
        </Label>
        <Label title='Facts (Optional)' error={errors.facts}>
          <TextArea
            placeholder='Enter the facts.'
            rows={4}
            {...register('facts')}
          />
        </Label>
      </FormSection>
      <Dialog
        open={showPreview}
        setOpen={setshowPreview}
        className='w-screen h-screen bg-white'
      >
        <ProductPageTemplate
          homeData={homeData}
          // homeData={{
          //   id: 12,
          //   priceSqft: 12,
          //   createdAt: '2020-01-01',
          //   updatedAt: '2020-01-01',
          //   address:
          //     '6046 M J Taylor Road, Hahira, Georgia 31632, United States',
          //   bath: 1,
          //   beds: 1,
          //   city: 'Hahira',
          //   description: 'Goood house.',
          //   facts: '',
          //   features: 'yes.',
          //   lat: 31.03866,
          //   lng: -83.45001,
          //   lotSize: 1200,
          //   price: 878,
          //   sqft: 1000,
          //   state: 'Georgia',
          //   style: 'Single_Family_Home',
          //   yearBuilt: 1999,
          //   zipcode: '31632',
          // }}
        />
        <button onClick={() => setshowPreview(false)} type='button'>
          Back to add home page
        </button>
      </Dialog>
      <div className='flex justify-end space-x-4'>
        <button
          type='button'
          className='px-20 py-2 border rounded text-primary-600 border-primary-600 bg-primary-50'
          onClick={() => setshowPreview(true)}
        >
          Preview
        </button>

        <button
          className='px-20 py-2 text-white rounded bg-primary-500'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddNewHomeTemplate
