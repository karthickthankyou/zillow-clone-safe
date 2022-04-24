import { getInitials } from 'src/lib/util'

export interface IInitialsProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'primary'
    | 'gray'
    | 'red'
    | 'green'
    | 'yellow'
    | 'black'
    | 'luxury'
    | 'blackLuxury'
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10',
  lg: 'w-12 h-12 text-lg',
}
const colorClasses = {
  luxury: 'bg-luxury text-white',
  blackLuxury: 'bg-black-luxury text-white',
  black: 'bg-black text-white',
  primary: 'bg-primary-500 text-white',
  gray: 'bg-gray-500 text-white',
  red: 'bg-red-500 text-white',
  green: 'bg-green-500 text-black',
  yellow: 'bg-yellow-500 text-black',
}

const Initials = ({
  name,
  className,
  size = 'md',
  color = 'luxury',
}: IInitialsProps) => (
  <div
    className={`flex items-center justify-center  rounded-full ${className} ${colorClasses[color]} ${sizeClasses[size]}`}
  >
    {getInitials(name)}
  </div>
)

export default Initials
