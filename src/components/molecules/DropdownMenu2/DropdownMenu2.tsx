import { Menu, MenuButton, MenuLink, MenuList } from '@reach/menu-button'
import { ReactElement } from 'react'

export interface IDropdownMenu2Props {
  title: string
  children: ReactElement | ReactElement[]
}
const Example = ({ title, children }: IDropdownMenu2Props) => (
  <Menu>
    <MenuButton>
      Actions <span aria-hidden>▾</span>
    </MenuButton>
    <MenuList>
      <MenuLink as='a' onSelect={() => alert('Download')}>
        Download
      </MenuLink>
      <MenuLink as='a' onSelect={() => alert('Copy')}>
        Create a Copy
      </MenuLink>
      <MenuLink as='a' onSelect={() => alert('Mark as Draft')}>
        Mark as Draft
      </MenuLink>
      <MenuLink as='a' onSelect={() => alert('Delete')}>
        Delete
      </MenuLink>
      <MenuLink as='a' href='https://reacttraining.com/workshops/'>
        Attend a Workshop
      </MenuLink>
    </MenuList>
  </Menu>
)

// const Example = ({ title, children }: IDropdownMenu2Props) => (
//   <Menu>
//     <MenuButton>
//       {title} <span aria-hidden>▾</span>
//     </MenuButton>
//     <MenuList className='p-2 border border-white rounded shadow-lg bg-gray-50'>
//       {children}
//     </MenuList>
//   </Menu>
// )

export default Example
