import { Popover as HeadlessPopover, Transition } from '@headlessui/react'
import { createContext, ReactElement, useContext } from 'react'
import Link from 'src/components/atoms/Link'
import { ChevronRightIcon } from '@heroicons/react/solid'

/** Context for prop sharing among the children */
const DataContext = createContext({ open: false })

export interface IPopoverMenuItemProps {}

const Popover = ({
  children,
  className,
}: {
  children: ReactElement | ReactElement[]
  className?: string
}) => (
  <HeadlessPopover className={className}>
    {(state) => (
      <DataContext.Provider value={state}>{children}</DataContext.Provider>
    )}
  </HeadlessPopover>
)

const PopoverButton = ({
  children,
  href,
  showIcon = false,
}: {
  children: string | ReactElement
  href?: string
  showIcon?: boolean
}) => {
  const { open } = useContext(DataContext)
  return (
    <HeadlessPopover.Button
      className={`py-1 select-none hover:text-primary-700 rounded-none ${
        open ? 'border-b border-primary-600 text-primary-600' : 'text-gray-700'
      }`}
    >
      {href ? <Link href={href}>{children}</Link> : children}
      {showIcon && (
        <ChevronRightIcon
          className={`inline w-4 h-4 ml-2 rotate-90 ${
            open ? '-rotate-90' : 'rotate-90'
          }`}
        />
      )}
    </HeadlessPopover.Button>
  )
}

const PopoverOverlay = () => {
  const { open } = useContext(DataContext)
  return (
    <HeadlessPopover.Overlay
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
  <HeadlessPopover.Panel
    className={`flex p-3 space-y-2 rounded-b-sm shadow-lg border-2 border-white justify-center absolute z-10 gap-6 bg-white/90 top-11 ${className}`}
  >
    {children}
  </HeadlessPopover.Panel>
)

const PopoverPanelMainMenu = ({
  children,
  className,
}: {
  children: string | ReactElement | ReactElement[]
  className?: string
}) => (
  // const { open } = useContext(DataContext)
  <Transition
    enter='transition-all duration-200 ease-out'
    enterFrom='transform opacity-0'
    enterTo='transform opacity-100'
    leave='transition-all duration-200 ease-out'
    leaveFrom='transform opacity-100'
    leaveTo='transform opacity-0'
    className={`absolute px-2 inset-x-0 z-40 gap-6 pt-2 pb-6 bg-white/90 top-11 ${className}`}
  >
    <HeadlessPopover.Panel className='flex justify-center'>
      {children}
    </HeadlessPopover.Panel>
  </Transition>
)

const PopoverGroup = HeadlessPopover.Group

export default Popover
export {
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  PopoverGroup,
  PopoverPanelMainMenu,
}
