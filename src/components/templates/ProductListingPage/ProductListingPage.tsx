import { RadioGroup } from '@headlessui/react'
import * as Slider from '@radix-ui/react-slider'
import { MenuItem } from '@reach/menu-button'
import { useState } from 'react'
import Dropdown from 'src/components/molecules/Dropdown'
import DropdownMenu from 'src/components/molecules/DropdownMenu'
import DropdownMenu2 from 'src/components/molecules/DropdownMenu2'
import FluentSlider from 'src/components/molecules/FluentSlider'
import PopoverMenu from 'src/components/molecules/PopoverMenu'
import {
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenu/PopoverMenu'
import Mapbox from 'src/components/organisms/Mapbox'
import PropertyCard from 'src/components/organisms/PropertyCard'

export interface IProductListingPageProps {}

const ProductListingPage = () => {
  const [plan, setPlan] = useState('any')
  const [baths, setBaths] = useState('any')
  return (
    <div>
      <div className='flex gap-3 py-3'>
        <input type='text' className='w-64 px-2 py-3' placeholder='Search' />

        <PopoverMenu>
          <PopoverButton>
            Home type <span aria-hidden>▾</span>
          </PopoverButton>
          {/* <PopoverOverlay /> */}
          <PopoverPanel className='mr-12 space-y-2 text-gray-600'>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Houses
            </label>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Townhomes
            </label>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Multifamily
            </label>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Condos
            </label>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Lots/Land
            </label>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Apartments
            </label>
            <label className='flex items-center block select-none'>
              <input type='checkbox' className='mr-1' />
              Manufactured
            </label>
          </PopoverPanel>
        </PopoverMenu>
        <PopoverMenu>
          <PopoverButton>
            Beds & Baths <span aria-hidden>▾</span>
          </PopoverButton>
          {/* <PopoverOverlay /> */}
          <PopoverPanel className='mr-12 space-y-2 text-gray-600'>
            <RadioGroup value={plan} onChange={setPlan} className='space-y-2'>
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
            <RadioGroup
              value={baths}
              onChange={setBaths}
              className='mt-4 space-y-2'
            >
              <RadioGroup.Label className='mt-4'>Bathrooms</RadioGroup.Label>
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
          </PopoverPanel>
        </PopoverMenu>
        <PopoverMenu>
          <PopoverButton>
            Beds & Baths <span aria-hidden>▾</span>
          </PopoverButton>
          {/* <PopoverOverlay /> */}
          <PopoverPanel className='mr-12 space-y-2 text-gray-600'>
            <Slider.Root
              defaultValue={[250, 750]}
              step={10}
              className='relative flex w-full h-2'
              minStepsBetweenThumbs={10}
            >
              <Slider.Track className='w-full h-2 '>
                <Slider.Range className='w-full h-full bg-white ' />
              </Slider.Track>
              <Slider.Thumb className='absolute w-6 h-6 rounded-full bg-primary-500' />
              <Slider.Thumb className='absolute w-6 h-6 rounded-full bg-primary-500' />
            </Slider.Root>
          </PopoverPanel>
        </PopoverMenu>
        <PopoverMenu>
          <PopoverButton>
            Beds & Baths <span aria-hidden>▾</span>
          </PopoverButton>
          {/* <PopoverOverlay /> */}
          <PopoverPanel position='right-0' className='space-y-2 text-gray-600'>
            <FluentSlider />
          </PopoverPanel>
        </PopoverMenu>
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
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage
