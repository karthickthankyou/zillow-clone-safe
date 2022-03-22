/* eslint-disable react/jsx-props-no-spreading */
import Switch, { SwitchProps } from '@mui/material/Switch'

export interface ISwitchProps extends SwitchProps {}

const SwitchComponent = (props: ISwitchProps) => (
  <Switch
    classes={{
      track: 'bg-gray-200 focus:ring-0 border border-gray-400',
      thumb: 'border-2 border-primary-500 check:bg-primary-500',
      switchBase: 'border-2 border-primary-500',
    }}
    {...props}
  />
)

export default SwitchComponent
