/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react'

const HtmlSelect = React.forwardRef<
  HTMLSelectElement,
  InputHTMLAttributes<HTMLSelectElement>
>(({ children, ...props }: InputHTMLAttributes<HTMLSelectElement>, ref) => (
  <select
    {...props}
    ref={ref}
    className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
  >
    {children}
  </select>
))

HtmlSelect.displayName = 'HtmlSelect'

export default HtmlSelect
