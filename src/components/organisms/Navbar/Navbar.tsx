import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'
import { ReactElement, useMemo } from 'react'
import Link from 'src/components/atoms/Link'
import PopoverParent, {
  PopoverButton,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'

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
  { title: 'Advertise', submenu: [] },
  { title: 'Help', submenu: [] },
  {
    title: 'login',
    titleComponent: (
      <Link
        href='/login'
        className='px-4 py-1.5 text-sm text-black capitalize bg-white rounded-full text-bold'
      >
        Login
      </Link>
    ),
    submenu: [],
  },
  {
    title: 'join now',
    titleComponent: (
      <Link
        href='/signup'
        className='px-4 py-1.5 text-sm text-white capitalize border rounded-full text-bold border-primary-500 bg-primary-500'
      >
        Join now
      </Link>
    ),
    submenu: [],
  },
]

const MenuPopoverPanel = ({
  items,
}: {
  items: MenuType[number]['submenu']
}) => {
  if (!items) return null

  return (
    <PopoverPanel className='w-full py-3'>
      <div className='container flex gap-6 mx-auto'>
        {items.map((item) => (
          <div key={item.title}>
            <div className='font-bold' key={item.title}>
              {item.title}
            </div>
            {item.submenu.map((subitem) => (
              <a href={subitem.url} className='block' key={subitem.subtitle}>
                {subitem.subtitle}
              </a>
            ))}
          </div>
        ))}
      </div>
    </PopoverPanel>
  )
}

const Navbar = () => {
  const url = useRouter().pathname
  const navCls = useMemo(() => url === '/' && 'fixed', [url])

  return (
    <nav
      className={`${navCls} z-30 flex items-center justify-center w-full h-16 bg-white border-b-2 border-white top border-opacity-30 bg-opacity-80 backdrop-filter backdrop-blur`}
    >
      <div className='relative w-full'>
        <div className='container flex items-center justify-center w-full h-6 mx-auto'>
          <div className='hidden w-full py-2 md:flex'>
            <Popover.Group className='z-40 flex items-center space-x-4'>
              {menu.map((item) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>{item.title}</PopoverButton>
                  <MenuPopoverPanel items={item.submenu} />
                </PopoverParent>
              ))}
            </Popover.Group>
            <Popover.Group className='z-40 flex items-center ml-auto space-x-4'>
              {menu2.map((item) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>
                    {item.titleComponent || item.title}
                  </PopoverButton>
                  <MenuPopoverPanel items={item.submenu} />
                </PopoverParent>
              ))}
            </Popover.Group>
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
