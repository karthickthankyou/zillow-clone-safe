import { ReactElement } from 'react'
import HScroll from 'src/components/molecules/HScroll'

export interface ICitiesProps {
  title: string
  description: string
  children: ReactElement[]
}

const Cities = ({ title, description, children }: ICitiesProps) => (
  <div className='py-12 my-24'>
    <div className='container flex items-center justify-between mx-auto'>
      <div>
        <div className='text-3xl tracking-tight'>{title}</div>
        {description && (
          <p className='max-w-lg mt-3 text-gray-800'>{description}</p>
        )}
      </div>
      <button
        type='button'
        className='px-4 py-2 border rounded-full text-primary-600 hover:text-white hover:bg-primary-500 border-primary-600'
      >
        Search homes
      </button>
    </div>
    <HScroll className='mt-2'>
      <HScroll.RightArrow className='absolute left-0 h-full '>
        <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
          &lt;
        </div>
      </HScroll.RightArrow>
      <HScroll.LeftArrow className='absolute right-0 h-full'>
        <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
          &gt;
        </div>
      </HScroll.LeftArrow>
      <HScroll.Body className='gap-4 mb-12'>{children}</HScroll.Body>
    </HScroll>
  </div>
)

export default Cities
