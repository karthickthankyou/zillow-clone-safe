import { ReactElement } from 'react'
import PopoverMenu, { PopoverButton, PopoverPanel } from '../PopoverMenuItem'

const MenuItem = ({
  children,
  title,
}: {
  children: ReactElement
  title: string
}) => (
  <PopoverMenu>
    <PopoverButton>{title}</PopoverButton>
    <PopoverPanel>{children}</PopoverPanel>
  </PopoverMenu>
)

export default MenuItem
