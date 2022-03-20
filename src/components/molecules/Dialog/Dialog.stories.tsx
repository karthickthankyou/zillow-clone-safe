import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrapper } from 'src/components/atoms/utils'
import Dialog from './Dialog'
import NotesFixed from '../NotesFixed'

export default {
  title: 'molecules/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Wrapper>
        <Dialog open={open} setOpen={setOpen}>
          <div className='max-w-md'>
            <p className='mt-2 text-sm text-gray-500'>
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
            <p className='mt-2 text-sm text-gray-500'>
              Click away to dismiss this dialog.
            </p>
            <div className='mt-4'>
              <button
                type='button'
                onClick={() => setOpen(false)}
                className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-sm hover:bg-gray-900'
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </Dialog>
        <button
          type='button'
          className='px-2 py-0.5 border border-black rounded'
          onClick={() => setOpen(true)}
        >
          Open dialog
        </button>
      </Wrapper>
      <NotesFixed>
        <div>
          Both the close button <em>(x)</em> and <em>Got it, thanks!</em>{' '}
          buttons work to close the dialog.
        </div>
      </NotesFixed>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  open: true,
  children: (
    <>
      <p className='mt-2 text-sm text-gray-500'>
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>

      <p className='mt-2 text-sm text-gray-500'>
        Click away to dismiss this dialog.
      </p>

      <div className='mt-4'>
        <button
          type='button'
          className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-sm hover:bg-gray-900'
        >
          Got it, thanks!
        </button>
      </div>
    </>
  ),
}
