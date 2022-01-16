import Link from 'next/link'
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
    primary: 'bg-primary-50 border border-primary-200 ',
    gray: 'bg-gray-50 border border-gray-200 ',
    red: 'bg-red-50 border border-red-200 ',
    yellow: 'bg-yellow-50 border border-yellow-200  text-yellow-800',
    green: 'bg-green-50 border border-green-200  text-green-800',
  }
  return (
    <span
      className={`transition-all py-1 px-2 items-center justify-center duration-300  rounded-full ${sizeCls[size]} ${variantCls[variant]}`}
    >
      {children}
    </span>
  )
}

export default Badge
