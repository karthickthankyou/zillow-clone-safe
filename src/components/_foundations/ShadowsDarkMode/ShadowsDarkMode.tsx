export interface IShadowsDarkModeProps {}

const ShadowsDarkMode = () => (
  <div className='bg-gray-800 text-gray-50'>
    <div className='container p-6 mx-auto space-y-10'>
      <div className='max-w-lg p-6 mx-auto'>
        <h1 className='mb-12 text-3xl font-thin'>Shadows</h1>
        <div
          className={`px-3 py-4 mt-2 text-gray-50  rounded shadow-none border border-gray-700 `}
        >
          shadow-none
        </div>

        <div className='grid grid-cols-1 gap-3 mt-3'>
          {[
            { title: 'shadow-inner', bgColor: 'bg-gray-900' },
            { title: 'shadow-sm', bgColor: 'bg-gray-700' },
            { title: 'shadow-md', bgColor: 'bg-gray-600' },
            { title: 'shadow-lg', bgColor: 'bg-gray-500' },
            { title: 'shadow-xl', bgColor: 'bg-gray-400' },
            { title: 'shadow-2xl', bgColor: 'bg-gray-300' },
          ].map(({ title, bgColor }) => (
            <div
              key={title}
              className={`px-3 py-4 mt-2 text-gray-50  rounded ${title} ${bgColor}  `}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ShadowsDarkMode
