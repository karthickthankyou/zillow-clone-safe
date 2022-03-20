import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Controller, useForm } from 'react-hook-form'
import { Wrapper } from 'src/components/atoms/utils'
import { addDollar, shortenNumber } from 'src/lib/util'
import RangeSlider from './RangeSlider'
import NotesFixed from '../NotesFixed'

export default {
  title: 'molecules/RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>

const Template: ComponentStory<typeof RangeSlider> = ({
  initialData,
  step,
}) => {
  const { control } = useForm({
    defaultValues: {
      slider: initialData,
    },
  })

  return (
    <div className='px-12 mt-24'>
      <Controller
        name='slider'
        control={control}
        defaultValue={initialData}
        render={({ field: { onChange, value } }) => (
          <RangeSlider
            step={step}
            initialData={initialData}
            onChange={onChange}
            value={value}
          />
        )}
      />
    </div>
  )
}
const LabelFormatTemplate: ComponentStory<typeof RangeSlider> = ({
  initialData,
  step,
}) => {
  const { control } = useForm({
    defaultValues: {
      slider: initialData,
    },
  })

  return (
    <div className='px-12 mt-24'>
      <Controller
        name='slider'
        control={control}
        defaultValue={initialData}
        render={({ field: { onChange, value } }) => (
          <RangeSlider
            step={step}
            onChange={onChange}
            value={value}
            initialData={initialData}
            labelFormat={(sliderValue) =>
              `${addDollar(shortenNumber(sliderValue))}`
            }
          />
        )}
      />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  initialData: [0, 10],
  step: 1,
}
Primary.decorators = [(story) => <Wrapper>{story()}</Wrapper>]

export const LabelFormat = LabelFormatTemplate.bind({})
LabelFormat.args = {
  initialData: [0, 10_000_000],
  step: 10_000,
}
LabelFormat.decorators = [
  (story) => <Wrapper>{story()}</Wrapper>,
  (story) => (
    <div>
      {story()}
      <NotesFixed>
        <div>
          We can use the{' '}
          <span className='font-bold text-primary-600'>labelFormat</span> prop
          to modify the text format.
        </div>
      </NotesFixed>
    </div>
  ),
]
