import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BorderRadius from './BorderRadius'

export default {
  title: '_foundations/BorderRadius',
  component: BorderRadius,
} as ComponentMeta<typeof BorderRadius>

const Template: ComponentStory<typeof BorderRadius> = (args) => (
  <div className='flex flex-col items-center justify-center p-12'>
    <div className='w-full max-w-md'>
      <h2 className='mt-6 mb-12 text-3xl'>Border radius</h2>
      <div className='flex flex-col gap-4 '>
        {[
          'rounded-none',
          'rounded-sm',
          'rounded-md',
          'rounded-lg',
          'rounded-xl',
          'rounded-2xl',
          'rounded-3xl',
          'rounded-full',
        ].map((item) => (
          <div
            key={item}
            className={`px-4 py-4 w-full border border-black/50 ${item} `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    <div className='w-full max-w-md'>
      <h2 className='mt-6 mb-12 text-3xl'>Border thickness</h2>
      <div className='flex flex-col gap-4 '>
        {[
          'rounded-none',
          'rounded-sm',
          'rounded-md',
          'rounded-lg',
          'rounded-xl',
          'rounded-2xl',
          'rounded-3xl',
          'rounded-full',
        ].map((item) => (
          <div
            key={item}
            className={`px-4 py-4 w-full border border-black/50 ${item} `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
