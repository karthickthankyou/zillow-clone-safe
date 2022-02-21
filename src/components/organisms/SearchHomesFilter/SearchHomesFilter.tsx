/* eslint-disable react/jsx-props-no-spreading */
import Autocomplete from 'src/components/molecules/Autocomplete'
import MenuItem from 'src/components/molecules/MenuItem'
import { useAppDispatch, useAppSelector } from 'src/store'
import {
  CitySlice,
  selectCityList,
  selectMapBounds,
  setCitySearchText,
  setSelectedCity,
  setHomesFilter,
  selectFilters,
} from 'src/store/cities/citySlice'

import SliderMui from 'src/components/molecules/SliderMui'

import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { FilterIcon } from '@heroicons/react/solid'
import { catchError, debounceTime, EMPTY, map, Subject, tap } from 'rxjs'
import { addDollar, shortenNumber } from 'src/lib/util'

export interface ISearchHomesFilterProps {}

export const filterDefaultValues = {
  price: [0, 10_000_000] as [number, number],
  yearBuilt: [1900, 2020] as [number, number],
  sqft: [0, 10_000] as [number, number],
  beds: 'Any' as '1' | '2' | '3' | '4' | '5' | 'Any',
  bath: 'Any' as '1' | '2' | '3' | '4' | '5' | 'Any',
  homeType: [
    'Single Family Home',
    'Condo',
    'Multi Family',
    'Townhouse',
    'Mobile Manufactured',
    'Lot Land',
    'Farm Ranch',
    'Coop',
    'Unknown',
    'Apartment',
  ] as (
    | 'Single Family Home'
    | 'Condo'
    | 'Multi Family'
    | 'Townhouse'
    | 'Mobile Manufactured'
    | 'Lot Land'
    | 'Farm Ranch'
    | 'Coop'
    | 'Unknown'
    | 'Apartment'
  )[],
}
const SearchHomesFilter = () => {
  const dispatch = useAppDispatch()

  const cityList = useAppSelector(selectCityList)

  const {
    register,
    watch,
    control,
    formState: { dirtyFields },
    reset,
  } = useForm({
    defaultValues: filterDefaultValues,
  })
  const filterData = watch()

  const [input$] = useState(
    () =>
      new Subject<{
        data: typeof filterData
        dirtyData: typeof dirtyFields
      }>()
  )

  useEffect(() => {
    const subscription = input$
      .pipe(
        debounceTime(1000),
        map(({ data, dirtyData }) => {
          const keys = Object.keys(dirtyData)
          return Object.fromEntries(
            Object.entries(data).filter(([key]) => keys.includes(key))
          )
        }),
        tap((v) => dispatch(setHomesFilter(v))),
        catchError(() => EMPTY)
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [dispatch, input$])

  useEffect(() => {
    // console.log('filterData', filterData, dirtyFields)
    // Add map bounds into the data as default parameters.

    input$.next({ data: filterData, dirtyData: dirtyFields })
  }, [dirtyFields, filterData, input$])

  return (
    <div className='relative z-10 flex items-center gap-12 mb-2 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm'>
      <Autocomplete<CitySlice['cityList']['data'][number], false, false, false>
        options={cityList.data}
        getOptionLabel={(x) => x.displayName}
        onInputChange={(_, v) => dispatch(setCitySearchText(v))}
        loading={cityList.fetching}
        isOptionEqualToValue={(a, b) => a.displayName === b.displayName}
        onChange={(_, v) => {
          if (v)
            dispatch(
              setSelectedCity({
                displayName: v.displayName,
                latitude: v.latitude,
                longitude: v.longitude,
              })
            )
        }}
        className='rounded-lg'
      />
      <Controller
        name='price'
        control={control}
        render={({ field: { onChange, value } }) => (
          <MenuItem title='Price'>
            <div>
              <div className='font-semibold'>Price range</div>
              <SliderMui
                step={10_000}
                onChange={onChange}
                value={value}
                initialData={filterDefaultValues.price}
                className='mt-12 '
                labelFormat={(sliderValue) =>
                  `${addDollar(shortenNumber(sliderValue))}`
                }
              />
            </div>
          </MenuItem>
        )}
      />
      <Controller
        name='yearBuilt'
        control={control}
        render={({ field: { onChange, value } }) => (
          <MenuItem title='Year built'>
            <div>
              <div className='font-semibold'>Price range</div>
              <SliderMui
                onChange={onChange}
                value={value}
                initialData={filterDefaultValues.yearBuilt}
                step={10}
                className='mt-12 '
              />
            </div>
          </MenuItem>
        )}
      />
      <Controller
        name='sqft'
        control={control}
        render={({ field: { onChange, value } }) => (
          <MenuItem title='Sqft'>
            <div>
              <div className='font-semibold'>Square feet</div>
              <SliderMui
                onChange={onChange}
                value={value}
                initialData={filterDefaultValues.sqft}
                step={100}
                className='mt-12 '
                labelFormat={(sliderValue) => `${sliderValue} sqft`}
              />
            </div>
          </MenuItem>
        )}
      />
      <MenuItem title='Beds & Bath'>
        <>
          <Controller
            name='beds'
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={onChange}
                className='space-y-2'
              >
                <RadioGroup.Label>Bedrooms</RadioGroup.Label>
                <div className='flex gap-3'>
                  {['1', '2', '3', '4', '5', 'Any'].map((item) => (
                    <RadioGroup.Option key={item} value={`${item}`}>
                      {({ checked }) => (
                        <span
                          className={`border bg-white rounded-sm p-2 ${
                            checked ? ' border-primary-500 ' : ' border-white '
                          }`}
                        >
                          {item}
                          {item !== 'Any' && '+'}
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
          <Controller
            name='bath'
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={onChange}
                className='space-y-2'
              >
                <RadioGroup.Label>Bathrooms</RadioGroup.Label>
                <div className='flex gap-3'>
                  {['1', '2', '3', '4', '5', 'Any'].map((item) => (
                    <RadioGroup.Option key={item} value={`${item}`}>
                      {({ checked }) => (
                        <span
                          className={`border bg-white rounded-sm p-2 ${
                            checked ? ' border-primary-500 ' : ' border-white '
                          }`}
                        >
                          {item}
                          {item !== 'Any' && '+'}
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

      {/* <Controller
        key={c}
        name='homeType'
        control={control}
        render={({ field: { onChange, value } }) => (
          <label key={c}>
            {console.log('value', value)}
            <input
              type='checkbox'
              onChange={onChange}
              value={value}
              checked={value && value.includes(c)}
            />
            {c}
          </label>
        )}
      /> */}

      <MenuItem title='Home Type'>
        <fieldset style={{ float: 'left' }}>
          <legend>With the same name</legend>
          {filterDefaultValues.homeType.map((c) => (
            <label key={c}>
              <input type='checkbox' value={c} {...register('homeType')} />
              {c}
            </label>
          ))}
        </fieldset>
      </MenuItem>
      <button type='button' className='ml-auto text-primary-600'>
        <FilterIcon className='w-5 h-5 lg:hidden' />
      </button>
      {Object.keys(dirtyFields).length > 0 && (
        <button type='button' onClick={() => reset()}>
          reset
        </button>
      )}
      {/**/}
    </div>
  )
}

export default SearchHomesFilter
