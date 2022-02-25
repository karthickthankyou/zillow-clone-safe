/* eslint-disable react/jsx-props-no-spreading */

import Autocomplete from 'src/components/molecules/Autocomplete'
import { useAppDispatch, useAppSelector } from 'src/store'
import {
  CitySlice,
  selectCityList,
  setCitySearchText,
  setHomesFilter,
  setMapLocation,
} from 'src/store/cities/citySlice'
import PopoverMenu, {
  PopoverButton,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'

import { useEffect, useState } from 'react'
import SliderMui from 'src/components/molecules/SliderMui'

import { useForm, Controller } from 'react-hook-form'
import { RadioGroup } from '@headlessui/react'
import { FilterIcon } from '@heroicons/react/outline'
import { catchError, debounceTime, EMPTY, map, Subject, tap } from 'rxjs'
import { addDollar, shortenNumber } from 'src/lib/util'
import Sidebar from 'src/components/molecules/Sidebar'

export interface ISearchHomesFilterProps {}

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

export const FilterPrice = ({ value, onChange }: any) => (
  <div>
    <div className='font-semibold'>Price range</div>
    <SliderMui
      step={10_000}
      onChange={onChange}
      value={value}
      initialData={filterDefaultValues.price}
      className='mt-12 '
      labelFormat={(sliderValue) => `${addDollar(shortenNumber(sliderValue))}`}
    />
  </div>
)
export const FilterYear = ({ value, onChange }: any) => (
  <div>
    <div className='font-semibold'>Year built</div>
    <SliderMui
      onChange={onChange}
      value={value}
      initialData={filterDefaultValues.yearBuilt}
      step={10}
      className='mt-12 '
    />
  </div>
)
export const FilterSqft = ({ value, onChange }: any) => (
  <div>
    <div className='font-semibold'>Sqft</div>
    <SliderMui
      onChange={onChange}
      value={value}
      initialData={filterDefaultValues.sqft}
      step={10}
      className='mt-12 '
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

const FilterHomeType = ({ value, onChange }: any) => (
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

const SearchHomesFilter = () => {
  const dispatch = useAppDispatch()
  const [showSidebar, setShowSidebar] = useState(false)
  const cityList = useAppSelector(selectCityList)

  const {
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
    // Add map bounds into the data as default parameters.
    input$.next({ data: filterData, dirtyData: dirtyFields })
  }, [dirtyFields, filterData, input$])

  return (
    <div className='relative flex items-center gap-12 mb-2 bg-white '>
      <Sidebar open={showSidebar} setOpen={setShowSidebar}>
        <div>Filters</div>

        <Controller
          name='homeType'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FilterHomeType value={value} onChange={onChange} />
          )}
        />
        <Controller
          name='price'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FilterPrice value={value} onChange={onChange} />
          )}
        />
        <Controller
          name='yearBuilt'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FilterYear value={value} onChange={onChange} />
          )}
        />
        <Controller
          name='sqft'
          control={control}
          render={({ field: { onChange, value } }) => (
            <FilterSqft value={value} onChange={onChange} />
          )}
        />
      </Sidebar>
      <Autocomplete<CitySlice['cityList']['data'][number], false, false, false>
        options={cityList.data}
        getOptionLabel={(x) => x.displayName}
        onInputChange={(_, v) => dispatch(setCitySearchText(v))}
        loading={cityList.fetching}
        isOptionEqualToValue={(a, b) => a.displayName === b.displayName}
        onChange={(_, v) => {
          if (v)
            dispatch(
              setMapLocation({ latitude: v.latitude, longitude: v.longitude })
            )
        }}
        className='rounded-lg'
      />
      <Controller
        name='price'
        control={control}
        render={({ field: { onChange, value } }) => (
          <PopoverMenu className='hidden md:block'>
            <FilterButtonWithBadge
              showBadge={Boolean(dirtyFields.price)}
              title='Price'
            />
            <PopoverPanel>
              <FilterPrice value={value} onChange={onChange} />
            </PopoverPanel>
          </PopoverMenu>
        )}
      />
      <Controller
        name='yearBuilt'
        control={control}
        render={({ field: { onChange, value } }) => (
          <PopoverMenu className='hidden md:block'>
            <FilterButtonWithBadge
              showBadge={Boolean(dirtyFields.yearBuilt)}
              title='Year builts'
            />

            <PopoverPanel>
              <FilterYear value={value} onChange={onChange} />
            </PopoverPanel>
          </PopoverMenu>
        )}
      />
      <Controller
        name='sqft'
        control={control}
        render={({ field: { onChange, value } }) => (
          <PopoverMenu className='hidden md:block'>
            <FilterButtonWithBadge
              showBadge={Boolean(dirtyFields.sqft)}
              title='Sqft'
            />
            <PopoverPanel>
              <FilterSqft value={value} onChange={onChange} />
            </PopoverPanel>
          </PopoverMenu>
        )}
      />

      <PopoverMenu className='hidden lg:block'>
        <FilterButtonWithBadge
          showBadge={Boolean(dirtyFields.bath || dirtyFields.beds)}
          title='Beds & Bath'
        />
        <PopoverPanel>
          <div className='space-y-4'>
            <Controller
              name='beds'
              control={control}
              render={({ field: { onChange, value } }) => (
                <FilterBeds value={value} onChange={onChange} />
              )}
            />
            <Controller
              name='bath'
              control={control}
              render={({ field: { onChange, value } }) => (
                <FilterBath value={value} onChange={onChange} />
              )}
            />
          </div>
        </PopoverPanel>
      </PopoverMenu>

      <PopoverMenu>
        <FilterButtonWithBadge
          showBadge={Boolean(dirtyFields.homeType)}
          title='Home type'
        />

        <PopoverPanel>
          <Controller
            name='homeType'
            control={control}
            render={({ field: { onChange, value } }) => (
              <FilterHomeType value={value} onChange={onChange} />
            )}
          />
        </PopoverPanel>
      </PopoverMenu>
      <div className='flex items-center gap-2 ml-auto space-x-2'>
        {Object.keys(dirtyFields).length > 0 && (
          <button
            className='px-2 py-1 text-sm border rounded-full border-primary-600 text-primary-600'
            type='button'
            onClick={() => reset()}
          >
            Reset
          </button>
        )}
        <button
          type='button'
          className=' text-primary-600'
          onClick={() => setShowSidebar((state) => !state)}
        >
          <FilterIcon className='w-5 h-5 lg:hidden' />
        </button>
      </div>
    </div>
  )
}

export default SearchHomesFilter
