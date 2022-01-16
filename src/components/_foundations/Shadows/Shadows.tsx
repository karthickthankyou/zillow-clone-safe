export interface IShadowsProps {}

const Shadows = () => (
  <div className='bg-gray-100 '>
    <div className='container p-6 mx-auto space-y-10'>
      <div className='max-w-lg p-6 mx-auto'>
        <h1 className='text-3xl font-thin'>Shadows</h1>
        <p className='max-w-md mt-3 mb-8 text-sm text-gray-700 '>
          Shadows create a sense of elevation or visual depth in the z-axis.
          Also, remember that making the background a shade darker enhances the
          effect.
        </p>
        <div className='grid grid-cols-1 gap-3 mt-3'>
          {[
            'shadow-none',
            'shadow-inner',
            'shadow-sm',
            'shadow-md',
            'shadow-lg',
            'shadow-xl',
            'shadow-2xl',
          ].map((shadow) => (
            <div
              key={shadow}
              className={`px-2 py-4 mt-2 bg-white rounded ${shadow} bg-gray-50 border border-white`}
            >
              {shadow}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Shadows
