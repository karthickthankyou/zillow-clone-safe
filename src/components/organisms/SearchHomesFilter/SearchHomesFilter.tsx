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
} from './filterUtils'

const SearchHomesFilter = () => {
  const {
    watch,
    control,
    formState: { dirtyFields },
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
        {Object.keys(dirtyFields).length > 0 ? (
          <ResetButton reset={reset} />
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
          <PopoverMenu className='hidden md:block'>
            <FilterButtonWithBadge
              showBadge={Boolean(dirtyFields.yearBuilt)}
              title='Year builts'
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
          <PopoverMenu className='hidden md:block'>
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
      <div className='flex items-center ml-auto space-x-2'>
        {Object.keys(dirtyFields).length > 0 && <ResetButton reset={reset} />}
        <FilterButton setShowSidebar={setShowSidebar} />
      </div>
    </div>
  )
}

export default SearchHomesFilter
