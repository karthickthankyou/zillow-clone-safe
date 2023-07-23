import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Children } from 'src/types'
import ClipboardIcon from '@heroicons/react/outline/ClipboardIcon'

const ColorContext = React.createContext<{
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}>({
  selected: '',
  setSelected: () => {},
})

export const useColorContext = () => {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error(
      `A composite Color component cannot be rendered outside of the parent Color component.`
    )
  }
  return context
}

const useCopyToClipboard = () => {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    navigator.clipboard.writeText(selected)
    const timerId = setTimeout(() => setSelected(''), 6000)
    return () => {
      clearTimeout(timerId)
    }
  }, [selected])
  return [selected, setSelected] as const
}

const ColorPill = ({
  shade,
  buttonClasses,
  bgColor,
  textColor,
}: {
  shade: string
  buttonClasses: string
  bgColor: string
  textColor: string
}) => {
  const { setSelected } = useContext(ColorContext)
  return (
    <div key={shade} className={`${buttonClasses} ${bgColor} group flex-1`}>
      <div className='p-3 transition-all duration-500 opacity-0 group-hover:opacity-100'>
        <div className='text-xl font-light'>{shade}</div>
        <div className='flex gap-2 mt-4'>
          <button
            type='button'
            className={`w-8 h-8 font-serif shadow border  shadow-black/10 text-xs    ${buttonClasses}  `}
            onClick={() => setSelected(textColor)}
          >
            T
          </button>
          <button
            type='button'
            className={`w-8 h-8 font-serif shadow border  shadow-black/10 text-xs  ${buttonClasses}  `}
            onClick={() => setSelected(bgColor)}
          >
            bg
          </button>
        </div>
      </div>
    </div>
  )
}

const ColorsLayout = ({ color }: { color: string }) => (
  <>
    {[25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => {
      const bgColor = `bg-${color}-${shade}`
      const textColor = `text-${color}-${shade}`

      // For making the text visible over differect lightnesses.
      const buttonClasses =
        shade > 500
          ? `text-white border-white/10`
          : 'text-black border-black/10'

      return (
        <ColorPill
          key={shade}
          shade={shade.toString()}
          bgColor={bgColor}
          buttonClasses={buttonClasses}
          textColor={textColor}
        />
      )
    })}
  </>
)
const BaseLayout = () => (
  <>
    {['black', 'white'].map((shade) => {
      const bgColor = `bg-${shade}`
      const textColor = `text-${shade}`

      // For making the text visible over differect lightnesses.
      const buttonClasses = `${
        shade === 'black'
          ? 'text-white border-white/10'
          : 'text-black border-black/10'
      }`

      return (
        <ColorPill
          key={shade}
          shade={
            shade.toString().charAt(0).toUpperCase() + shade.toString().slice(1)
          }
          bgColor={bgColor}
          buttonClasses={buttonClasses}
          textColor={textColor}
        />
      )
    })}
  </>
)

const ColorBoxLayout = ({
  children,
  heading,
}: {
  children: Children
  heading: string
}) => (
  <div className='rounded'>
    <div className='flex items-baseline justify-between'>
      <h2 className='mb-3 tracking-widest uppercase bg-white/10'>{heading}</h2>
    </div>
    <div className='flex flex-wrap gap-2 overflow-hidden border-8 shadow-xl border-white/10 shadow-black/20 rounded-3xl'>
      {children}
    </div>
  </div>
)

const Notification = () => {
  const { selected } = useContext(ColorContext)
  return selected ? (
    <div className='fixed bottom-0 px-3 mb-12 text-white border border-white rounded-full shadow-2xl backdrop-blur backdrop-filter shadow-black/40 bg-gray-900/50'>
      <p className='flex items-center'>
        <ClipboardIcon className='w-6 h-6 mr-2' />
        Text
        <div className='px-2 py-1 mx-2 text-lg -skew-x-12 bg-black'>
          {selected}
        </div>
        copied.
      </p>
    </div>
  ) : null
}

const Header = () => (
  <>
    <h1 className='mt-12 text-3xl '>Colors</h1>
    <div className='max-w-sm mt-4 mb-4 text-sm text-gray-700'>
      The colors are designed to range from almost white to almost black. This
      ample variety in each color allows us to create smooth visuals.
      <br />
      <div className='p-2 mt-2 -ml-2 text-xs bg-gray-100 rounded shadow-inner'>
        Hover over the colors and click on <span className='font-serif'>T</span>{' '}
        or <span className='font-mono'>bg</span> to copy the corresponding
        classes.
      </div>
    </div>
  </>
)

const Colors = () => {
  const [selected, setSelected] = useCopyToClipboard()
  const value = useMemo(
    () => ({
      selected,
      setSelected,
    }),
    [selected, setSelected]
  )

  return (
    <ColorContext.Provider value={value}>
      <div className='container mx-auto'>
        <Header />
        <div className='grid grid-cols-1 gap-12 mt-12 sm:grid-cols-1 md:grid-cols-3'>
          <ColorBoxLayout heading='base'>
            <BaseLayout />
          </ColorBoxLayout>
          {['primary', 'gray', 'red', 'green', 'yellow'].map((color) => (
            <ColorBoxLayout key={color} heading={color}>
              <ColorsLayout color={color} />
            </ColorBoxLayout>
          ))}
        </div>
        <Notification />
        <div className='mb-24' />
      </div>
    </ColorContext.Provider>
  )
}

// For purgecss.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = [
  {
    primary: [
      'bg-primary-25',
      'bg-primary-50',
      'bg-primary-100',
      'bg-primary-200',
      'bg-primary-300',
      'bg-primary-400',
      'bg-primary-500',
      'bg-primary-600',
      'bg-primary-700',
      'bg-primary-800',
      'bg-primary-900',
    ],
    gray: [
      'bg-gray-25',
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray-600',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
    ],
    red: [
      'bg-red-25',
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
    ],
    green: [
      'bg-green-25',
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
    ],
    yellow: [
      'bg-yellow-25',
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
    ],
  },
]

export default Colors
