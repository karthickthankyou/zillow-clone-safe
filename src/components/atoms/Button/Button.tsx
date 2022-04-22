/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

type ButtonSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type IButtonProps = {
  size?: ButtonSizes
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error' | 'white' | 'black'
  fullWidth?: boolean
  isLoading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const variantColor = {
  contained: {
    primary: 'text-white bg-primary hover:bg-primary-600',
    white: 'text-black bg-white',
    black: 'text-white bg-black hover:bg-gray-900',
    success: 'text-white bg-green hover:bg-green-700',
    error: 'text-white bg-red hover:bg-red-700',
  },

  outlined: {
    primary: 'border-2 border-primary text-primary hover:bg-primary-100',
    white: 'border-2 border-white text-white hover:bg-white/10',
    black: 'border-2 border-black text-black hover:bg-black/10',
    success: 'border-2 border-green text-green hover:bg-green-100',
    error: 'border-2 border-red text-red hover:bg-red-100',
  },
  text: {
    primary: 'text-primary ',
    white: 'text-black',
    black: 'text-white',
    success: 'text-green ',
    error: 'text-red ',
  },
}

const sizes: { [key in ButtonSizes]: string } = {
  none: 'text-sm',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2 text-base',
  xl: 'px-8 py-3 text-xl',
}

const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  className,
  isLoading = false,
  type = 'button',
  ...props
}: IButtonProps) => {
  const variantCls = variantColor[variant][color]
  const sizeCls = variant === 'text' ? sizes.none : sizes[size]

  const fwCls = fullWidth && 'w-full'
  const disCls = (disabled || isLoading) && 'opacity-60 cursor-auto'

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled || isLoading}
      className={`rounded-full relative font-medium ${sizeCls} ${fwCls} ${variantCls} ${disCls}  ${className} `}
      {...props}
    >
      {isLoading ? (
        <>
          <div className='absolute inset-0 flex items-center justify-center'>
            <RefreshIcon className='w-5 h-5 animate-spin-reverse' />
          </div>
          <div className='opacity-10'>{children}</div>
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default Button
