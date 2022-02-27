/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, ReactElement, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'src/components/atoms/Link'
import { XIcon } from '@heroicons/react/outline'

export interface ISidebar2Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactElement | (ReactElement | null)[]
  className?: string
}

const Sidebar2 = ({ open, setOpen, children, className }: ISidebar2Props) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as='div'
      className='fixed inset-0 z-50 overflow-hidden'
      onClose={setOpen}
    >
      <div className='absolute inset-0 overflow-hidden'>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-150'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm' />
        </Transition.Child>

        <div className='fixed inset-y-0 right-0 flex max-w-full'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration-150'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-100'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='w-screen max-w-md'>
              <div className='flex items-center p-2 bg-white'>
                <Link
                  href='/'
                  className='absolute font-black text-primary-600 '
                >
                  {/* ZILLOW */}
                  <img
                    src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg'
                    className='w-full h-full'
                  />
                </Link>
                <button
                  type='button'
                  className='ml-auto text-gray-500 rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
                  onClick={() => setOpen(false)}
                >
                  <XIcon className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div
                className={`flex flex-col h-full p-2 pb-12 overflow-y-scroll bg-white shadow-xl ${className}`}
              >
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

export default Sidebar2
