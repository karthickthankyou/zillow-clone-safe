import Slider from '@mui/material/Slider'
import React from 'react'

export interface ISliderMuiProps {
  initialData: [number, number]
  step: number
  onChange: (event: Event, value: number | number[]) => void
  className?: string
  labelFormat?: (value: number) => string
  value: number[]
}

const SliderMui = ({
  onChange,
  initialData,
  step,
  className,
  labelFormat,
  value,
}: ISliderMuiProps) => (
  <Slider
    defaultValue={initialData}
    min={initialData[0]}
    max={initialData[1]}
    step={step}
    value={value}
    onChange={onChange}
    valueLabelDisplay='on'
    valueLabelFormat={labelFormat}
    classes={{
      root: `h-0.5 w-56 border-0 ${className}`,
      thumb:
        'rounded-sm border-primary-600 border-2 bg-white p-2 hover:shadow-none focus:shadow-none active:shadow-none',
      track: 'text-primary-600',
      rail: 'bg-gray-400',
      valueLabel:
        'text-primary-600 shadow-md bg-white border border-primary-600 before:border-primary-600 before:border-b before:border-r active:shadow-none before:pt-1',
    }}
  />
)

SliderMui.displayName = 'SliderMui'

export default SliderMui
