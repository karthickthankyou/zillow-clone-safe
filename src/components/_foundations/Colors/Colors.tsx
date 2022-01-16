import { useEffect, useState } from 'react'

export interface IColorsProps {}

const ColorBox = ({
  color,
  colorClasses,
}: {
  color: string
  colorClasses: string[]
}) => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => setSelected(''), 3000)
    return () => {
      clearTimeout(timerId)
    }
  }, [selected])

  const setSelectedState = ({
    colorType,
    shade,
    type,
  }: {
    colorType: string
    shade: number
    type: string
  }) => {
    navigator.clipboard.writeText(`text-${colorType}-${shade}`)
    setSelected(`${type}-${colorType}-${shade}`)
  }
  return (
    <div className='rounded shadow-xl'>
      <div className='flex items-baseline justify-between'>
        <h2 className='mb-3 tracking-widest uppercase'>{color}</h2>
        {selected && (
          <p className='text-xs text-gray-500'>{`"${selected}"`} copied.</p>
        )}
      </div>
      {colorClasses.map((colorClass) => {
        const shade = parseInt(colorClass.split('-')[2], 10)
        const colorType = colorClass.split('-')[1]
        const textColor =
          shade > 400
            ? `text-white border-white `
            : 'text-gray-900 border-gray-900 '

        return (
          <div
            key={colorClass}
            className={`w-full shadow-lg ${textColor} ${colorClass} group`}
          >
            <div className='flex items-center p-2 opacity-0 group-hover:opacity-100'>
              <div>{shade}</div>
              <button
                type='button'
                className={`w-4 h-4 font-serif border ml-auto rounded  ${textColor} `}
                onClick={() =>
                  setSelectedState({ colorType, shade, type: 'text' })
                }
              >
                T
              </button>
              <button
                type='button'
                className={`w-4 h-4 ml-2 font-serif border rounded ${textColor} `}
                onClick={() =>
                  setSelectedState({ colorType, shade, type: 'bg' })
                }
              >
                bg
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Colors = () => (
  <div className='container mx-auto'>
    <h1 className='text-3xl font-thin'>Colors</h1>
    <p className='max-w-md mt-2 mb-4 text-sm text-gray-700 '>
      This is our color palette. The ample variety in each color allows us to
      create smooth visuals.
      <br />
      <div className='mt-2'>
        Hover over the colors and click on <span className='font-serif'>T</span>{' '}
        or <span className='font-mono'>bg</span> to copy the corresponding
        classes.
      </div>
    </p>

    <div className='grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-6'>
      <ColorBox
        color='primary'
        colorClasses={[
          `bg-primary-50`,
          `bg-primary-100`,
          `bg-primary-200`,
          `bg-primary-300`,
          `bg-primary-400`,
          `bg-primary-500`,
          `bg-primary-600`,
          `bg-primary-700`,
          `bg-primary-800`,
          `bg-primary-900`,
        ]}
      />
      <ColorBox
        color='gray'
        colorClasses={[
          `bg-gray-50`,
          `bg-gray-100`,
          `bg-gray-200`,
          `bg-gray-300`,
          `bg-gray-400`,
          `bg-gray-500`,
          `bg-gray-600`,
          `bg-gray-700`,
          `bg-gray-800`,
          `bg-gray-900`,
        ]}
      />
      <ColorBox
        color='red'
        colorClasses={[
          `bg-red-50`,
          `bg-red-100`,
          `bg-red-200`,
          `bg-red-300`,
          `bg-red-400`,
          `bg-red-500`,
          `bg-red-600`,
          `bg-red-700`,
          `bg-red-800`,
          `bg-red-900`,
        ]}
      />
      <ColorBox
        color='green'
        colorClasses={[
          `bg-green-50`,
          `bg-green-100`,
          `bg-green-200`,
          `bg-green-300`,
          `bg-green-400`,
          `bg-green-500`,
          `bg-green-600`,
          `bg-green-700`,
          `bg-green-800`,
          `bg-green-900`,
        ]}
      />
    </div>
  </div>
)

export default Colors
