import Switch from '@mui/material/Switch'

export interface ISwitchProps {}

const SwitchComponent = () => (
  <Switch
    classes={{
      track: 'bg-gray-200 focus:ring-0 border border-gray-400',
      thumb: 'border-2 border-primary-600 check:bg-primary-600',
      switchBase: 'border-2 border-primary-600',
    }}
  />
)

export default SwitchComponent
