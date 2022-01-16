import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'
import Image from 'src/components/atoms/Image'
import NextImage from 'next/image'

import {} from '@react-icons/all-files/'
import Link from 'src/components/atoms/Link'
import Brand from 'src/components/atoms/Brand'
import { googleSignin } from 'src/lib/firebase'

export interface ISignUpProps {}

const SignUp = () => (
  <div className='grid h-screen grid-cols-2 bg-primary-900'>
    <div className='relative w-full h-full bg-cover rounded bg-primary-50'>
      <img
        alt=''
        src='https://res.cloudinary.com/thankyou/image/upload/v1640845175/nike/joel-filipe-RFDP7_80v5A-unsplash_ucp0oa.webp'
        className='absolute inset-0 top-0 object-cover h-full bg-blend-overlay'
      />
      <div className='mt-32 text-center'>
        <Brand className='text-center fill-primary-900' />
      </div>
    </div>
    <div className='flex items-center bg-white'>
      <div className='max-w-md mx-auto'>
        <h2 className='text-3xl font-light'>Create account</h2>
        <form action='#' method='POST' className='w-full mt-6 space-y-4'>
          <div>
            <label htmlFor='email' className='block text-sm text-gray-700'>
              Email address
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='space-y-1'>
            <label htmlFor='password' className='block text-sm text-gray-700'>
              Password
            </label>
            <div className='mt-1'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
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
              name='landlord'
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
          <div>
            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
            >
              Create account
            </button>
          </div>
        </form>
        <div className='relative mt-6'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'
          >
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 text-gray-600 bg-white'>
              Or continue with
            </span>
          </div>
        </div>
        <div className='flex gap-4 mt-6'>
          <button
            type='button'
            className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
          >
            <FaFacebook className=' w-4 h-4 mr-2 text-[#4267B2]' /> Facebook
          </button>
          <button
            type='button'
            onClick={() => googleSignin()}
            className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
          >
            <FaGoogle className=' w-4 h-4 mr-2 text-[#DB4437]' /> Google
          </button>
          <Link
            href='/'
            className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
          >
            <FaTwitter className=' w-4 h-4 mr-2 text-[#1DA1F2]' /> Twitter
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default SignUp
