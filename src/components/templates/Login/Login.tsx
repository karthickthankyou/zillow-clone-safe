/* eslint-disable react/jsx-props-no-spreading */
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'

import { useAppDispatch } from 'src/store'
import { googleSignin } from 'src/store/user'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormError } from 'src/components/organisms/AgentContactForm/AgentContactForm'
import SplitLayoutImage from '../SplitLayoutImage'

const signinFormSchema = yup
  .object({
    email: yup
      .string()
      .required('Email address is required')
      .email('Email address is not valid.'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 characters needed.'),
    rememberMe: yup.boolean(),
  })
  .required()

type SigninFormSchema = yup.InferType<typeof signinFormSchema>

// https://res.cloudinary.com/thankyou/image/upload/v1640791791/nike/wallpapers/alexander-andrews-A3DPhhAL6Zg-unsplash_lngmew.png

const Login = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormSchema>({
    resolver: yupResolver(signinFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => console.log('Signin: ', data))

  return (
    <SplitLayoutImage imgSrc='https://res.cloudinary.com/thankyou/image/upload/v1640791791/nike/wallpapers/alexander-andrews-A3DPhhAL6Zg-unsplash_lngmew.png'>
      <h2 className='text-3xl font-light'>Sign in</h2>
      <form onSubmit={onSubmit} className='w-full mt-6 space-y-4'>
        <div>
          <label className='block text-sm text-gray-700'>
            Email
            <input
              {...register('email')}
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
            />
            <FormError error={errors.email} />
          </label>
        </div>

        <div className='space-y-1'>
          <label className='block text-sm text-gray-700'>
            Password
            <input
              type='password'
              {...register('password')}
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
            />
            <FormError error={errors.password} />
          </label>
        </div>

        <div className='flex items-center justify-between'>
          <label className='flex items-center text-sm text-gray-900'>
            <input
              type='checkbox'
              {...register('rememberMe')}
              className='w-4 h-4 border-gray-200 rounded text-primary-600 focus:ring-primary-500'
            />
            <span className='ml-2'>Remember me</span>
          </label>

          <div className='text-sm'>
            <a href='#' className=' text-primary-600 hover:text-primary-500'>
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex justify-center w-full px-4 py-2 text-sm text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
          >
            Sign in
          </button>
        </div>
      </form>
      <div className='relative mt-6'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-gray-300' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 text-gray-600 bg-white'>Or continue with</span>
        </div>
      </div>
      <div className='flex gap-4 mt-6'>
        <button
          type='button'
          onClick={() => dispatch(googleSignin())}
          className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
        >
          <FaGoogle className=' w-4 h-4 mr-2 text-[#DB4437]' /> Google
        </button>
        <button
          type='button'
          disabled
          onClick={() => console.error('Not implemented.')}
          className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
        >
          <FaFacebook className=' w-4 h-4 mr-2 text-[#4267B2] cursor-not-allowed' />{' '}
          Facebook
        </button>
        <button
          type='button'
          disabled
          onClick={() => console.error('Not implemented.')}
          className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
        >
          <FaTwitter className=' w-4 h-4 mr-2 text-[#1DA1F2] cursor-not-allowed' />{' '}
          Twitter
        </button>
      </div>
    </SplitLayoutImage>
  )
}

export default Login
