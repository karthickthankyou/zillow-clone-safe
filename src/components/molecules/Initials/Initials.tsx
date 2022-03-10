import { getInitials } from 'src/lib/util'

export interface IInitialsProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const Initials = ({ name, className, size = 'md' }: IInitialsProps) => (
  <div
    className={`flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary-500 ${className} ${sizeClasses[size]}`}
  >
    {getInitials(name)}
  </div>
)

export default Initials
