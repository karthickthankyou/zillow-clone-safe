import Autocomplete from 'src/components/molecules/Autocomplete'
import MenuItem from 'src/components/molecules/MenuItem'
import { useAppDispatch, useAppSelector } from 'src/store'
import {
  CitySlice,
  selectCityList,
  selectCityOptions,
  setCitySearchText,
  setSelectedCity,
} from 'src/store/cities/citySlice'

import SliderMui from 'src/components/molecules/SliderMui'
import {
  addDollar,
  shorten,
} from 'src/components/molecules/SliderMui/SliderMui'
// import { useFetchCities } from 'src/store/streams'

export interface ISearchHomesFilterProps {}

const SearchHomesFilter = () => {
  const dispatch = useAppDispatch()
  const cityOptions = useAppSelector(selectCityOptions)
  const cityList = useAppSelector(selectCityList)
  // useFetchCities()

  return (
    <div className='relative z-10 flex items-center gap-12 mb-2 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm'>
      <Autocomplete<CitySlice['selectedCity'], false, false, false>
        options={cityList.data}
        getOptionLabel={(x) => x.displayName}
        onInputChange={(_, v) => dispatch(setCitySearchText(v))}
        loading={cityList.fetching}
        onChange={(_, v) => {
          if (v) dispatch(setSelectedCity(v))
        }}
        className='rounded-lg'
      />

      <MenuItem title='Price'>
        <div>
          <div className='font-semibold'>Price range</div>

          <SliderMui
            onChange={(e, v) => console.log(v)}
            step={100}
            initialData={[0, 1000]}
            className='mt-12 '
            labelFormat={(sliderValue) => `${addDollar(shorten(sliderValue))}`}
          />
        </div>
      </MenuItem>
      {/* <MenuItem title='Year built'>
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

            {Object.keys(dirtyFieldsMemo).length > 2 && (
              <button
                type='button'
                onClick={() => dispatch({ type: 'RESET', payload: initialFilterState })}
              >
                reset
              </button>
            )} */}
    </div>
  )
}

export default SearchHomesFilter
