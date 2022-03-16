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
    primary: 'bg-primary-100 border border-white shadow text-primary-700',
    gray: 'bg-gray-100 border border-white shadow text-gray-700',
    red: 'bg-red-100 border border-white shadow text-red-700',
    yellow: 'bg-yellow-100 border border-white shadow  text-yellow-700',
    green: 'bg-green-100 border border-white shadow  text-green-700',
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
