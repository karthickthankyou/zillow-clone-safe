import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export interface IAccordionProps {}

const Accordion = () => (
  <div className='w-full'>
    <div className='w-full max-w-md py-2 mx-auto bg-white'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>What is your refund policy?</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='p-3 text-sm text-gray-500'>
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions
              asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Do you offer technical support?</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='p-3 text-sm text-gray-500'>
              No.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Gender (1)</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='flex flex-col p-3 text-sm text-gray-500'>
              <label>
                <input type='checkbox' className='mr-2' />
                Men
              </label>
              <label className='mt-2'>
                <input type='checkbox' className='mr-2' />
                Women
              </label>
              <label className='mt-2'>
                <input type='checkbox' className='mr-2' />
                Unisex
              </label>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Size</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='grid grid-cols-3 gap-2 p-3 text-sm text-gray-500'>
              <button className='py-3 border rounded-sm' type='button'>
                XS
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                S
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                M
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                L
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                XL
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                2XL
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Size</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='grid grid-cols-3 gap-2 p-3 text-sm text-gray-500'>
              <button className='py-3 border rounded-sm' type='button'>
                XS
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                S
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                M
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                L
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                XL
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                2XL
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Size</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='grid grid-cols-3 gap-2 p-3 text-sm text-gray-500'>
              <button className='py-3 border rounded-sm' type='button'>
                XS
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                S
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                M
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                L
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                XL
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                2XL
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Size</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='grid grid-cols-3 gap-2 p-3 text-sm text-gray-500'>
              <button className='py-3 border rounded-sm' type='button'>
                XS
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                S
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                M
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                L
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                XL
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                2XL
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full py-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Size</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='grid grid-cols-3 gap-2 py-3 text-sm text-gray-500'>
              <button className='py-3 border rounded-sm' type='button'>
                XS
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                S
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                M
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                L
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                XL
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                2XL
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex justify-between w-full p-3 text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <span>Size</span>
              <ChevronUpIcon
                className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='grid grid-cols-3 gap-2 p-3 text-sm text-gray-500'>
              <button className='py-3 border rounded-sm' type='button'>
                XS
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                S
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                M
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                L
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                XL
              </button>
              <button className='py-3 border rounded-sm' type='button'>
                2XL
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  </div>
)

export default Accordion
