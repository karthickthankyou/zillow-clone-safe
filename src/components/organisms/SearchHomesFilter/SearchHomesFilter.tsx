import PopoverMenu, {
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Sidebar from 'src/components/molecules/Sidebar'
import {
  filterDefaultValues,
  FilterPrice,
  FilterBath,
  FilterBeds,
  FilterButtonWithBadge,
  FilterSqft,
  FilterYear,
  FilterHomeType,
  ResetButton,
  FilterButton,
  useDispatchHomeFilter,
  LocationSearch,
  DirtyMarker,
} from './filterUtils'

const SearchHomesFilter = () => {
  const {
    watch,
    control,
    formState: { dirtyFields, isDirty },
    reset,
  } = useForm({
    defaultValues: filterDefaultValues,
  })

  const filterData = watch()
  useDispatchHomeFilter({ filterData, dirtyFields })

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='relative flex items-center gap-12 mb-2 bg-white '>
      {/**
       * Absolutely positioned sidebar
       */}
      <Sidebar
        open={showSidebar}
        setOpen={setShowSidebar}
        className='space-y-6'
      >
        <Sidebar.Header setOpen={setShowSidebar}>Filter</Sidebar.Header>
        <Sidebar.Body>
          <Controller
            name='homeType'
            control={control}
            render={({ field: { onChange, value } }) => (
              <FilterHomeType value={value} onChange={onChange} />
            )}
          />
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
          <Controller
            name='price'
            control={control}
            render={({ field: { onChange, value } }) => (
              <FilterPrice
                value={value}
                onChange={onChange}
                className='px-6 mt-10'
              />
            )}
          />
          <Controller
            name='yearBuilt'
            control={control}
            render={({ field: { onChange, value } }) => (
              <FilterYear
                value={value}
                onChange={onChange}
                className='px-6 mt-10'
              />
            )}
          />
          <Controller
            name='sqft'
            control={control}
            render={({ field: { onChange, value } }) => (
              <FilterSqft
                value={value}
                onChange={onChange}
                className='px-6 mt-10'
              />
            )}
          />
        </Sidebar.Body>
        {Object.keys(dirtyFields).length > 0 ? (
          <Sidebar.Footer>
            <ResetButton reset={reset} />
          </Sidebar.Footer>
        ) : null}
      </Sidebar>

      {/**
       * Main filters
       */}
      <LocationSearch />
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
              <div className='w-56'>
                <FilterPrice value={value} onChange={onChange} />
              </div>
            </PopoverPanel>
          </PopoverMenu>
        )}
      />
      <Controller
        name='yearBuilt'
        control={control}
        render={({ field: { onChange, value } }) => (
          <PopoverMenu className='hidden lg:block'>
            <FilterButtonWithBadge
              showBadge={Boolean(dirtyFields.yearBuilt)}
              title='Year built'
            />
            <PopoverPanel>
              <div className='w-56'>
                <FilterYear value={value} onChange={onChange} />
              </div>
            </PopoverPanel>
          </PopoverMenu>
        )}
      />
      <Controller
        name='sqft'
        control={control}
        render={({ field: { onChange, value } }) => (
          <PopoverMenu className='hidden lg:block'>
            <FilterButtonWithBadge
              showBadge={Boolean(dirtyFields.sqft)}
              title='Sqft'
            />
            <PopoverPanel>
              <div className='w-56'>
                <FilterSqft value={value} onChange={onChange} />
              </div>
            </PopoverPanel>
          </PopoverMenu>
        )}
      />

      <PopoverMenu className='hidden md:block'>
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

      <PopoverMenu className='hidden md:block'>
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
      <div className='flex items-center ml-auto space-x-2'>
        {isDirty && <ResetButton reset={reset} />}
        <div className='relative'>
          <DirtyMarker isDirty={isDirty} />
          <FilterButton setShowSidebar={setShowSidebar} />
        </div>
      </div>
    </div>
  )
}

export default SearchHomesFilter
