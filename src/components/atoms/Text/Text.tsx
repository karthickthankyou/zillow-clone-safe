import { HTMLAttributes, ReactElement } from 'react'

export interface ITextProps {
  muted?:
    | 'text-gray-200'
    | 'text-gray-300'
    | 'text-gray-400'
    | 'text-gray-500'
    | 'text-gray-600'
    | 'inherit'
  mb?: 'mb-0' | 'mb-2' | 'mb-4' | 'mb-6' | 'mb-8' | 'mb-10' | 'mb-12'
  weight?:
    | 'font-thin'
    | 'font-extralight'
    | 'font-light'
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'
    | 'font-extrabold'
    | 'font-black'
  size?:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl'
  classes?: string
  children?: string | ReactElement
  className?: HTMLAttributes<HTMLDivElement>['className']
}

const Text = ({
  size = 'text-base',
  mb = 'mb-0',
  muted = 'inherit',
  weight = 'font-normal',
  classes = '',
  children = '',
  className = '',
}: ITextProps) => (
  <div className={`${size} ${muted} ${mb} ${weight} ${classes} ${className}`}>
    {children}
  </div>
)

export default Text
