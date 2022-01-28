/* eslint-disable react/jsx-props-no-spreading */
import { RadioGroup } from '@headlessui/react'
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import PopoverMenu from 'src/components/molecules/PopoverMenu'
import { Controller, useForm, useWatch } from 'react-hook-form'
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
import { useSearchCitiesQuery } from 'src/generated/graphql'
import ProductListingResults from 'src/components/organisms/ProductListingResults'

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
  lat: number
  lng: number
  zoom: number
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: string
  bath: string
  homeType: string[]
}
export interface IProductListingPageProps {
  search: string
  lat: number
  lng: number
}

const ProductListingPage = ({ search, lat, lng }: IProductListingPageProps) => {
  const initialFilterState: FilterState = {
    search,
    lat,
    lng,
    zoom: 12,
    yearBuilt: [1800, 2022],
    price: [0, 10_000_000],
    sqft: [0, 20_000],
    beds: 'Any',
    bath: 'Any',
    homeType: [],
  }
  const { control, reset, register, setValue, getValues } = useForm({
    defaultValues: initialFilterState,
  })

  const watchAllData = useWatch({ control })

  // console.log('watchAllData: ', watchAllData)

  console.log('Running!')

  // const filtered = () => {
  //   // Search, lat, and lng are added to dirty fields as they are required by default in queries.
  //   const dirtyFieldsArray = [
  //     'search',
  //     'lat',
  //     'lng',
  //     'zoom',
  //     ...Object.keys(dirtyFields),
  //   ]

  //   return Object.keys(watchAllData)
  //     .filter((key) => dirtyFieldsArray.includes(key))
  //     .reduce((obj, key) => {
  //       obj[key] = watchAllData[key]
  //       return obj
  //     }, {})
  // }
  // console.log('filtered: ', filtered)

  // const [filteredDebounced, setFilteredDebounced] = useState<FilterState>()

  // const debounced = useMemo(
  //   () =>
  //     debounce((filteredData) => {
  //       console.log('Debounced: ', filteredData)
  //       // setFilteredDebounced(filteredData)
  //     }, 1000),
  //   []
  // )

  // useEffect(() => {
  //   console.log('Running debounced! ', filtered)
  //   debounced(filtered)
  // }, [filtered, debounced])

  // const [searchProperties] = useSearchPropertiesByLocationQuery({
  //   variables: {
  //     args: {
  //       distance_kms: +filteredDebounced?.zoom * 10,
  //       lat: filteredDebounced?.lat,
  //       lng: filteredDebounced?.lng,
  //     },
  //     offset: 2,
  //     limit: 10,
  //     where: {
  //       // bath: {
  //       //   _gte: 5,
  //       // },
  //     },
  //   },
  // })

  // // How to debounce!
  // // github.com/FormidableLabs/urql/discussions/1547#discussioncomment-623426
  // console.log('searchProperties: ', searchProperties)

  // const [inputValue, setInputValue] = useState(() => search)

  const [{ data, fetching }] = useSearchCitiesQuery({
    variables: { search: 'new' },
  })

  // const options = data?.search_cities.map((item) => item.displayName) || []

  // const onOptionSelect = (e: any, v: any) => {
  //   if (v) {
  //     const latSelected = data?.search_cities.filter(
  //       (d) => d.displayName === v
  //     )[0]?.lat
  //     const lngSelected = data?.search_cities.filter(
  //       (d) => d.displayName === v
  //     )[0]?.lng

  //     setValue('search', v)
  //     setValue('lat', latSelected)
  //     setValue('lng', lngSelected)
  //   }
  // }

  return (
    <div>
      <div className='container mx-auto'>
        <div className='relative z-10 flex items-center gap-12 py-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm'>
          <button type='button' onClick={() => reset()}>
            reset
          </button>
          {/* <Autocomplete
            options={options}
            onInputChange={(_e, v) => setInputValue(v)}
            value={inputValue}
            loading={fetching}
            onChange={onOptionSelect}
            className='rounded-lg'
          /> */}

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
                initialLocation={{
                  latitude: initialFilterState.lat,
                  longitude: initialFilterState.lng,
                  zoom: initialFilterState.zoom,
                }}
                setLocation={({ latitude, longitude, zoom }) => {
                  setValue('lat', latitude)
                  setValue('lng', longitude)
                  setValue('zoom', zoom)
                }}
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

export default ProductListingPage
