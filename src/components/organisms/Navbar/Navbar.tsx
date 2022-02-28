// import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'
import { ReactElement, useMemo, useState } from 'react'

import Link from 'src/components/atoms/Link'
import PopoverParent, {
  PopoverButton,
  PopoverGroup,
  PopoverPanelMainMenu,
} from 'src/components/molecules/PopoverMenuItem'
import Sidebar from 'src/components/molecules/Sidebar'
import Accordion from 'src/components/molecules/Accordion'
import MenuIcon from '@heroicons/react/outline/MenuIcon'

export interface INavbarProps {}

type MenuType = {
  title: string
  titleComponent?: ReactElement
  submenu?: {
    title: string
    submenu: { subtitle: string; url: string }[]
  }[]
}[]

const menu: MenuType = [
  {
    title: 'Buy',
    submenu: [
      {
        title: 'Homes for Sale',
        submenu: [
          { subtitle: 'Homes for Sale', url: '/homes' },
          { subtitle: 'Foreclosures', url: '/' },
          { subtitle: 'For sale by owner', url: '/' },
          { subtitle: 'Open houses', url: '/' },
          { subtitle: 'New construction', url: '/' },
          { subtitle: 'Coming soon', url: '/' },
          { subtitle: 'Recent home sales', url: '/' },
          { subtitle: 'All homes', url: '/' },
        ],
      },
      {
        title: 'Resources',
        submenu: [
          { subtitle: 'Buyers Guide', url: '/' },
          { subtitle: 'Foreclosure center', url: '/' },
          { subtitle: 'Real estate app', url: '/' },
        ],
      },
    ],
  },
  {
    title: 'Rent',
    submenu: [
      {
        title: 'Search for Rentals',
        submenu: [
          { subtitle: 'Rental Buildings', url: '/' },
          { subtitle: 'Apartments for rent', url: '/' },
          { subtitle: 'Houses for rent', url: '/' },
          { subtitle: 'All rental listings', url: '/' },
          { subtitle: 'All rental buildings', url: '/' },
        ],
      },
      {
        title: 'Renter tools',
        submenu: [
          { subtitle: 'Applications', url: '/' },
          { subtitle: 'Payments', url: '/' },
          { subtitle: 'Leases', url: '/' },
          { subtitle: 'Affordability calculator', url: '/' },
          { subtitle: 'Renters guide', url: '/' },
        ],
      },
    ],
  },
  {
    title: 'Sell',
    submenu: [
      {
        title: 'Resources',
        submenu: [
          { subtitle: 'Explore your options', url: '/' },
          { subtitle: `See your home's Zestimate`, url: '/' },
          { subtitle: 'Home values', url: '/' },
          { subtitle: 'Sellers guide', url: '/' },
        ],
      },
      {
        title: 'Selling options',
        submenu: [
          { subtitle: 'Sell with Zillow Offers', url: '/' },
          { subtitle: `Find a seller's agent`, url: '/' },
          { subtitle: 'Post For Sale by Owner', url: '/' },
        ],
      },
    ],
  },
  {
    title: 'Home Loans',
    submenu: [
      {
        title: 'Shop mortgages',
        submenu: [
          { subtitle: 'Mortgage lenders', url: '/' },
          { subtitle: 'HELOC lenders', url: '/' },
          { subtitle: 'Mortgage rates', url: '/' },
          { subtitle: 'Refinance rates', url: '/' },
          { subtitle: 'All mortgage rates', url: '/' },
        ],
      },
      {
        title: 'Calculators',
        submenu: [
          { subtitle: 'Mortgage calculator', url: '/' },
          { subtitle: 'Refinance calculator', url: '/' },
          { subtitle: 'Affordability calculator', url: '/' },
          { subtitle: 'Amortization calculator', url: '/' },
          { subtitle: 'Debt-to-Income calculator', url: '/' },
        ],
      },
      {
        title: 'Resources',
        submenu: [
          { subtitle: 'Lender reviews', url: '/' },
          { subtitle: 'Mortgage learning center', url: '/' },
          { subtitle: 'Mortgages app', url: '/' },
          { subtitle: 'Lender resource center', url: '/' },
        ],
      },
    ],
  },
  {
    title: 'Agent finder',
    submenu: [
      {
        title: 'Looking for pros',
        submenu: [
          { subtitle: 'Real estate agents', url: '/' },
          { subtitle: 'Property managers', url: '/' },
          { subtitle: 'Home inspectors', url: '/' },
          { subtitle: 'Other pros', url: '/' },
          { subtitle: 'Home improvement pros', url: '/' },
          { subtitle: 'Home builders', url: '/' },
          { subtitle: 'Real estate photographers', url: '/' },
        ],
      },
      {
        title: "I'm a pro",
        submenu: [
          { subtitle: 'Agent advertising', url: '/' },
          { subtitle: 'Agent resource center', url: '/' },
          { subtitle: 'Create a free agent account', url: '/' },
          { subtitle: 'Real estate business plan', url: '/' },
          { subtitle: 'Real estate agent scripts', url: '/' },
          { subtitle: 'Listing flyer templates', url: '/' },
        ],
      },
    ],
  },
]

const menu2: MenuType = [
  {
    title: 'Rentals',
    submenu: [
      {
        title: 'Rental Management Tools',
        submenu: [
          { subtitle: 'My Listings', url: '/' },
          { subtitle: 'Messages', url: '/' },
          { subtitle: 'Applications', url: '/' },
          { subtitle: 'Leases', url: '/' },
          { subtitle: 'Payments', url: '/' },
        ],
      },
      {
        title: 'Learn more',
        submenu: [
          { subtitle: 'Zillow Rental Manager', url: '/' },
          { subtitle: 'Price My Rental', url: '/' },
          { subtitle: 'Resource Center', url: '/' },
          { subtitle: 'Help Center', url: '/' },
        ],
      },
    ],
  },
]

const MenuPopoverPanel = ({
  items,
}: {
  items: MenuType[number]['submenu']
}) => {
  if (!items) return null

  return (
    <PopoverPanelMainMenu className='w-full py-3'>
      <div className='container flex gap-6 mx-auto'>
        {items.map((item) => (
          <div key={item.title}>
            <div className='mb-2 font-semibold' key={item.title}>
              {item.title}
            </div>
            {item.submenu.map((subitem) => (
              <a
                href={subitem.url}
                className='block my-1'
                key={subitem.subtitle}
              >
                {subitem.subtitle}
              </a>
            ))}
          </div>
        ))}
      </div>
    </PopoverPanelMainMenu>
  )
}

const Navbar = () => {
  const url = useRouter().pathname
  const navCls = useMemo(() => (url === '/' ? 'fixed' : 'relative'), [url])
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={`${navCls} z-30  flex items-center justify-center w-full h-16 bg-white/90 border-b-2 border-white/80 top`}
    >
      <div className='relative w-full'>
        <Sidebar open={open} setOpen={setOpen}>
          <Sidebar.Header setOpen={setOpen} />
          <Sidebar.Body>
            <div className='flex flex-col items-start'>
              {[...menu, ...menu2].map((item) => (
                <Accordion key={item.title} title={item.title}>
                  <div className='flex flex-col items-start'>
                    {item.submenu?.map((item2) => (
                      <Accordion key={item2.title} title={item2.title}>
                        {item2.submenu?.map((item3) => (
                          <a
                            href={item3.url}
                            className='block py-1 ml-2'
                            key={item3.subtitle}
                          >
                            {item3.subtitle}
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
          </Sidebar.Footer>
        </Sidebar>
        <div className='container flex items-center justify-center w-full h-6 mx-auto'>
          <div className='hidden w-full py-2 lg:flex'>
            <PopoverGroup className='z-40 flex items-center space-x-4'>
              {menu.map((item) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>{item.title}</PopoverButton>
                  <MenuPopoverPanel items={item.submenu} />
                </PopoverParent>
              ))}
            </PopoverGroup>
            <PopoverGroup className='z-40 flex items-center ml-auto space-x-4'>
              <>
                {menu2.map((item) => (
                  <PopoverParent key={item.title}>
                    <PopoverButton>
                      {item.titleComponent || item.title}
                    </PopoverButton>
                    <MenuPopoverPanel items={item.submenu} />
                  </PopoverParent>
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
                <Link
                  href='/login'
                  className='py-1.5 px-4 text-sm rounded-full border border-primary-600 font-medium text-primary-600 capitalize'
                >
                  Login
                </Link>
                <Link
                  href='/signup'
                  className='py-1.5 px-4 text-sm rounded-full bg-primary-500 border border-primary-500 text-white font-medium capitalize'
                >
                  Join now
                </Link>
              </>
            </PopoverGroup>
          </div>
          <div className='flex justify-end w-full lg:hidden'>
            <button type='button' onClick={() => setOpen((open) => !open)}>
              <MenuIcon className='w-8 h-8 text-primary-600' />
            </button>
          </div>
          <Link href='/' className='absolute font-black text-primary-600 '>
            {/* ZILLOW */}
            <img
              src='https://s.zillowstatic.com/pfs/static/z-logo-default.svg'
              className='w-full h-full'
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
