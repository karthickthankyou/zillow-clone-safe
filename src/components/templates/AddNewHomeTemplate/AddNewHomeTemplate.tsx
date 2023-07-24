/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState, ReactElement } from 'react'
import { Style, useCreatePropertyMutation } from 'src/generated/graphql'
import Router from 'next/router'
import { Controller, FieldError, useForm } from 'react-hook-form'

import HtmlSelect from 'src/components/atoms/HtmlSelect'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import BadgeCheckIcon from '@heroicons/react/outline/BadgeCheckIcon'
import Image from 'src/components/atoms/Image'

import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

import { Children } from 'src/types'
import Link from 'next/link'
import Dialog from 'src/components/molecules/Dialog'
import { RadioGroup, Switch } from '@headlessui/react'
import { getHomeTypes } from 'src/store/static'
import { useAppDispatch, useAppSelector } from 'src/store'
import Button from 'src/components/atoms/Button'
import { resetMap } from 'src/store/map/mapSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormTypeNewHome, formSchemaNewHome } from 'src/forms'
import { MapLocationPicker } from './utils'

export interface IAddNewHomeTemplateProps {}

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
  const [publishedHome, addNewHome] = useCreatePropertyMutation()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormTypeNewHome>({
    resolver: zodResolver(formSchemaNewHome),
    defaultValues: {
      address: '',
      bath: 0, // default value set to 0
      beds: 0, // default value set to 0
      city: '',
      description: '',
      facts: '',
      features: '',
      published: true,
      lotSize: 0, // default value set to 0
      price: 0,
      sqft: 0,
      plan: 0,
      state: '',
      style: Style.SingleFamilyHome,
      yearBuilt: 2000, // default value set to 2000
      zipcode: '', // default value set to empty string
      lat: 0, // default value set to 0
      lng: 0, // default value set to 0
      imgs: [], // default value set to empty array
    },
  })

  const [isUploading, setIsUploading] = useState(false)

  const formData = watch()

  const uid = useAppSelector((state) => state.user.data.user?.uid)
  const [publishing, setPublishing] = useState(false)
  const [showDialog, setshowDialog] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const onSubmit = handleSubmit(async (data) => {
    setPublishing(true)
    const { plan, ...uploadData } = data

    if (!uid) {
      console.error('Uid')
      return
    }

    const home = await addNewHome({
      createPropertyInput: {
        ...uploadData,
        sellerUid: uid,
        plan: plan || 0,
        imgs: [],
      },
    })

    if (home.data?.createProperty?.id && plan && plan > 0) {
      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      const stripePromise = loadStripe(publishableKey || '')
      const stripe = await stripePromise
      const checkoutSession = await axios.post('/api/create-stripe-session', {
        id: home.data?.createProperty?.id,
        plan,
        imgs: uploadData.imgs,
        address: uploadData.address,
      })
      await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      })
    } else {
      if (home.error) setShowErrorDialog(true)
      if (home.data?.createProperty?.id) setshowDialog(true)
    }
    setPublishing(false)
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetMap())
  }, [dispatch])

  return (
    <form onSubmit={onSubmit} className='mb-24 space-y-20'>
      <div className='mt-12 text-3xl font-medium'>Add new home</div>

      <Dialog
        open={showErrorDialog}
        setOpen={setShowErrorDialog}
        className='max-w-md'
      >
        <div className='text-xl font-semibold'>Oops. Something went wrong.</div>
        <p className='mt-4 text-sm text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          tempore laudantium consequuntur, adipisci quidem ex fugit quo et?
        </p>
      </Dialog>
      <Dialog open={showDialog} setOpen={setshowDialog} className='max-w-md'>
        <div className='text-xl font-semibold'>🎊 New home posted! 🎊</div>
        <p className='mt-4 text-sm text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          tempore laudantium consequuntur, adipisci quidem ex fugit quo et?
        </p>
        <p>Home id: {publishedHome.data?.createProperty?.id}</p>
        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            onClick={() => Router.reload()}
            className='inline-block px-4 py-2 mt-8 text-center border text-primary-600 border-primary-600'
          >
            + Post another home
          </button>
          <Link
            className='inline-block px-4 py-2 mt-8 text-center text-white bg-primary-600'
            href={`/homes/${publishedHome.data?.createProperty?.id}`}
          >
            Visit page
          </Link>
        </div>
      </Dialog>

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
        <MapLocationPicker setValue={setValue} />

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
            title='Media'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
          />
        }
      >
        <Label
          title='Images'
          className='col-span-2'
          error={errors.imgs && (errors.imgs as unknown as FieldError)}
        >
          <Input
            type='file'
            placeholder='Upload images'
            accept='image/*'
            multiple
            disabled={formData && formData.imgs && formData.imgs.length > 0}
            onChange={(e) => {
              const images = e.target.files
              if (images && images?.length > 8) {
                setError('imgs', {
                  message:
                    'Can not upload more than 8 images. Please rechoose files.',
                })
                return
              }

              if (images && images.length > 0) {
                clearErrors('imgs')
                setIsUploading(true)

                const promises = Object.values(images).map((file: any) => {
                  const imageFormData = new FormData()
                  imageFormData.append('file', file)
                  imageFormData.append('upload_preset', 'zillow-clone')
                  imageFormData.append('cloud_name', 'thankyou')

                  return fetch(
                    'https://api.cloudinary.com/v1_1/thankyou/image/upload',
                    {
                      method: 'post',
                      body: imageFormData,
                    }
                  ).then((res) => res.json())
                })

                Promise.all(promises)
                  .then((res) => {
                    const urls = res.map((url) => url.secure_url)
                    setValue('imgs', urls)
                    setIsUploading(false)
                  })
                  .catch(() => {
                    setIsUploading(false)
                    // Todo: Also reset the uploaded pictures.
                    setError('imgs', {
                      message: 'Something went wrong.',
                    })
                  })
              }
            }}
          />
          <div className='grid grid-cols-2 gap-3 my-3 md:grid-cols-3'>
            {formData?.imgs?.map((item) => (
              <Image
                src={item || ''}
                key={item}
                alt=''
                className='w-full h-64 rounded'
              />
            ))}
          </div>
          {isUploading && <div className='mt-2'>Uploading...</div>}
          {formData && formData.imgs && formData.imgs.length > 0 && (
            <div className='flex items-center gap-1 py-2 mt-2'>
              <BadgeCheckIcon className='w-4 h-4 text-green' />
              {formData.imgs?.length}{' '}
              {formData.imgs?.length === 1 ? 'picture' : 'pictures'} uploaded
            </div>
          )}
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
      <FormSection
        title={
          <FormSectionTitle
            title='Plan'
            description='Bring your home to the top of search results and sell it faster!'
          />
        }
      >
        <Controller
          name='plan'
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              value={value?.toString()}
              onChange={(v) => onChange(+(v || 0))}
              className='col-span-2 space-y-2'
            >
              <div className='grid w-full grid-cols-2 gap-3 my-2 lg:grid-cols-4'>
                {[0, 1, 2, 3].map((item) => (
                  <RadioGroup.Option
                    key={item}
                    value={item}
                    className='cursor-pointer'
                  >
                    {({ checked }) => (
                      <div
                        className={`p-6 transition-all relative  rounded-lg shadow-lg  ${
                          checked
                            ? ' border-white border bg-luxury   shadow-primary/50 text-white'
                            : 'border border-primary-100 shadow-black/20 '
                        }`}
                      >
                        {getHomeTypes(item).tag && (
                          <div className='absolute top-0 pt-2 text-xs font-light tracking-wider'>
                            {getHomeTypes(item).tag}
                          </div>
                        )}

                        <div className='font-semibold '>
                          {getHomeTypes(item).displayName}
                        </div>
                        <div className='text-xl'>
                          {getHomeTypes(item).price
                            ? `$${getHomeTypes(item).price}`
                            : 'FREE'}
                        </div>
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          )}
        />
      </FormSection>
      <FormSection
        title={
          <FormSectionTitle
            title='Published'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam modi
              deleniti earum ratione qui odio molestiae.'
          />
        }
      >
        <Controller
          name='published'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Switch
              checked={value || false}
              onChange={onChange}
              className={`${
                value ? 'bg-luxury' : 'bg-gray-200'
              } relative inline-flex items-center h-8 shadow-inner rounded-full w-16`}
            >
              <span
                className={`${
                  value ? 'translate-x-9' : 'translate-x-1'
                } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          )}
        />
      </FormSection>

      <div className='flex justify-end'>
        <Button
          isLoading={publishing}
          className='w-full px-20 py-2 text-white border rounded sm:w-1/2 md:w-1/3 lg:w-1/4 border-primary bg-primary-500'
          type='submit'
        >
          Publish
        </Button>
      </div>
    </form>
  )
}

export default AddNewHomeTemplate
