import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sidebar2 from './Sidebar'

export default {
  title: 'src/components/organisms/Sidebar2',
  component: Sidebar2,
} as ComponentMeta<typeof Sidebar2>

const Template: ComponentStory<typeof Sidebar2> = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        type='button'
        className='block w-full text-right'
        onClick={() => setOpen((state) => !state)}
      >
        Open
      </button>
      <Sidebar2 open={open} setOpen={setOpen}>
        <div className='h-full p-6 italic '>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
          <div>Any children go here.</div>
        </div>
      </Sidebar2>
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
