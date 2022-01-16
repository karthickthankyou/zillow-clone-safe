import { Popover } from '@headlessui/react'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'
import ChevronUpIcon from '@heroicons/react/solid/ChevronUpIcon'

export interface IDropdownProps {
  options?: string[]
}

const optionsDefault = [
  'Featured',
  'Newest',
  'Price: High-Low',
  'Price: Low-High',
]

const Dropdown = ({ options = optionsDefault }: IDropdownProps) => (
  <Popover className='relative'>
    {({ open }) => (
      <>
        <Popover.Button>
          <div className='flex items-center justify-around w-full'>
            <div>Sort</div>
            <div>
              {open ? (
                <ChevronUpIcon className='w-5 h-5 ml-1' />
              ) : (
                <ChevronDownIcon className='w-5 h-5 ml-1' />
              )}
            </div>
          </div>
        </Popover.Button>
        <Popover.Overlay
          className={`${
            open ? 'opacity-30 fixed inset-0' : 'opacity-0'
          } bg-black`}
        />

        <Popover.Panel className='absolute right-0 z-10 text-right bg-white shadow-md'>
          {({ close }) => (
            <>
              {options.map((option) => (
                <button
                  key={option}
                  className='w-full px-3 py-1 text-right bg-white whitespace-nowrap hover:bg-gray-200'
                  type='button'
                  onClick={() => {
                    close()
                  }}
                >
                  {option}
                </button>
              ))}
            </>
          )}
        </Popover.Panel>
      </>
    )}
  </Popover>
)

export default Dropdown
