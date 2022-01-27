/* eslint-disable react/jsx-props-no-spreading */
import { RadioGroup } from '@headlessui/react'
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import PopoverMenu from 'src/components/molecules/PopoverMenu'
import { Controller, useForm, useWatch } from 'react-hook-form'
import debounce from 'lodash.debounce'
import {
  PopoverButton,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenu/PopoverMenu'
import FilterIcon from '@heroicons/react/outline/FilterIcon'
import Mapbox from 'src/components/organisms/Mapbox'
import PropertyCard from 'src/components/organisms/PropertyCard'
import SliderMui from 'src/components/molecules/SliderMui'
import {
  addDollar,
  shorten,
} from 'src/components/molecules/SliderMui/SliderMui'
import Autocomplete from 'src/components/molecules/Autocomplete'
import { useRouter, withRouter } from 'next/dist/client/router'
import {
  useSearchCitiesQuery,
  useSearchPropertiesByLocationQuery,
} from 'src/generated/graphql'

export interface IProductListingPageProps {
  city: string
}

const MenuItem = ({
  children,
  title,
}: {
  children: ReactElement
  title: string
}) => (
  <PopoverMenu>
    <PopoverButton>
      {title} <span aria-hidden>▾</span>
    </PopoverButton>
    {/* <PopoverOverlay /> */}
    <PopoverPanel className='space-y-2 text-gray-600'>{children}</PopoverPanel>
  </PopoverMenu>
)

interface FilterState {
  search: string
  lat: string
  lng: string
  zoom: string
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: string
  bath: string
  homeType: string[]
}

const ProductListingPage = () => {
  const router = useRouter()
  // Pick<FilterState, 'search' | 'lat' | 'lng'>
  const { search, lat, lng }: { search: string; lat: string; lng: string } =
    router.query

  const initialFilterState: FilterState = {
    search: search || 'New York',
    lat: lat || '40.730610',
    lng: lng || '-73.935242',
    zoom: '12',
    yearBuilt: [1800, 2022],
    price: [0, 10_000_000],
    sqft: [0, 20_000],
    beds: 'Any',
    bath: 'Any',
    homeType: [],
  }

  const {
    control,
    reset,
    register,
    setValue,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: initialFilterState,
  })

  const watchAllData = useWatch({
    control,
  })

  const dirtyFieldsArray = Object.keys(dirtyFields)
  const filtered = Object.keys(watchAllData)
    .filter((key) => dirtyFieldsArray.includes(key))
    .reduce((obj, key) => {
      obj[key] = watchAllData[key]
      return obj
    }, {})

  const [filteredDebounced, setFilteredDebounced] = useState({})

  const debounced = useCallback(
    debounce((filteredData) => {
      console.log('Debounced: ', filteredData)
      // setFilteredDebounced(filteredData)
    }, 2000),
    []
  )

  useEffect(() => {
    debounced(filtered)
  }, [filtered, debounced])

  console.log('filteredDebounced', filteredDebounced)

  const [searchProperties] = useSearchPropertiesByLocationQuery({
    variables: {
      args: {
        distance_kms: 10000,
        lat: '34',
        lng: '-100',
      },
      offset: 2,
      limit: 10,
      where: {
        bath: {
          _gte: 5,
        },
      },
    },
  })

  // How to debounce!
  // github.com/FormidableLabs/urql/discussions/1547#discussioncomment-623426
  console.log('searchProperties: ', searchProperties)

  const [inputValue, setInputValue] = useState(() => search || '')

  const [{ data, fetching }] = useSearchCitiesQuery({
    variables: { search: inputValue },
  })

  const options = data?.search_cities.map((item) => item.displayName) || []
  const [viewport, setViewport] = useState(() => ({
    longitude: parseFloat(lng || '-122.4'),
    latitude: parseFloat(lat || '37.78'),
    zoom: parseFloat('12'),
  }))

  useEffect(() => {
    setValue('lat', viewport.latitude.toString(), { shouldDirty: true })
    setValue('lng', viewport.longitude.toString(), { shouldDirty: true })
    setValue('zoom', viewport.zoom.toString(), { shouldDirty: true })
  }, [setValue, viewport])

  const onOptionSelect = (e: any, v: any) => {
    if (v) {
      const latSelected = data?.search_cities.filter(
        (d) => d.displayName === v
      )[0]?.lat
      const lngSelected = data?.search_cities.filter(
        (d) => d.displayName === v
      )[0]?.lng

      setValue('search', v, { shouldDirty: true })
      setValue('lat', latSelected, { shouldDirty: true })
      setValue('lng', lngSelected, { shouldDirty: true })
      setViewport({ longitude: lngSelected, latitude: latSelected, zoom: 12 })
    }
  }

  return (
    <div>
      <div className='container mx-auto'>
        <div className='relative z-10 flex items-center gap-12 py-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm'>
          <button type='button' onClick={() => reset({ values: {} })}>
            reset
          </button>
          <Autocomplete
            options={options}
            onInputChange={(_e, v) => setInputValue(v)}
            value={inputValue}
            loading={fetching}
            onChange={onOptionSelect}
            className='rounded-lg'
          />

          <MenuItem title='Price'>
            <div>
              <div className='font-semibold'>Price range</div>
              <Controller
                control={control}
                name='price'
                render={({ field: { onChange, value } }) => (
                  <SliderMui
                    onChange={(e, v) => onChange(v)}
                    value={value}
                    step={10_000}
                    initialData={initialFilterState.price}
                    className='mt-12 '
                    labelFormat={(sliderValue) =>
                      `${addDollar(shorten(sliderValue))}`
                    }
                  />
                )}
              />
            </div>
          </MenuItem>
          <MenuItem title='Year built'>
            <div>
              <div className='font-semibold'>Price range</div>
              <Controller
                control={control}
                name='yearBuilt'
                render={({ field: { onChange, value } }) => (
                  <SliderMui
                    onChange={(e, v) => onChange(v)}
                    value={value}
                    initialData={initialFilterState.yearBuilt}
                    step={10}
                    className='mt-12 '
                  />
                )}
              />
            </div>
          </MenuItem>
          <MenuItem title='Sqft'>
            <div>
              <div className='font-semibold'>Square feet</div>
              <Controller
                control={control}
                name='sqft'
                render={({ field: { onChange, value } }) => (
                  <SliderMui
                    onChange={(e, v) => onChange(v)}
                    value={value}
                    initialData={initialFilterState.sqft}
                    step={1_000}
                    className='mt-12 '
                    labelFormat={(sliderValue) => `${sliderValue} sqft`}
                  />
                )}
              />
            </div>
          </MenuItem>

          <MenuItem title='Beds & Bath'>
            <>
              <Controller
                control={control}
                name='beds'
                render={({ field: { onChange, value } }) => (
                  <RadioGroup
                    value={value}
                    onChange={(v) => onChange(v)}
                    className='space-y-2'
                  >
                    <RadioGroup.Label>Bedrooms</RadioGroup.Label>
                    <div className='flex gap-3'>
                      {['1', '2', '3', '4', '5', 'Any'].map((item) => (
                        <RadioGroup.Option key={item} value={`${item}`}>
                          {({ checked }) => (
                            <span
                              className={`border bg-white rounded-sm p-2 ${
                                checked
                                  ? ' border-primary-500 '
                                  : ' border-white '
                              }`}
                            >
                              {item}+
                            </span>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                )}
              />
              <Controller
                control={control}
                name='bath'
                render={({ field: { onChange, value } }) => (
                  <RadioGroup
                    value={value}
                    onChange={(v) => onChange(v)}
                    className='space-y-2'
                  >
                    <RadioGroup.Label>Bathrooms</RadioGroup.Label>
                    <div className='flex gap-3'>
                      {['1', '2', '3', '4', '5', 'Any'].map((item) => (
                        <RadioGroup.Option key={item} value={`${item}`}>
                          {({ checked }) => (
                            <span
                              className={`border bg-white rounded-sm p-2 ${
                                checked
                                  ? ' border-primary-500 '
                                  : ' border-white '
                              }`}
                            >
                              {item}+
                            </span>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                )}
              />
            </>
          </MenuItem>
          <MenuItem title='Home Type'>
            <fieldset style={{ float: 'left' }}>
              <legend>With the same name</legend>
              {['rainbow', 'sdf', 'sdfs'].map((c) => (
                <label key={c}>
                  <input type='checkbox' {...register(`homeType`)} value={c} />
                  {c}
                </label>
              ))}
            </fieldset>
          </MenuItem>

          <button type='button' className='ml-auto text-primary-600'>
            <FilterIcon className='w-5 h-5 lg:hidden' />
          </button>
        </div>
        <div className='flex gap-5'>
          <div className='flex-1 hidden lg:block'>
            <div className='sticky top-0 col-span-1 overflow-hidden rounded'>
              <Mapbox
                // Contains lat lng and zoom
                viewport={viewport}
                setViewport={setViewport}
                markers={[
                  { id: '1', latitude: 42.360081, longitude: -71.0583 },
                  { id: '2', latitude: 42.360081, longitude: -71.0585 },
                ]}
                className='h-screen'
              />
            </div>
          </div>
          <div className='grid flex-1 grid-cols-1 col-span-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ProductListingPage)
