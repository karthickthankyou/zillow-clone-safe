import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'

import Autocomplete from './Autocomplete'

export default {
  title: 'molecules/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const { control } = useForm({
    defaultValues: {
      autocomplete: null,
    },
  })

  return (
    <>
      <Controller
        name='autocomplete'
        control={control}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <Autocomplete {...args} onChange={onChange} value={value} />
        )}
      />
      <div className='relative flex mt-3 overflow-hidden rounded-md'>
        <div className='absolute flex items-center justify-center w-full h-full text-gray-600'>
          <div className='max-w-xs'>
            Some cool background. Click on the search bar to see the
            autocomplete dropdown.
          </div>
        </div>
        <div className='w-12 bg-red-100 h-96' />
        <div className='w-12 bg-green-100 h-96' />
        <div className='w-12 bg-primary-100 h-96' />
        <div className='w-12 bg-yellow-100 h-96' />
        <div className='w-12 bg-red-100 h-96' />
        <div className='w-12 bg-green-100 h-96' />
        <div className='w-12 bg-primary-100 h-96' />
        <div className='w-12 bg-yellow-100 h-96' />
        <div className='w-12 bg-red-100 h-96' />
        <div className='w-12 bg-green-100 h-96' />
        <div className='w-12 bg-primary-100 h-96' />
        <div className='w-12 bg-yellow-100 h-96' />
      </div>
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
    'Lion',
    'Tiger',
  ],
}
Primary.parameters = {}
