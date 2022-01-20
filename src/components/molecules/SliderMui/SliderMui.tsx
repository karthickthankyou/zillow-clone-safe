import Slider from '@mui/material/Slider'

export interface ISliderMuiProps {
  initialData: number[]
  step: number
  value: number[]
  onChange: (event: Event, value: number | number[]) => void
  className?: string
  labelFormat?: (value: number) => string
}

export const shorten = (value: number) => {
  const units = ['', 'K', 'M']

  let unitIndex = 0
  let scaledValue = value

  while (scaledValue >= 1000 && unitIndex < units.length - 1) {
    unitIndex += 1
    scaledValue = Math.round((scaledValue / 1000) * 100) / 100
  }

  return `${scaledValue} ${units[unitIndex]}`
}

export const addDollar = (value: string) => `$${value}`

const SliderMui = ({
  value,
  onChange,
  initialData,
  step,
  className,
  labelFormat,
}: ISliderMuiProps) => (
  <Slider
    defaultValue={initialData}
    min={initialData[0]}
    max={initialData[1]}
    value={value}
    step={step}
    onChange={onChange}
    valueLabelDisplay='on'
    valueLabelFormat={labelFormat}
    classes={{
      root: `h-0.5 border-0 ${className}`,
      thumb:
        'rounded-sm border-primary-600 border-2 bg-white p-2 hover:shadow-none focus:shadow-none active:shadow-none',
      track: 'text-primary-600',
      rail: 'bg-gray-400',
      valueLabel:
        'text-primary-600 shadow-md bg-white border border-primary-600 before:border-primary-600 before:border-b before:border-r active:shadow-none before:pt-1',
    }}
  />
)

export default SliderMui
