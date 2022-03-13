/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react'

export interface IHtmlInputProps {}

const HtmlInput = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className='block w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border border-gray-200 rounded shadow-inner appearance-none read-only:text-gray-600 read-only:cursor-not-allowed focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
  />
))
HtmlInput.displayName = 'Input'

export default HtmlInput
