import Brand from 'src/components/atoms/Brand'
import { Children } from 'src/types'

export interface ISplitLayoutImageProps {
  imgSrc: string
  children: Children
}

const SplitLayoutImage = ({ imgSrc, children }: ISplitLayoutImageProps) => (
  <div className='grid h-screen grid-cols-1 gap-2 md:grid-cols-2'>
    <div className='relative w-full h-full bg-cover rounded bg-primary-50'>
      <div className='absolute inset-0 z-30 mt-32 text-center'>
        <Brand className='text-center fill-primary-900' />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=''
        src={imgSrc}
        className='absolute inset-0 top-0 object-cover h-full bg-blend-overlay'
      />
    </div>
    <div className='flex items-center bg-white'>
      <div className='max-w-md mx-auto'>{children}</div>
    </div>
  </div>
)

export default SplitLayoutImage
