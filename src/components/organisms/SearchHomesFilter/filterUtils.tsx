import SliderMui from 'src/components/molecules/SliderMui'

import Autocomplete from 'src/components/molecules/Autocomplete'
import { RadioGroup } from '@headlessui/react'
import { PopoverButton } from 'src/components/molecules/PopoverMenuItem'
import { addDollar, shortenNumber } from 'src/lib/util'
import { FilterIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  map,
  Subject,
  tap,
  delay,
} from 'rxjs'
import { useAppDispatch, useAppSelector } from 'src/store'
import { setHomesFilter } from 'src/store/home/homeSlice'
import {
  selectMapSearchOptions,
  MapSlice,
  setViewport,
  setSearchText,
} from 'src/store/map/mapSlice'
import { useSearchPlaces } from 'src/store/map/mapHooks'
import { NotificationType } from 'src/types'

const homeTypes = [
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
].sort() as (
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
)[]

export const filterDefaultValues = {
  price: [0, 10_000_000] as [number, number],
  yearBuilt: [1900, 2020] as [number, number],
  sqft: [0, 10_000] as [number, number],
  beds: 'Any' as '1' | '2' | '3' | '4' | '5' | 'Any',
  bath: 'Any' as '1' | '2' | '3' | '4' | '5' | 'Any',
  homeType: homeTypes,
}

export const FilterButtonWithBadge = ({
  showBadge = false,
  title,
}: {
  showBadge: boolean
  title: string
}) => (
  <PopoverButton className='relative'>
    <>
      {showBadge ? (
        <div className='absolute top-0 w-2 h-2 rounded-full left-full bg-red-500/50' />
      ) : null}
      {title}
    </>
  </PopoverButton>
)

export const FilterPrice = ({
  value,
  onChange,
  className = 'px-4 mt-10',
}: any) => (
  <div>
    <div className='font-semibold'>Price range</div>
    <SliderMui
      step={10_000}
      onChange={onChange}
      value={value}
      initialData={filterDefaultValues.price}
      className={`${className}`}
      labelFormat={(sliderValue) => `${addDollar(shortenNumber(sliderValue))}`}
    />
  </div>
)
export const FilterYear = ({
  value,
  onChange,
  className = 'px-4 mt-10',
}: any) => (
  <div>
    <div className='font-semibold'>Year built</div>
    <SliderMui
      onChange={onChange}
      value={value}
      initialData={filterDefaultValues.yearBuilt}
      step={10}
      className={`${className}`}
    />
  </div>
)
export const FilterSqft = ({
  value,
  onChange,
  className = 'px-4 mt-10',
}: any) => (
  <div>
    <div className='font-semibold'>Sqft</div>
    <SliderMui
      onChange={onChange}
      value={value}
      initialData={filterDefaultValues.sqft}
      step={10}
      className={`${className}`}
    />
  </div>
)

export const FilterBeds = ({ value, onChange }: any) => (
  <RadioGroup value={value} onChange={onChange} className='space-y-2 '>
    <RadioGroup.Label className='font-semibold'>Bedrooms</RadioGroup.Label>
    <div className='flex gap-3'>
      {['1', '2', '3', '4', '5', 'Any'].map((item) => (
        <RadioGroup.Option key={item} value={`${item}`}>
          {({ checked }) => (
            <span
              className={`flex items-center justify-center w-10 h-10 bg-white border rounded-sm ${
                checked
                  ? ' border-primary-600 font-bold shadow-sm text-primary-600'
                  : ' bg-gray-50 shadow-inner text-gray-600 '
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
)

export const FilterBath = ({ value, onChange }: any) => (
  <RadioGroup value={value} onChange={onChange} className='space-y-2'>
    <RadioGroup.Label className='font-semibold'>Bathrooms</RadioGroup.Label>
    <div className='flex gap-3 my-2'>
      {['1', '2', '3', '4', '5', 'Any'].map((item) => (
        <RadioGroup.Option key={item} value={`${item}`}>
          {({ checked }) => (
            <span
              className={`flex items-center justify-center w-10 h-10 bg-white border rounded-sm ${
                checked
                  ? ' border-primary-600 font-bold shadow-sm text-primary-600'
                  : ' bg-gray-50 shadow-inner text-gray-600 '
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
)

export const FilterHomeType = ({ value, onChange }: any) => (
  <fieldset className='space-y-2'>
    <legend className='font-semibold'>Home type</legend>
    {filterDefaultValues.homeType.map((c) => (
      <label key={c} className='flex items-start whitespace-nowrap'>
        <input
          onChange={() => {
            const exists = value.includes(c)
            const newArr = exists
              ? value.filter((item: string) => item !== c)
              : [...value, c]
            onChange(newArr.sort())
          }}
          checked={value.includes(c)}
          type='checkbox'
          className='flex-shrink-0 w-4 h-4 mr-1'
          value={value[c]}
        />
        <div className='text-sm leading-tight select-none'>{c}</div>
      </label>
    ))}
  </fieldset>
)

export const ResetButton = ({ reset, className }: any) => (
  <button
    className={`px-2 py-1 text-sm border rounded border-black text-black ${className}`}
    type='button'
    onClick={() => reset()}
  >
    Reset
  </button>
)

export const FilterButton = ({ setShowSidebar }: any) => (
  <button
    type='button'
    className='text-black'
    onClick={() => setShowSidebar((state: any) => !state)}
  >
    <FilterIcon className='w-5 h-5 lg:hidden' />
  </button>
)

export const useDispatchHomeFilter = ({ filterData, dirtyFields }: any) => {
  const dispatch = useAppDispatch()

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
        tap((v) => console.log('setHomesFilter: ', v)),
        tap((v) => dispatch(setHomesFilter(v))),
        catchError(() => EMPTY)
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [dispatch, input$])

  useEffect(() => {
    // Add map bounds into the data as default parameters.

    input$.next({ data: filterData, dirtyData: dirtyFields })
  }, [dirtyFields, filterData, input$])
}

export const LocationSearch = ({
  onChange,
  className,
}: {
  onChange?: () => void
  className?: string
}) => {
  useSearchPlaces()
  const dispatch = useAppDispatch()
  const cityList = useAppSelector(selectMapSearchOptions)
  return (
    <Autocomplete<
      MapSlice['mapSearchOptions']['data'][number],
      false,
      false,
      false
    >
      options={cityList.data}
      getOptionLabel={(x) => x.displayName}
      onInputChange={(_, v) => dispatch(setSearchText(v))}
      loading={cityList.fetching}
      isOptionEqualToValue={(a, b) => a.displayName === b.displayName}
      onChange={(_, v) => {
        if (v) {
          const { latitude, longitude, zoom } = v
          dispatch(setViewport({ latitude, longitude, zoom }))
          if (onChange) onChange()
        }
      }}
      className={`rounded-lg ${className}`}
    />
  )
}

export const DirtyMarker = ({ isDirty }: { isDirty: boolean }) =>
  isDirty ? (
    <div className='absolute top-0 w-2 h-2 rounded-full left-full bg-red-500/50' />
  ) : null
