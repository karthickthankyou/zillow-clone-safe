import { HScrollBodyProps } from '../../molecules/HScroll'

export interface ICitiesProps {
  title: string
  description?: string
  children: HScrollBodyProps['children']
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
        className='px-4 py-2 border rounded-full text-primary-600 hover:text-primary-500 hover:border-primary-500 border-primary-600'
      >
        Search homes
      </button>
    </div>
    {children}
  </div>
)

export default Cities
