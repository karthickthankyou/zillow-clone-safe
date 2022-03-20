import { useState } from 'react'
import { Children } from 'src/types'
import CloseIcon from '@heroicons/react/outline/XIcon'
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import ShowHide from '../ShowHide/ShowHide'

export interface INotesFixedProps {
  children: Children
  title?: string
}

const NotesFixed = ({ title = 'Notes', children }: INotesFixedProps) => {
  const [open, setOpen] = useState(true)
  return (
    <ShowHide show={open}>
      <div className='fixed bottom-0 w-full max-w-sm p-3 mx-auto mb-4 bg-white shadow-lg'>
        <div className='flex items-center mb-2 text-lg font-bold'>
          <InformationCircleIcon className='w-6 h-6 mr-1' /> {title}
        </div>
        <div className='space-y-1 text-sm text-gray-800'>{children}</div>
        <button
          type='button'
          className='absolute top-0 right-0 p-1 bg-white'
          onClick={() => setOpen(false)}
        >
          <CloseIcon className='w-6 h-6 text-gray-600' />
        </button>
      </div>
    </ShowHide>
  )
}

export default NotesFixed
