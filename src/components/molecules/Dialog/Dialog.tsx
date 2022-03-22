import { Dialog, Transition } from '@headlessui/react'

import { Dispatch, Fragment, ReactElement, SetStateAction } from 'react'

import XIcon from '@heroicons/react/outline/XIcon'

interface IMyDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactElement | ReactElement[]
  className?: string
}

const MyDialog = ({ open, setOpen, children, className }: IMyDialogProps) => (
  <Transition appear show={open} as={Fragment}>
    <Dialog
      as='div'
      className={`fixed inset-0 z-10 overflow-y-auto `}
      onClose={() => setOpen(false)}
    >
      <div className='relative min-h-screen px-4 text-center'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black/20' />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className='inline-block h-screen align-middle' aria-hidden='true'>
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div
            className={`${className} inline-block w-full p-6 overflow-scroll text-left align-middle transition-all transform bg-white rounded-sm shadow-xl `}
          >
            <button
              type='button'
              className='absolute top-0 right-0 flex items-center justify-center w-8 h-8'
              onClick={() => setOpen(false)}
            >
              <XIcon className='p-2' />
            </button>
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)

export default MyDialog
const { Title } = Dialog
export { Title }
