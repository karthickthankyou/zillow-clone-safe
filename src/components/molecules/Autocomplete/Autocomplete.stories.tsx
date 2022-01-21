import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import Autocomplete from './Autocomplete'

export default {
  title: 'molecules/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const { watch, control } = useForm({
    defaultValues: {
      autocomplete: null,
    },
  })
  console.log('Watching: ', watch())
  return (
    <div>
      <Controller
        name='autocomplete'
        control={control}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <Autocomplete {...args} onChange={onChange} value={value} />
        )}
      />
      <div className='flex -rotate-12'>
        <div className='w-12 bg-red-600 h-96' />
        <div className='w-12 bg-green-600 h-96' />
        <div className='w-12 bg-blue-600 h-96' />
        <div className='w-12 bg-purple-600 h-96' />
      </div>
    </div>
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
