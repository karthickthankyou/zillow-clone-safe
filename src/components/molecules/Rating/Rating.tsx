import Rating from '@mui/material/Rating'

export interface IRatingProps {
  value: number
}

const RatingComponent = ({ value }: IRatingProps) => (
  <Rating
    readOnly
    value={value}
    precision={0.1}
    size='small'
    classes={{
      iconFilled: 'text-primary-600',
    }}
  />
)

export default RatingComponent
