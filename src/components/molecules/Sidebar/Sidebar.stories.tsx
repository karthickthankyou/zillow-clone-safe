import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sidebar from './Sidebar'

export default {
  title: 'molecules/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const SomeContent = () => (
  <div className='max-w-xs mb-24'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa excepturi,
    ullam praesentium alias hic totam debitis nam accusamus dolorum sunt! Earum
    dolorem unde distinctio sapiente vitae aliquid accusantium ipsa quidem ipsum
    provident. Necessitatibus, aut sint.
  </div>
)

const Template: ComponentStory<typeof Sidebar> = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        type='button'
        className='block w-full text-right'
        onClick={() => setOpen((state) => !state)}
      >
        Open sidebar
      </button>
      <Sidebar open={open} setOpen={setOpen}>
        <div className='flex items-center justify-center h-screen p-6 italic rounded outline-gray-200 outline-dashed'>
          <div>Any children go here.</div>
        </div>
      </Sidebar>
    </div>
  )
}
const ScrollableBodyTemplate: ComponentStory<typeof Sidebar> = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        type='button'
        className='block w-full text-right'
        onClick={() => setOpen((state) => !state)}
      >
        Open sidebar
      </button>
      <Sidebar open={open} setOpen={setOpen}>
        <Sidebar.Body>
          <SomeContent />
          <SomeContent />
          <SomeContent />
        </Sidebar.Body>
      </Sidebar>
    </div>
  )
}
const WithHeaderAndFooterTemplate: ComponentStory<typeof Sidebar> = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        type='button'
        className='block w-full text-right'
        onClick={() => setOpen((state) => !state)}
      >
        Open sidebar
      </button>
      <Sidebar open={open} setOpen={setOpen}>
        <Sidebar.Header setOpen={setOpen}>Sample header</Sidebar.Header>
        <Sidebar.Body>
          <SomeContent />
          <SomeContent />
          <SomeContent />
        </Sidebar.Body>

        <Sidebar.Footer>Sample footer</Sidebar.Footer>
      </Sidebar>
    </div>
  )
}

export const Primary = Template.bind({})
export const ScrollableBody = ScrollableBodyTemplate.bind({})
export const WithFixedHeaderAndFooter = WithHeaderAndFooterTemplate.bind({})
