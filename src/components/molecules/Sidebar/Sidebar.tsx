/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, ReactElement, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export interface ISidebarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: (string | ReactElement | null) | (string | ReactElement)[]
  className?: string
}

const Header = ({
  children,
  setOpen,
}: Partial<ISidebarProps, 'children' | 'setOpen'>) => (
  <div className='flex items-center p-2 border-b'>
    <div>{children}</div>
    <button
      type='button'
      className='ml-auto text-gray-500 rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
      onClick={() => setOpen(false)}
    >
      <XIcon className='w-6 h-6' aria-hidden='true' />
    </button>
  </div>
)

const Footer = ({ children }: Pick<ISidebarProps, 'children'>) => (
  <div className='p-2 border-t'>{children}</div>
)

const Body = ({ children }: Pick<ISidebarProps, 'children'>) => (
  <div className='flex flex-col flex-grow p-2 pb-12 overflow-y-scroll '>
    {children}
  </div>
)

const Sidebar = ({ open, setOpen, children }: ISidebarProps) => (
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
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm' />
        </Transition.Child>

        <div className='fixed inset-y-0 right-0 flex max-w-full bg-white'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration-150'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-100'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='flex flex-col w-screen max-w-md p-2'>
              {children}
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)

Sidebar.Header = Header
Sidebar.Body = Body
Sidebar.Footer = Footer

export default Sidebar
