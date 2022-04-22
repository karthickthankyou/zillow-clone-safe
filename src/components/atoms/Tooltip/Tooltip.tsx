/* eslint-disable react/jsx-props-no-spreading */
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip'
import { AllColors } from 'src/types'
import { bgClasses, colorClasses } from 'src/lib/util'

export type ITooltipProps = {
  bg?: AllColors
  text?: AllColors
} & TooltipProps

const Tooltip = ({
  bg = 'white',
  text = 'black',
  children,
  title,
  ...props
}: ITooltipProps) => (
  <MuiTooltip
    classes={{
      tooltip: ` ${bgClasses[bg]} text-sm  ${colorClasses[text]} shadow-lg shadow/black/30 `,
      arrow: `${colorClasses[bg]}`,
    }}
    // TransitionComponent={Fade}
    TransitionProps={{ timeout: 0 }}
    title={title}
    {...props}
  >
    {children}
  </MuiTooltip>
)

export default Tooltip
