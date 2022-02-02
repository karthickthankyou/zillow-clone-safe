/* eslint-disable react/jsx-props-no-spreading */
import { RadioGroup } from '@headlessui/react'
import { ReactElement, useEffect, useMemo, useReducer, useState } from 'react'
import PopoverMenu from 'src/components/molecules/PopoverMenu'
import {
  PopoverButton,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenu/PopoverMenu'
import FilterIcon from '@heroicons/react/outline/FilterIcon'
import Mapbox from 'src/components/organisms/Mapbox'
import SliderMui from 'src/components/molecules/SliderMui'
import {
  addDollar,
  shorten,
} from 'src/components/molecules/SliderMui/SliderMui'
import Autocomplete from 'src/components/molecules/Autocomplete'
import {
  useSearchCitiesQuery,
  useGetHomeByIdQuery,
} from 'src/generated/graphql'
import isEqual from 'react-fast-compare'
import debounce from 'lodash.debounce'
import ProductListingResult from 'src/components/organisms/ProductListingResults/ProductListingResults'
import { MapLocation } from 'src/components/organisms/Mapbox/Mapbox'
import { NextSeo } from 'next-seo'

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

export interface FilterState {
  search: string
  location: MapLocation
  highlightedId?: number | null
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: string
  bath: string
  homeType: string[]
}

export type FilterAction =
  | { type: 'SET_SEARCH'; payload: FilterState['search'] }
  | { type: 'SET_LOCATION'; payload: FilterState['location'] }
  | { type: 'SET_YEARS'; payload: FilterState['yearBuilt'] }
  | { type: 'SET_PRICE'; payload: FilterState['price'] }
  | { type: 'SET_SQFT'; payload: FilterState['sqft'] }
  | { type: 'SET_BEDS'; payload: FilterState['beds'] }
  | { type: 'SET_BATH'; payload: FilterState['bath'] }
  | { type: 'SET_HOMETYPE'; payload: FilterState['homeType'] }
  | { type: 'SET_HIGHLIGHTED_ID'; payload: FilterState['highlightedId'] }
  | { type: 'RESET'; payload: FilterState }

const reducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_SEARCH': {
      return { ...state, search: action.payload }
    }
    case 'SET_LOCATION': {
      return { ...state, location: action.payload }
    }
    case 'SET_YEARS': {
      return { ...state, yearBuilt: action.payload }
    }
    case 'SET_PRICE': {
      return { ...state, price: action.payload }
    }
    case 'SET_SQFT': {
      return { ...state, sqft: action.payload }
    }
    case 'SET_BEDS': {
      return { ...state, beds: action.payload }
    }
    case 'SET_BATH': {
      return { ...state, bath: action.payload }
    }
    case 'SET_HOMETYPE': {
      return { ...state, homeType: action.payload }
    }
    case 'SET_HIGHLIGHTED_ID': {
      return { ...state, highlightedId: action.payload }
    }
    case 'RESET': {
      return {
        // Use all the initial properties to reset the state.
        ...action.payload,
        // But, we dont have to reset the search and location.
        search: state.search,
        location: state.location,
      }
    }
    default:
      return state
  }
}
export interface IProductListingPageProps {
  search: string
  initiaLatitude: number
  initialLongitude: number
}

const getDirtyFields = (
  initialState: FilterState,
  currentState: FilterState
) => {
  const dirtyItems: Partial<FilterState> = {}
  const defaultDirtyItems = ['search', 'location']
  Object.keys(initialState).forEach((item) => {
    const isDirty = !isEqual(initialState[item], currentState[item])
    const isDefault = defaultDirtyItems.includes(item)
    if (isDirty || isDefault) {
      dirtyItems[item] = currentState[item]
    }
  })
  return dirtyItems
}

const debounced = debounce((filterState, initialFilterState, save) => {
  // getDirtyFields(initialFilterState, filterState)
  const dirty = getDirtyFields(initialFilterState, filterState)
  save(dirty)
}, 600)

const ProductListingPage = ({
  search,
  initiaLatitude,
  initialLongitude,
}: IProductListingPageProps) => {
  const initialFilterState: FilterState = useMemo(
    () => ({
      search,
      location: {
        latitude: initiaLatitude,
        longitude: initialLongitude,
        width: 100,
        height: 100,
        zoom: 12,
        ne: [0, 0],
        sw: [0, 0],
      },
      yearBuilt: [1800, 2022],
      price: [0, 10_000_000],
      sqft: [0, 20_000],
      beds: 'Any',
      bath: 'Any',
      homeType: [],
      highlightedId: null,
    }),
    [initiaLatitude, initialLongitude, search]
  )

  const [filterState, dispatch] = useReducer(reducer, initialFilterState)
  const [dirty, setDirty] = useState<Partial<FilterState>>({})

  useEffect(() => {
    debounced(filterState, initialFilterState, setDirty)
  }, [filterState, initialFilterState])

  const [inputValue, setInputValue] = useState(() => search)

  const [{ data, fetching }] = useSearchCitiesQuery({
    variables: { search: inputValue },
  })

  const [
    { data: highlightedHome, fetching: highlightedHomeFetching },
    getHighlightedHome,
  ] = useGetHomeByIdQuery({
    variables: { id: filterState.highlightedId || 0 },
    pause: !filterState.highlightedId,
  })

  useEffect(() => {
    console.log('Running getHighlightedHome', highlightedHome?.homes_by_pk)

    getHighlightedHome()
  }, [filterState.highlightedId, getHighlightedHome, highlightedHome])

  const options = data?.search_cities.map((item) => item.displayName) || []

  const onOptionSelect = (e: any, v: any) => {
    if (v) {
      const latSelected = data?.search_cities.filter(
        (d) => d.displayName === v
      )[0]?.lat
      const lngSelected = data?.search_cities.filter(
        (d) => d.displayName === v
      )[0]?.lng

      dispatch({ type: 'SET_SEARCH', payload: v })
      dispatch({
        type: 'SET_LOCATION',
        payload: {
          latitude: latSelected,
          longitude: lngSelected,
          zoom: 12,
          height: 100,
          width: 100,
          ne: [0, 0],
          sw: [0, 0],
        },
      })
    }
  }

  const dirtyFieldsMemo = useMemo(() => dirty, [dirty])
  return (
    <div>
      <NextSeo
        title={`${filterState.search} - Zillow refactor project.`}
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <div className='container mx-auto'>
        <div className='relative z-10 flex items-center gap-12 py-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm'>
          <Autocomplete
            options={options}
            onInputChange={(_e, v) => setInputValue(v)}
            value={filterState.search}
            loading={fetching}
            onChange={onOptionSelect}
            className='rounded-lg'
          />

          <MenuItem title='Price'>
            <div>
              <div className='font-semibold'>Price range</div>

              <SliderMui
                onChange={(e, v) =>
                  dispatch({
                    type: 'SET_PRICE',
                    payload: v as [number, number],
                  })
                }
                value={filterState.price}
                step={10_000}
                initialData={initialFilterState.price}
                className='mt-12 '
                labelFormat={(sliderValue) =>
                  `${addDollar(shorten(sliderValue))}`
                }
              />
            </div>
          </MenuItem>
          <MenuItem title='Year built'>
            <div>
              <div className='font-semibold'>Price range</div>

              <SliderMui
                onChange={(e, v) =>
                  dispatch({
                    type: 'SET_YEARS',
                    payload: v as [number, number],
                  })
                }
                value={filterState.yearBuilt}
                initialData={initialFilterState.yearBuilt}
                step={10}
                className='mt-12 '
              />
            </div>
          </MenuItem>
          <MenuItem title='Sqft'>
            <div>
              <div className='font-semibold'>Square feet</div>

              <SliderMui
                onChange={(e, v) =>
                  dispatch({ type: 'SET_SQFT', payload: v as [number, number] })
                }
                value={filterState.sqft}
                initialData={initialFilterState.sqft}
                step={1_000}
                className='mt-12 '
                labelFormat={(sliderValue) => `${sliderValue} sqft`}
              />
            </div>
          </MenuItem>

          <MenuItem title='Beds & Bath'>
            <>
              <RadioGroup
                value={filterState.beds}
                onChange={(v) => dispatch({ type: 'SET_BEDS', payload: v })}
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
                          {item}+
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>

              <RadioGroup
                value={filterState.bath}
                onChange={(v) => dispatch({ type: 'SET_BATH', payload: v })}
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
                          {item}+
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </>
          </MenuItem>
          <MenuItem title='Home Type'>
            <fieldset style={{ float: 'left' }}>
              <legend>With the same name</legend>
              {['rainbow', 'sdf', 'sdfs'].map((c) => (
                <label key={c}>
                  <input type='checkbox' value={c} />
                  {c}
                </label>
              ))}
            </fieldset>
          </MenuItem>

          <button type='button' className='ml-auto text-primary-600'>
            <FilterIcon className='w-5 h-5 lg:hidden' />
          </button>
          {/* Reset button displays if the dirty fields contain more than 2 keys(search and location <- Default keys for filter.) */}
          {Object.keys(dirtyFieldsMemo).length > 2 && (
            <button
              type='button'
              onClick={() =>
                dispatch({ type: 'RESET', payload: initialFilterState })
              }
            >
              reset
            </button>
          )}
        </div>
        <div className='flex gap-5'>
          <div className='flex-1 hidden lg:block'>
            <div className='sticky top-0 col-span-1 overflow-hidden rounded'>
              <Mapbox
                highlightedHome={{
                  data: highlightedHome?.homes_by_pk,
                  fetching: highlightedHomeFetching,
                }}
                dispatch={dispatch}
                // Contains lat lng and zoom

                viewport={filterState.location}
                setLocation={(location) => {
                  dispatch({
                    type: 'SET_LOCATION',
                    payload: location,
                  })
                }}
                className='h-screen'
              />
            </div>
          </div>
          <div className='flex-1'>
            <ProductListingResult
              dirtyFields={dirtyFieldsMemo}
              dispatch={dispatch}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage
