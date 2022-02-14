import { Transition, Popover } from '@headlessui/react'
import { createContext, ReactElement, useContext } from 'react'
import Link from 'src/components/atoms/Link'

/** Context for prop sharing among the children */
const DataContext = createContext({ open: false })

export interface IPopoverMenuItemProps {}

const PopoverButton = ({
  children,
  href,
}: {
  children: string | ReactElement
  href?: string
}) => {
  const { open } = useContext(DataContext)
  return (
    <Popover.Button
      className={`py-1 hover:text-black ${
        open ? 'border-b text-black border-black' : 'text-gray-700'
      }`}
    >
      {href ? <Link href={href}>{children}</Link> : children}
    </Popover.Button>
  )
}

const PopoverOverlay = () => {
  const { open } = useContext(DataContext)
  return (
    <Popover.Overlay
      className={`${
        open ? 'opacity-30 fixed inset-0' : 'opacity-0'
      }  backdrop-filter backdrop-blur-sm`}
    />
  )
}

const PopoverPanel = ({
  children,
  className,
}: {
  children: string | ReactElement | ReactElement[]
  className?: string
}) => (
  // const { open } = useContext(DataContext)
  <Transition
    enter='transition-all duration-200 ease-out'
    enterFrom='transform opacity-0 top-full'
    enterTo='transform opacity-100'
    leave='transition-all duration-200 ease-out'
    leaveFrom='transform opacity-100'
    leaveTo='transform opacity-0 top-0 top-full'
    className={`absolute px-2 -mx-2 z-10 gap-6 pt-2 pb-6 bg-white top-12 bg-opacity-90 backdrop-filter backdrop-blur ${className}`}
  >
    <Popover.Panel className='flex justify-center gap-6'>
      {children}
    </Popover.Panel>
  </Transition>
)

const PopoverParent = ({
  children,
  className,
}: {
  children: ReactElement | ReactElement[]
  className?: string
}) => (
  <Popover className={className}>
    {(open) => (
      <DataContext.Provider value={open}>{children}</DataContext.Provider>
    )}
  </Popover>
)

export default PopoverParent
export { PopoverButton, PopoverOverlay, PopoverPanel }
