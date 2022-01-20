import { Popover } from '@headlessui/react'
import { createContext, ReactElement, useContext } from 'react'
import Link from 'src/components/atoms/Link'

/** Context for prop sharing among the children */
const DataContext = createContext({ open: false })

export interface IPopoverMenuItemProps {}

const PopoverButton = ({
  children,
  href,
}: {
  children: (string | ReactElement)[]
  href?: string
}) => {
  const { open } = useContext(DataContext)
  return (
    <Popover.Button
      className={`py-1 rounded-none hover:text-black ${
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
        open ? 'bg-opacity-20 bg-black fixed inset-0' : 'bg-opacity-0'
      }`}
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

  <Popover.Panel
    className={`absolute left-1/2 -translate-x-1/2 z-10 gap-4 p-3 mt-1 bg-white border border-white rounded shadow-lg top-full bg-opacity-90 backdrop-filter backdrop-blur ${className}`}
  >
    {children}
  </Popover.Panel>
)

const PopoverParent = ({
  children,
  className,
}: {
  children: ReactElement | ReactElement[]
  className?: string
}) => (
  <Popover className={`relative ${className}`}>
    {(open) => (
      <DataContext.Provider value={open}>{children}</DataContext.Provider>
    )}
  </Popover>
)

export default PopoverParent
export { PopoverButton, PopoverOverlay, PopoverPanel }
