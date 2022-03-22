/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLProps } from 'react'

const HtmlTextArea = React.forwardRef<
  HTMLTextAreaElement,
  HTMLProps<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
    ref={ref}
    {...props}
    className='block w-full px-3 py-2 placeholder-gray-500 border border-gray-200 rounded shadow-inner appearance-none bg-gray-50 read-only:text-gray-600 read-only:cursor-not-allowed focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
  />
))
HtmlTextArea.displayName = 'TextArea'

export default HtmlTextArea
