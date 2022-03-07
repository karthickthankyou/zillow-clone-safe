import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'

import {} from '@react-icons/all-files/'
import Link from 'src/components/atoms/Link'
import Brand from 'src/components/atoms/Brand'
import Image from 'src/components/atoms/Image'
import { useAppDispatch } from 'src/store'
import { googleSignin } from 'src/store/user'

export interface ISignInProps {}

const SignIn = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='grid h-screen grid-cols-2 bg-gray-100'>
      <div className='relative w-full h-full bg-cover rounded bg-orange-50'>
        <div className='mt-32 text-center'>
          <Brand className='text-center text-black' />
        </div>
        <Image
          alt=''
          src='https://res.cloudinary.com/thankyou/image/upload/v1640791791/nike/wallpapers/alexander-andrews-A3DPhhAL6Zg-unsplash_lngmew.png'
          className='absolute inset-0 top-0 object-cover h-full'
        />
      </div>
      <div className='flex items-center bg-white'>
        <div className='max-w-md mx-auto'>
          <h2 className='text-3xl font-light'>Sign in</h2>
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
                <a
                  href='#'
                  className=' text-primary-600 hover:text-primary-500'
                >
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
            <Link
              href='/'
              className='flex items-center justify-center flex-1 px-4 py-2 bg-white border rounded-md border-primary-200'
            >
              <FaFacebook className=' w-4 h-4 mr-2 text-[#4267B2]' /> Facebook
            </Link>
            <button
              type='button'
              onClick={() => dispatch(googleSignin())}
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
}

export default SignIn
