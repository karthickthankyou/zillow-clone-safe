import { Slider, IStackTokens, Stack, IStackStyles } from '@fluentui/react'

export interface IFluentSliderProps {}

const FluentSlider = () => {
  const min = 0
  const max = 1_000_000
  const step = 10_000
  return (
    <Slider
      ranged
      label='Price range'
      min={min}
      marks
      step={step}
      max={max}
      defaultValue={max}
      defaultLowerValue={min}
      styles={{
        root: {
          width: '32rem',
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
}

export default FluentSlider
