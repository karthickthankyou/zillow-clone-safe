import Brand from 'src/components/atoms/Brand'
import Link from 'src/components/atoms/Link/Link'
import { Children } from 'src/types'

export interface ISplitLayoutImageProps {
  imgSrc: string
  children: Children
}

const SplitLayoutImage = ({ imgSrc, children }: ISplitLayoutImageProps) => (
  <div className='grid grid-cols-1 md:grid-cols-2'>
    <div className='grid w-full h-48 grid-cols-1 grid-rows-1 overflow-hidden bg-cover md:h-screen bg-primary-50'>
      <div className='h-full col-span-1 col-start-1 row-span-1 row-start-1'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          src={imgSrc}
          className='object-cover h-full bg-blend-overlay'
        />
      </div>
      <div className='h-full col-span-1 col-start-1 row-span-1 row-start-1 text-center bg-primary-300/10'>
        <Link href='/'>
          <Brand className='mt-12 text-center transition-colors fill-primary-900 hover:fill-primary' />
        </Link>
      </div>
    </div>
    <div className='flex items-center py-12 bg-white md:my-0 md:h-screen md:shadow-md shadow-black/30'>
      <div className='max-w-md mx-auto'>{children}</div>
    </div>
  </div>
)

export default SplitLayoutImage
