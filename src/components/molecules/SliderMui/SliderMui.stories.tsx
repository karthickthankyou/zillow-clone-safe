import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SliderMui from './SliderMui'
import { Controller, useForm } from 'react-hook-form'

export default {
  title: 'src/components/molecules/SliderMui',
  component: SliderMui,
} as ComponentMeta<typeof SliderMui>

const Template: ComponentStory<typeof SliderMui> = ({ initialData }) => {
  const { watch, control } = useForm({
    defaultValues: {
      slider: initialData,
    },
  })
  console.log('Watching: ', watch())
  return (
    <Controller
      name='slider'
      control={control}
      defaultValue={initialData}
      render={({ field: { onChange, value } }) => (
        <SliderMui
          step={10_000}
          initialData={initialData}
          onChange={onChange}
          value={value}
        />
      )}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  initialData: [0, 10_000_000],
  step: 10000,
}
Primary.parameters = {}
