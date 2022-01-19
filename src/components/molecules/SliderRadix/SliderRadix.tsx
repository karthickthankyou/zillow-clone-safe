/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { FieldValues } from 'react-hook-form'

export interface ISliderRadixProps {
  min?: number
  max: number
  step?: number
  onChange: FieldValues['onChange']
  onBlur: FieldValues['onBlur']
  value: FieldValues['value']
}

const SliderDemo = ({
  min = 0,
  max,
  step = Math.floor((max - min) / 20),
  onChange,
  onBlur,
  value,
}: ISliderRadixProps) => (
  <SliderPrimitive.Root
    className='relative flex items-center w-56 h-4 select-none touch-none'
    defaultValue={[min, max]}
    max={max}
    step={step}
    aria-label='Volume'
    onValueChange={onChange}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  >
    <SliderPrimitive.Track className='relative flex-grow w-full h-1 bg-green-600 rounded-full'>
      <SliderPrimitive.Range className='absolute h-full bg-red-600 rounded-full' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='z-10 block w-4 h-4 bg-white border rounded-full shadow-sm border-primary-600 ' />
    <SliderPrimitive.Thumb className='z-10 block w-4 h-4 bg-white border rounded-full shadow-sm border-primary-600 ' />
  </SliderPrimitive.Root>
)

export default SliderDemo
