import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/store'
import Link from 'src/components/atoms/Link'
import PopoverParent, {
  PopoverButton,
  PopoverGroup,
  PopoverPanelMainMenu,
} from 'src/components/molecules/PopoverMenuItem'
import Sidebar from 'src/components/molecules/Sidebar'
import Accordion from 'src/components/molecules/Accordion'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import { signout } from 'src/store/user'
import Initials from 'src/components/molecules/Initials'
import Brand from 'src/components/atoms/Brand'
import { Children } from 'src/types'
import { MENU_ITEMS } from 'src/store/static'
import {
  selectDisplayName,
  selectUid,
  selectUserRoles,
} from 'src/store/user/userSlice'
import Container from 'src/components/atoms/Container/Container'

export interface INavbarProps {}

const SubMenuTitle = ({
  children,
  className,
}: {
  children: Children
  className?: string
}) => <div className={`mb-2 font-semibold ${className}`}>{children}</div>

const SubMenuLink = ({
  children,
  url,
  className,
}: {
  children: Children
  url: string
  className?: string
}) => (
  <Link href={url} className={`block my-1 ${className}`}>
    {children}
  </Link>
)
const MenuItem = ({ title }: { title: string }) => (
  <PopoverParent>
    <PopoverButton>{title}</PopoverButton>
    <PopoverPanelMainMenu>
      {MENU_ITEMS[title]?.map((item) => (
        <div key={item.title}>
          <SubMenuTitle>{item.title}</SubMenuTitle>
          {item.menu.map((subitem) => (
            <SubMenuLink key={subitem.subtitle} url={subitem.url}>
              {subitem.subtitle}
            </SubMenuLink>
          ))}
        </div>
      ))}
    </PopoverPanelMainMenu>
  </PopoverParent>
)

const TextLink = ({ title, url }: { title: string; url: string }) => (
  <Link
    href={url}
    className='py-1.5 font-medium underline underline-offset-8 text-gray-600 capitalize'
  >
    {title}
  </Link>
)

const ButtonLink = ({ title, url }: { title: string; url: string }) => (
  <Link
    href={url}
    className='py-1.5 px-4 text-sm rounded-full border border-primary-600 font-medium text-primary-600 capitalize'
  >
    {title}
  </Link>
)

const NavSidebar = ({
  open,
  setOpen,
  uid,
  displayName,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  uid: string | null | undefined
  displayName: string | null | undefined
}) => (
  <Sidebar open={open} setOpen={setOpen}>
    <Sidebar.Header setOpen={setOpen} />
    <Sidebar.Body>
      <div className='flex flex-col items-start'>
        {Object.entries(MENU_ITEMS).map(([title, items]) => (
          <Accordion key={title} title={title}>
            <div className='flex flex-col items-start'>
              {items.map((menu) => (
                <Accordion key={menu.title} title={menu.title}>
                  {menu.menu?.map((subItem) => (
                    <a
                      href={subItem.url}
                      className='block py-1 ml-2'
                      key={subItem.subtitle}
                    >
                      {subItem.subtitle}
                    </a>
                  ))}
                </Accordion>
              ))}
            </div>
          </Accordion>
        ))}
        <Link
          href='/advertise'
          className='py-1.5 font-medium text-gray-600 capitalize'
        >
          Advertise
        </Link>
        <Link
          href='/help'
          className='py-1.5 font-medium text-gray-600 capitalize'
        >
          Help
        </Link>
      </div>
    </Sidebar.Body>
    <Sidebar.Footer>
      {!uid ? (
        <>
          <Link
            href='/login'
            className='py-2 block w-full border border-primary-500 rounded-full text-primary-500 text-center mt-1.5 font-medium capitalize'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='py-2 block w-full bg-primary-500 font-medium border border-primary-500 rounded-full text-white text-center mt-1.5 capitalize'
          >
            Join now
          </Link>
        </>
      ) : (
        <Link href={`/user/${uid}`} className='flex items-center '>
          <Initials name={displayName || ''} className='mr-2' />

          {displayName || ''}
        </Link>
      )}
    </Sidebar.Footer>
  </Sidebar>
)

const pathWithFixedNav: string[] = []

const Navbar = () => {
  const router = useRouter()
  const url = router.pathname
  const navCls = useMemo(
    () => (pathWithFixedNav.includes(url) ? 'fixed' : 'relative'),
    [url]
  )
  const [open, setOpen] = useState(false)
  const uid = useAppSelector(selectUid)
  const userDisplayName = useAppSelector(selectDisplayName)
  const userRoles = useAppSelector(selectUserRoles)

  const dispatch = useAppDispatch()

  return (
    <nav
      className={`${navCls} z-30 flex items-center justify-center w-full h-16 bg-white/90 border-b-2 border-white/80 top`}
    >
      <div className='relative w-full'>
        <NavSidebar
          open={open}
          setOpen={setOpen}
          uid={uid}
          displayName={userDisplayName}
        />
        <Container className='flex items-center justify-center w-full h-6'>
          <div className='hidden w-full py-2 lg:flex'>
            <PopoverGroup className='z-40 flex items-center space-x-4'>
              <MenuItem title='Buy' />
              <MenuItem title='Rent' />
              <MenuItem title='Sell' />
              <MenuItem title='Home loans' />
              <MenuItem title='Agent finder' />
            </PopoverGroup>
            <PopoverGroup className='z-40 flex items-center ml-auto space-x-4'>
              <MenuItem title='Manage rentals' />
              <TextLink title='Advertise' url='/advertise' />
              <TextLink title='Help' url='/help' />

              {!uid ? (
                <>
                  <ButtonLink title='Login' url='/login' />
                  <ButtonLink title='Join now' url='/signup' />
                </>
              ) : (
                <PopoverParent>
                  <PopoverButton>
                    <Initials name={userDisplayName || ''} size='sm' />
                  </PopoverButton>
                  <PopoverPanelMainMenu className='flex-col items-end gap-1'>
                    <SubMenuLink url='/user'>My Account</SubMenuLink>
                    <SubMenuLink url='/wishlist'>Wishlist</SubMenuLink>
                    <SubMenuLink url='/messages'>Messages</SubMenuLink>
                    {userRoles?.includes('agent') ? (
                      <SubMenuLink url='/homes/new'>Add new home</SubMenuLink>
                    ) : (
                      <SubMenuLink url={`/user/${uid}`}>
                        Become agent
                      </SubMenuLink>
                    )}
                    <SubMenuLink url={`/user/${uid}`}>
                      <button type='button' onClick={() => dispatch(signout())}>
                        logout
                      </button>
                    </SubMenuLink>
                  </PopoverPanelMainMenu>
                </PopoverParent>
              )}
            </PopoverGroup>
          </div>
          <div className='flex justify-end w-full lg:hidden'>
            <button type='button' onClick={() => setOpen((state) => !state)}>
              <MenuIcon className='w-8 h-8 text-primary-600' />
            </button>
          </div>
          <Link href='/' className='absolute font-black text-primary-600 '>
            {/* ZILLOW */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Brand />
          </Link>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar
