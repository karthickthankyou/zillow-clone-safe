import Rating, { RatingProps } from '@mui/material/Rating'

export type IRatingProps = {
  value: number
  color?: 'primary' | 'black' | 'red' | 'green' | 'yellow'
} & RatingProps

const colorClasses = {
  primary: 'text-primary-600',
  black: 'text-black',
  red: 'text-red-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
}

const RatingComponent = ({
  value,
  color = 'primary',
  ...props
}: IRatingProps) => (
  <Rating
    readOnly
    value={value}
    precision={0.1}
    size='small'
    classes={{
      iconFilled: colorClasses[color],
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

export default RatingComponent
