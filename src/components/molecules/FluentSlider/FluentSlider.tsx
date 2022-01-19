/* eslint-disable react/jsx-props-no-spreading */
import { Slider, IStackTokens, Stack, IStackStyles } from '@fluentui/react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface IFluentSliderProps {
  label: string
  max: number
  min?: number
  step?: number
  register: ReturnType<UseFormRegister<FieldValues>>
}

const FluentSlider = ({
  min = 0,
  max,
  step = Math.floor((max - min) / 20),
  label,
}: IFluentSliderProps) => (
  <Slider
    onChange={(e) => console.log(e)}
    onSelect={(e) => console.log(e)}
    ranged
    label={label}
    min={min || 0}
    step={step}
    max={max || 0}
    defaultValue={max}
    defaultLowerValue={min}
    styles={{
      root: {
        width: '24rem',
      },
      titleLabel: {
        marginBottom: '1rem',
        fontSize: '18px',
        fontWeight: '600',
      },
      activeSection: {
        height: '2px',
      },
      inactiveSection: {
        height: '2px',
      },
      thumb: {
        height: '1rem',
        width: '1rem',
        cursor: 'pointer',
      },
    }}
  />
)

export default FluentSlider
