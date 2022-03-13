import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { FormError } from 'src/components/organisms/AgentContactForm/AgentContactForm'
import { Children } from 'src/types'

export interface IHtmlLabelProps {}

const HtmlLabel = React.forwardRef<
  HTMLLabelElement,
  {
    children: Children
    title: string
    className?: string
    error: FieldError | undefined
  }
>(({ children, title, error, className }, ref) => (
  <label ref={ref} className={`block text-sm ${className}`}>
    <div className='mb-1 ml-1'>{title}</div>
    {children}
    {/* {console.log('Error: ', error, title)} */}
    <FormError error={error} />
  </label>
))

HtmlLabel.displayName = 'HtmlLabel'

export default HtmlLabel