import { ReactElement } from 'react'
import PopoverMenu from '../PopoverMenu'
import { PopoverButton, PopoverPanel } from '../PopoverMenuItem'

const MenuItem = ({
  children,
  title,
}: {
  children: ReactElement
  title: string
}) => (
  <PopoverMenu>
    <PopoverButton>
      <>
        {title} <span aria-hidden>▾</span>
      </>
    </PopoverButton>
    {/* <PopoverOverlay /> */}
    <PopoverPanel className='space-y-2 text-gray-600'>{children}</PopoverPanel>
  </PopoverMenu>
)

export default MenuItem
