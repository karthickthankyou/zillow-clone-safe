/* eslint-disable react/jsx-props-no-spreading */
import { RadioGroup } from '@headlessui/react'
import Select from 'react-select'
import { ReactElement } from 'react'
import FluentSlider from 'src/components/molecules/FluentSlider'
import PopoverMenu from 'src/components/molecules/PopoverMenu'
import {
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenu/PopoverMenu'
import FilterIcon from '@heroicons/react/outline/FilterIcon'
import Mapbox from 'src/components/organisms/Mapbox'
import PropertyCard from 'src/components/organisms/PropertyCard'
import {
  Controller,
  FieldValues,
  useForm,
  UseFormRegister,
} from 'react-hook-form'
import SliderRadix from 'src/components/molecules/SliderRadix'
import { DropdownIndicator } from 'src/components/molecules/SearchBox/SearchBox'

export interface IProductListingPageProps {
  city: string
}

const MenuYearbuilt = ({
  className,
  register,
}: {
  register: UseFormRegister<FieldValues>
  className?: string
}) => (
  <PopoverMenu className={className}>
    <PopoverButton>
      Year built <span aria-hidden>▾</span>
    </PopoverButton>
    {/* <PopoverOverlay /> */}
    <PopoverPanel className='space-y-2 text-gray-600'>
      <FluentSlider
        {...register('yearBuilt')}
        label='Year built range'
        max={2022}
        min={1900}
      />
    </PopoverPanel>
  </PopoverMenu>
)

const MenuSqft = ({
  className,
  register,
}: {
  register: UseFormRegister<FieldValues>
  className?: string
}) => (
  <PopoverMenu className={className}>
    <PopoverButton>
      Sqft <span aria-hidden>▾</span>
    </PopoverButton>
    {/* <PopoverOverlay /> */}
    <PopoverPanel className='space-y-2 text-gray-600'>
      <FluentSlider {...register('sqft')} label='Sqft range' max={20_000} />
    </PopoverPanel>
  </PopoverMenu>
)

const MenuHomeType = ({
  className,
  register,
}: {
  register: UseFormRegister<FieldValues>
  className?: string
}) => (
  <PopoverMenu className={className}>
    <PopoverButton>
      Home type <span aria-hidden>▾</span>
    </PopoverButton>
    {/* <PopoverOverlay /> */}
    <PopoverPanel className='mr-12 space-y-2 text-gray-600'>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Houses
      </label>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Townhomes
      </label>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Multifamily
      </label>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Condos
      </label>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Lots/Land
      </label>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Apartments
      </label>
      <label className='flex items-center select-none'>
        <input type='checkbox' className='mr-1' />
        Manufactured
      </label>
    </PopoverPanel>
  </PopoverMenu>
)

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
    <PopoverOverlay />
    <PopoverPanel className='space-y-2 text-gray-600'>{children}</PopoverPanel>
  </PopoverMenu>
)

interface FilterState {
  search: string
  yearBuilt: [number, number]
  price: [number, number]
  sqft: [number, number]
  beds: number
  bath: number
  homeType: string[]
  loading: boolean
  error: Error | null
}

const initialFilterState: FilterState = {
  search: '',
  yearBuilt: [1800, 2022],
  price: [0, 10_000_000],
  sqft: [0, 20_000],
  beds: 5,
  bath: 5,
  homeType: [],
  loading: false,
  error: null,
}

const ProductListingPage = ({ city }: { city: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: initialFilterState,
  })

  const onSubmit = (data: FilterState) => console.log(data)

  console.log(watch(), dirtyFields)

  return (
    <div>
      <div className='container mx-auto'>
        <div className='sticky top-0 z-10 flex items-center gap-12 py-3 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm'>
          {/* <input type='text' className='w-64 px-2 py-3' placeholder='Search' /> */}
          {/* <SearchBox className='w-64 rounded-md' /> */}
          <button
            type='button'
            onClick={() => reset({ search: '' }, { keepDirty: false })}
          >
            reset
          </button>
          <Controller
            control={control}
            name='search'
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                isClearable
                isSearchable
                placeholder='Search...'
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                options={[
                  {
                    value: 'Apple Valley',
                    label: 'Apple Valley',
                  },
                  {
                    value: 'Atlanta',
                    label: 'Atlanta',
                  },
                  {
                    value: 'Bakersfield',
                    label: 'Bakersfield',
                  },
                ]}
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
              />
            )}
          />

          <MenuItem title='Price'>
            <Controller
              control={control}
              name='price'
              render={({ field: { onChange, onBlur, value } }) => (
                <div>
                  <div className='font-semibold'>Price range</div>
                  <div className='my-2 text-sm'>
                    ${JSON.stringify(value[0])} - ${JSON.stringify(value[1])}
                  </div>
                  <SliderRadix
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    max={20000}
                  />
                </div>
              )}
            />
          </MenuItem>
          <MenuItem title='Sqft'>
            <Controller
              control={control}
              name='sqft'
              render={({ field: { onChange, onBlur, value } }) => (
                <div>
                  <div className='font-semibold'>Price range</div>
                  <div className='my-2 text-sm'>
                    ${JSON.stringify(value[0])} - ${JSON.stringify(value[1])}
                  </div>
                  <SliderRadix
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    max={20000}
                  />
                </div>
              )}
            />
          </MenuItem>

          <MenuItem title='Beds & Bath'>
            <>
              <Controller
                control={control}
                name='beds'
                render={({ field: { onChange, onBlur, value } }) => (
                  <RadioGroup
                    value={value}
                    onChange={onChange}
                    className='space-y-2'
                  >
                    <RadioGroup.Label>Bedrooms</RadioGroup.Label>
                    <div className='flex gap-3'>
                      <RadioGroup.Option value='any'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            Any
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='1+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            1+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='2+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            2+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='3+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            3+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='4+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            4+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='5+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            5+
                          </span>
                        )}
                      </RadioGroup.Option>
                    </div>
                  </RadioGroup>
                )}
              />
              <Controller
                control={control}
                name='baths'
                render={({ field: { onChange, onBlur, value } }) => (
                  <RadioGroup
                    value={value}
                    onChange={onChange}
                    className='mt-4 space-y-2'
                  >
                    <RadioGroup.Label className='mt-4'>
                      Bathrooms
                    </RadioGroup.Label>
                    <div className='flex gap-3'>
                      <RadioGroup.Option value='1+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            1+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='2+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            2+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='3+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            3+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='4+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            4+
                          </span>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option value='5+'>
                        {({ checked }) => (
                          <span
                            className={
                              checked ? 'border border-primary-500 p-2' : 'p-2'
                            }
                          >
                            5+
                          </span>
                        )}
                      </RadioGroup.Option>
                    </div>
                  </RadioGroup>
                )}
              />
            </>
          </MenuItem>

          {/* <MenuPrice className='hidden sm:block' register={register} /> */}
          <MenuHomeType className='hidden sm:block' register={register} />

          <MenuSqft className='hidden lg:block' register={register} />
          <MenuYearbuilt className='hidden lg:block' register={register} />
          <button type='button' className='ml-auto text-primary-600'>
            <FilterIcon className='w-5 h-5 lg:hidden' register={register} />
          </button>
        </div>
        <div className='flex gap-5'>
          <div className='flex-1 hidden lg:block'>
            <div className='sticky top-0 col-span-1 overflow-hidden rounded'>
              <Mapbox
                latitude={0.4}
                longitude={109.3}
                zoom={12}
                markers={[
                  { latitude: 42.360081, longitude: -71.0583 },
                  { latitude: 42.360081, longitude: -71.0585 },
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
