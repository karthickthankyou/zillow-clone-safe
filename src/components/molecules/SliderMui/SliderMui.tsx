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
  className = 'px-4 mt-12',
  labelFormat,
  value,
}: ISliderMuiProps) => (
  <div className={`${className}`}>
    <Slider
      data-testid='slider'
      defaultValue={initialData}
      min={initialData[0]}
      max={initialData[1]}
      step={step}
      value={value}
      onChange={onChange}
      valueLabelDisplay='on'
      valueLabelFormat={labelFormat}
      classes={{
        root: `h-0.5 w-full border-0`,
        thumb:
          'rounded-sm border-black border w-5 h-5 bg-white hover:shadow-none hover:border-primary-600 hover:bg-primary-50 focus:bg-primary-300 active:bg-primary-300',
        track: 'text-gray-800',
        rail: 'bg-gray-400',
        valueLabel:
          'text-black px-1 py-0.5 text-sm shadow-md bg-white border before:border-b before:border-r active:shadow-none before:pt-1',
      }}
    />
  </div>
)

SliderMui.displayName = 'SliderMui'

export default SliderMui
