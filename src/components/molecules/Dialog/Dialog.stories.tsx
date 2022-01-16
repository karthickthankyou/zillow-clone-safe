import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dialog from './Dialog'

export default {
  title: 'molecules/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} setOpen={setOpen}>
      {children}
    </Dialog>
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
Primary.parameters = {}
