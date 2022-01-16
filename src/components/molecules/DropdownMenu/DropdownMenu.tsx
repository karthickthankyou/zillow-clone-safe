import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Example = () => (
  <Menu as='div' className='relative inline-block text-left'>
    <Menu.Button className='inline-flex justify-center w-full py-2 text-sm rounded-md'>
      Options
      <ChevronDownIcon
        className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
        aria-hidden='true'
      />
    </Menu.Button>

    <Menu.Items className='absolute z-10 w-56 mt-2 border border-white divide-y divide-gray-100 rounded-md shadow-lg bg-primary-50 ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='px-1 py-1 '>
        <label htmlFor='checktest'>
          <input
            type='checkbox'
            id='checktest'
            className='text-white bg-violet-500'
            tabIndex={0}
          />
          Hello
        </label>
        <Menu.Item>
          {({ active }) => (
            <input
              type='checkbox'
              className={`${
                active ? 'bg-violet-500 text-white' : 'text-gray-900'
              } group flex  items-center w-full px-2 py-2 text-sm`}
            />
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <input
              type='checkbox'
              className={`${
                active ? 'bg-violet-500 text-white' : 'text-gray-900'
              } group flex  items-center w-full px-2 py-2 text-sm`}
            />
          )}
        </Menu.Item>
      </div>
      <div className='px-1 py-1'>
        <Menu.Item>
          {({ active }) => (
            <button
              type='button'
              className={`${
                active ? 'bg-violet-500 text-white' : 'text-gray-900'
              } group flex  items-center w-full px-2 py-2 text-sm`}
            >
              Archive
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              type='button'
              className={`${
                active ? 'bg-violet-500 text-white' : 'text-gray-900'
              } group flex  items-center w-full px-2 py-2 text-sm`}
            >
              Move
            </button>
          )}
        </Menu.Item>
      </div>
      <div className='px-1 py-1'>
        <Menu.Item>
          {({ active }) => (
            <button
              type='button'
              className={`${
                active ? 'bg-violet-500 text-white' : 'text-gray-900'
              } group flex  items-center w-full px-2 py-2 text-sm`}
            >
              Delete
            </button>
          )}
        </Menu.Item>
      </div>
    </Menu.Items>
  </Menu>
)

export default Example
