/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// If yup-phone is creating problems, Use import parsePhoneNumber from 'libphonenumber-js'

import ExclamationIcon from '@heroicons/react/solid/ExclamationIcon'

export interface IAgentContactFormProps {
  homeId: number
}
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html

const agentFormSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('A valid email is required'),
    phone: yup.string().matches(phoneRegex, 'A valid phone number is required'),
    message: yup.string().required('Message is required'),
  })
  .required()

/** Todo: How to make any one of phone or email to be required? */

type AgentFormSchema = yup.InferType<typeof agentFormSchema>

const FormError = ({ error }: { error: FieldError | undefined }) => {
  if (error) {
    return (
      <div className='mt-1 text-sm text-red-900'>
        <ExclamationIcon className='inline w-4 h-4' /> {error.message}
      </div>
    )
  }
  return null
}

const AgentContactForm = React.forwardRef(
  ({ homeId }: IAgentContactFormProps, ref: any) => {
    console.log('Home id: ', homeId)

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<AgentFormSchema>({
      resolver: yupResolver(agentFormSchema),
      defaultValues: {
        name: '',
        email: '',
        phone: '',
        message: `Hey, I would like to schedule a tour of your home.`,
      },
    })

    const onSubmit = handleSubmit((data) => console.log(data))

    return (
      <div ref={ref} className='grid grid-cols-1 gap-3 pt-6 md:grid-cols-2'>
        <div>
          <div className='text-4xl font-extralight'>Get a call back.</div>
          <div className='max-w-sm mt-6 text-gray-700'>
            Connect with a local buyer’s agent who advertises with Zillow.
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <label className='block'>
              Name
              <input
                {...register('name')}
                type='text'
                placeholder='Enter name'
                className='w-full p-2 mt-1 border rounded text-grey-700'
              />
              <FormError error={errors.name} />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block mb-1'>
              Email
              <input
                {...register('email')}
                type='text'
                placeholder='Enter email'
                className='w-full p-2 mt-1 border rounded text-grey-700'
              />
              <FormError error={errors.email} />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block mb-1'>
              Phone
              <input
                {...register('phone')}
                type='text'
                placeholder='Enter phone number'
                className='w-full p-2 mt-1 border rounded text-grey-700'
              />
              <FormError error={errors.phone} />
            </label>
          </div>
          <div className='mt-4'>
            <label className='block mb-1'>
              Message
              <textarea
                cols={30}
                rows={4}
                placeholder='Enter the message'
                className='block w-full p-2 mt-1 border rounded'
                {...register('message')}
              />
              <FormError error={errors.message} />
            </label>
          </div>
          <button
            className='w-full px-2 py-2 mt-4 text-white rounded bg-primary-500'
            type='submit'
          >
            Contact
          </button>
        </form>
      </div>
    )
  }
)

AgentContactForm.displayName = 'AgentContactForm'
export default AgentContactForm
