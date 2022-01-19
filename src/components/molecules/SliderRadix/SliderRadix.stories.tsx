import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import SliderRadix from './SliderRadix'

export default {
  title: 'molecules/SliderRadix',
  component: SliderRadix,
} as ComponentMeta<typeof SliderRadix>

const Template: ComponentStory<typeof SliderRadix> = (args) => {
  const { control, watch } = useForm()

  return (
    <SliderRadix
      {...args}
      control={control}
      controlName='PriceRange'
      watch={watch}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  max: 100,
  min: 0,
}
Primary.parameters = {}
