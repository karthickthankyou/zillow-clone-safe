import { ReactElement } from 'react'

export interface IBadgeProps {
  children: ReactElement | string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'gray' | 'red' | 'yellow' | 'green'
}

const Badge = ({ children, size = 'md', variant = 'gray' }: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-2  text-xs',
    md: 'px-2 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm',
  }
  const variantCls = {
    primary: 'bg-primary-50 border border-white shadow ',
    gray: 'bg-gray-50 border border-white shadow ',
    red: 'bg-red-50 border border-white shadow ',
    yellow: 'bg-yellow-50 border border-white shadow  text-yellow-800',
    green: 'bg-green-50 border border-white shadow  text-green-800',
  }
  return (
    <span
      className={`transition-all  py-1 px-2 items-center justify-center duration-300  rounded-full ${sizeCls[size]} ${variantCls[variant]}`}
    >
      {children}
    </span>
  )
}

export default Badge
