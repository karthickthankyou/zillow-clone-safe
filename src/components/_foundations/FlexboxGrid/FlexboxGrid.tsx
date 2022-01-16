export interface IFlexboxGridProps {}

const FlexboxGrid = () => (
  <div className='container mx-auto'>
    <div className='text-3xl font-thin'>Flexbox and Grid</div>
    <p className='max-w-md my-3 text-sm text-gray-600'>
      We use all the utility classes provided by tailwind about flexbox and grid
      as it is. Refer to the{' '}
      <a
        className='text-primary-500'
        href='https://tailwindcss.com/docs/flex-direction'
      >
        official documentation
      </a>
      .
    </p>
  </div>
)

export default FlexboxGrid
