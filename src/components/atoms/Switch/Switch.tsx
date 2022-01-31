import React, { InputHTMLAttributes } from 'react'

export type ISwitchProps = InputHTMLAttributes<HTMLInputElement>

const SwitchInput = React.forwardRef<HTMLInputElement>(
  ({ checked, onChange }: ISwitchProps, ref) => (
    <div className='relative flex items-center justify-between'>
      <input
        type='checkbox'
        ref={ref}
        checked={checked}
        onChange={onChange}
        className='absolute w-full h-full -translate-x-1/2 rounded-md appearance-none left-1/2 peer'
      />
      <span className='flex items-center flex-shrink-0 w-16 h-10 p-1 duration-300 ease-in-out bg-gray-300 rounded-full peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6' />
    </div>
  )
)
SwitchInput.displayName = 'SwitchInput'
export default SwitchInput

// https://medium.com/front-end-weekly/build-a-css-only-toggle-switch-using-tailwindcss-d2739882934
