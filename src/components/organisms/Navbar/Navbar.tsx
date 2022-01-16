import { Popover } from '@headlessui/react'
import { syncBuiltinESMExports } from 'module'
import { useState } from 'react'
import Link from 'src/components/atoms/Link'
import PopoverParent, {
  PopoverButton,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'

export interface INavbarProps {}

const menu = [
  {
    title: 'Buy',
    submenu: [
      {
        title: 'Homes for Sale',
        submenu: [
          { displayName: 'Homes for Sale', url: '/' },
          { displayName: 'Foreclosures', url: '/' },
          { displayName: 'For sale by owner', url: '/' },
          { displayName: 'Open houses', url: '/' },
          { displayName: 'New construction', url: '/' },
          { displayName: 'Coming soon', url: '/' },
          { displayName: 'Recent home sales', url: '/' },
          { displayName: 'All homes', url: '/' },
        ],
      },
      {
        title: 'Resources',
        submenu: [
          { displayName: 'Buyers Guide', url: '/' },
          { displayName: 'Foreclosure center', url: '/' },
          { displayName: 'Real estate app', url: '/' },
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
          { displayName: 'Rental Buildings', url: '/' },
          { displayName: 'Apartments for rent', url: '/' },
          { displayName: 'Houses for rent', url: '/' },
          { displayName: 'All rental listings', url: '/' },
          { displayName: 'All rental buildings', url: '/' },
        ],
      },
      {
        title: 'Renter tools',
        submenu: [
          { displayName: 'Applications', url: '/' },
          { displayName: 'Payments', url: '/' },
          { displayName: 'Leases', url: '/' },
          { displayName: 'Affordability calculator', url: '/' },
          { displayName: 'Renters guide', url: '/' },
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
          { displayName: 'Explore your options', url: '/' },
          { displayName: `See your home's Zestimate`, url: '/' },
          { displayName: 'Home values', url: '/' },
          { displayName: 'Sellers guide', url: '/' },
        ],
      },
      {
        title: 'Selling options',
        submenu: [
          { displayName: 'Sell with Zillow Offers', url: '/' },
          { displayName: `Find a seller's agent`, url: '/' },
          { displayName: 'Post For Sale by Owner', url: '/' },
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
          { displayName: 'Mortgage lenders', url: '/' },
          { displayName: 'HELOC lenders', url: '/' },
          { displayName: 'Mortgage rates', url: '/' },
          { displayName: 'Refinance rates', url: '/' },
          { displayName: 'All mortgage rates', url: '/' },
        ],
      },
      {
        title: 'Calculators',
        submenu: [
          { displayName: 'Mortgage calculator', url: '/' },
          { displayName: 'Refinance calculator', url: '/' },
          { displayName: 'Affordability calculator', url: '/' },
          { displayName: 'Amortization calculator', url: '/' },
          { displayName: 'Debt-to-Income calculator', url: '/' },
        ],
      },
      {
        title: 'Resources',
        submenu: [
          { displayName: 'Lender reviews', url: '/' },
          { displayName: 'Mortgage learning center', url: '/' },
          { displayName: 'Mortgages app', url: '/' },
          { displayName: 'Lender resource center', url: '/' },
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
          { displayName: 'Real estate agents', url: '/' },
          { displayName: 'Property managers', url: '/' },
          { displayName: 'Home inspectors', url: '/' },
          { displayName: 'Other pros', url: '/' },
          { displayName: 'Home improvement pros', url: '/' },
          { displayName: 'Home builders', url: '/' },
          { displayName: 'Real estate photographers', url: '/' },
        ],
      },
      {
        title: "I'm a pro",
        submenu: [
          { displayName: 'Agent advertising', url: '/' },
          { displayName: 'Agent resource center', url: '/' },
          { displayName: 'Create a free agent account', url: '/' },
          { displayName: 'Real estate business plan', url: '/' },
          { displayName: 'Real estate agent scripts', url: '/' },
          { displayName: 'Listing flyer templates', url: '/' },
        ],
      },
    ],
  },
]

const menu2 = [
  {
    title: 'Rentals',
    submenu: [
      {
        title: 'Rental Management Tools',
        submenu: [
          { displayName: 'My Listings', url: '/' },
          { displayName: 'Messages', url: '/' },
          { displayName: 'Applications', url: '/' },
          { displayName: 'Leases', url: '/' },
          { displayName: 'Payments', url: '/' },
        ],
      },
      {
        title: 'Learn more',
        submenu: [
          { displayName: 'Zillow Rental Manager', url: '/' },
          { displayName: 'Price My Rental', url: '/' },
          { displayName: 'Resource Center', url: '/' },
          { displayName: 'Help Center', url: '/' },
        ],
      },
    ],
  },
  { title: 'Advertise', submenu: [] },
  { title: 'Help', submenu: [] },
  {
    title: 'login',
    component: (
      <Link
        href='/login'
        className='px-3 py-1 text-sm text-black uppercase border border-black rounded-full text-bold'
      >
        Login
      </Link>
    ),
    submenu: [],
  },
  {
    title: 'join now',
    component: (
      <Link
        href='/signup'
        className='px-3 py-1 text-sm text-white uppercase border rounded-full text-bold border-primary-500 bg-primary-500'
      >
        Join now
      </Link>
    ),
    submenu: [],
  },
]

const Navbar = () => {
  const [hover, setHover] = useState(false)

  return (
    <nav className='fixed top-0 z-20 flex items-center justify-center w-full h-16 bg-white border-b-2 border-white shadow-sm border-opacity-30 bg-opacity-70 backdrop-filter backdrop-blur '>
      <div className='relative w-full'>
        <div className='container flex items-center justify-center w-full h-6 mx-auto'>
          <div className='hidden w-full py-2 md:flex'>
            <Popover.Group className='z-40 flex items-center space-x-4'>
              {menu.map((item, index) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>{item.title}</PopoverButton>
                  <PopoverPanel className='w-full py-3'>
                    <div className='container flex gap-6 mx-auto'>
                      {item.submenu.map((subitem, subindex) => (
                        <div key={subitem.title}>
                          <div className='font-bold' key={subitem.title}>
                            {subitem.title}
                          </div>
                          {subitem.submenu.map((subsubitem) => (
                            <div key={subsubitem}>{subsubitem}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </PopoverParent>
              ))}
            </Popover.Group>
            <Popover.Group className='z-40 flex items-center ml-auto space-x-4'>
              {menu2.map((item, index) => (
                <PopoverParent key={item.title}>
                  <PopoverButton>{item.title}</PopoverButton>
                  {item.submenu.length > 0 && (
                    <PopoverPanel className='w-full py-3'>
                      <div className='container flex flex-row-reverse gap-6 mx-auto'>
                        {item.submenu.map((subitem) => (
                          <div key={subitem.title}>
                            <div className='font-bold' key={subitem.title}>
                              {subitem.component
                                ? subitem.component
                                : subitem.title}
                            </div>
                            {subitem.submenu?.map((subsubitem) => (
                              <Link
                                href={subsubitem.url}
                                key={subsubitem.displayName}
                              >
                                {subsubitem.displayName}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </PopoverPanel>
                  )}
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
