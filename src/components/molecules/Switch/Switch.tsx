import Switch, { SwitchClasses } from '@mui/material/Switch'

export interface ISwitchProps {}

const SwitchComponent = ({}: ISwitchProps) => {
  return (
    <Switch
      classes={{
        track: 'bg-gray-200 focus:ring-0 border border-gray-400',
        thumb: 'border-2 border-primary-600 check:bg-primary-600',
        switchBase: 'border-2 border-primary-600',
      }}
    />
  )
}

export default SwitchComponent
