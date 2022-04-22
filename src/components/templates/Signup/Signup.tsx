/* eslint-disable react/jsx-props-no-spreading */
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'

import { googleSignin, signup } from 'src/store/user'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormError } from 'src/components/organisms/AgentContactForm/AgentContactForm'
import { useAppDispatch, useAppSelector } from 'src/store'
import Link from 'src/components/atoms/Link/Link'
import Button from 'src/components/atoms/Button/Button'
import SplitLayoutImage from '../SplitLayoutImage'

const signupFormSchema = yup
  .object({
    email: yup
      .string()
      .required('Email address is required')
      .email('Email address is not valid.'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Minimum 6 characters needed.'),
    name: yup.string().required('Name is required'),
    rememberMe: yup.boolean(),
    isLandlord: yup.boolean(),
  })
  .required()

type SignupFormSchema = yup.InferType<typeof signupFormSchema>

export interface ISignUpProps {}

const SignUp = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormSchema>({
    resolver: yupResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      rememberMe: false,
      isLandlord: false,
    },
  })

  const { loading } = useAppSelector((state) => state.user)

  // eslint-disable-next-line no-console
  const onSubmit = handleSubmit((data) => {
    dispatch(signup(data))
  })
  return (
    <SplitLayoutImage imgSrc='https://res.cloudinary.com/thankyou/image/upload/v1640845175/nike/joel-filipe-RFDP7_80v5A-unsplash_ucp0oa.webp'>
      <h2 className='text-3xl font-light'>Create account</h2>
      <form onSubmit={onSubmit} className='w-full mt-6 space-y-4'>
        <div>
          <label className='block text-sm text-gray-700'>
            Email address
            <input
              // type='email'
              // autoComplete='email'
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
              {...register('email')}
            />
            <FormError error={errors.email} />
          </label>
        </div>

        <div className='space-y-1'>
          <label className='block text-sm text-gray-700'>
            Password
            <input
              type='password'
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
              {...register('password')}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div className='space-y-1'>
          <label className='block text-sm text-gray-700'>
            Display name
            <input
              className='block w-full px-3 py-2 mt-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
              {...register('name')}
            />
            <FormError error={errors.name} />
          </label>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember-me'
              type='checkbox'
              {...register('rememberMe')}
              className='w-4 h-4 border-gray-200 rounded text-primary-600 focus:ring-primary-500'
            />
            <label
              htmlFor='remember-me'
              className='block ml-2 text-sm text-gray-900'
            >
              Remember me
            </label>
          </div>

          <div className='text-sm'>
            <a href='#' className=' text-primary-600 hover:text-primary-500'>
              Forgot your password?
            </a>
          </div>
        </div>
        <div className='flex items-center'>
          <input
            id='landlord'
            {...register('isLandlord')}
            type='checkbox'
            className='w-4 h-4 border-gray-200 rounded text-primary-600 focus:ring-primary-500'
          />
          <label
            htmlFor='landlord'
            className='block ml-2 text-sm text-gray-900'
          >
            I am a landlord or industry professional
          </label>
        </div>

        <Button
          type='submit'
          isLoading={loading}
          className='flex justify-center w-full px-4 py-2 text-sm text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
        >
          Create account
        </Button>
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
          className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md cursor-not-allowed border-primary-200'
        >
          <FaFacebook className=' w-4 h-4 mr-2 text-[#4267B2]' /> Facebook
        </button>
        <button
          type='button'
          disabled
          onClick={() => console.error('Not implemented.')}
          className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md cursor-not-allowed border-primary-200'
        >
          <FaTwitter className=' w-4 h-4 mr-2 text-[#1DA1F2]' /> Twitter
        </button>
      </div>
      <div className='mt-4 text-sm'>
        Already have an Zillow clone account?
        <br />
        <Link href='/login' className='text-primary'>
          Login now
        </Link>
        .
      </div>
    </SplitLayoutImage>
  )
}

export default SignUp
