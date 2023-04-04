import Link from 'src/components/atoms/Link/Link'
import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon'
import HomeIcon from '@heroicons/react/solid/HomeIcon'
import HeartIcon from '@heroicons/react/solid/HeartIcon'
import SearchIcon from '@heroicons/react/solid/SearchIcon'
import LockClosedIcon from '@heroicons/react/solid/LockClosedIcon'
import PlusCircleIcon from '@heroicons/react/solid/PlusCircleIcon'
import PhotographIcon from '@heroicons/react/solid/PhotographIcon'
import ChatIcon from '@heroicons/react/solid/ChatIcon'
import ClipboardListIcon from '@heroicons/react/solid/ClipboardListIcon'
import UserCircleIcon from '@heroicons/react/solid/UserCircleIcon'
import UserGroupIcon from '@heroicons/react/solid/UserGroupIcon'
import { selectUid } from 'src/store/user/userSlice'

import React from 'react'
import { useAppSelector } from 'src/store'
import { IconBase } from '@react-icons/all-files/lib'
import styles from './Topography.module.css'

export interface ITripGuideProps {}

const Section = ({
  title,
  href,
  className,
  position,
  Icon = LocationMarkerIcon,
  enabled = true,
}: {
  title: string
  href: string
  className?: string
  position?: { top?: string; left?: string; right?: string; bottom?: string }
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  enabled?: boolean
}) => (
  <div
    style={position}
    className={`absolute ${className}  group translate-x-1/2 -translate-y-1/2`}
  >
    <div className='relative inline-flex items-center -skew-x-12 -skew-y-12 rotate-12'>
      {/* <div className='w-2 h-2 skew-y-12 rounded-full bg-red animate-ping' /> */}
      <div className='absolute z-10 ml-1 transition-all opacity-0 whitespace-nowrap translate-y-1/3 left-full group-hover:translate-y-0 group-hover:opacity-100'>
        {title}
      </div>
      <Link href={href}>
        <Icon
          className={`flex-shrink-0 w-6 h-6 -z-10 group-hover:fill-primary ${
            enabled
              ? 'fill-black cursor-pointer'
              : 'fill-gray cursor-not-allowed'
          }`}
        />
      </Link>
    </div>
  </div>
)

const TripGuide = () => {
  const uid = useAppSelector(selectUid)

  return (
    <div className='px-16 py-24 overflow-scroll no-scrollbar'>
      <div className='flex flex-col items-center justify-center w-full mt-2 space-y-2 '>
        <div
          className={`px-4 pt-4 pb-16 max-w-lg  skew-x-12 relative  h-96 -rotate-12 w-full bg-primary/10 shadow-lg border-x-8 border-t-8  border-white rounded-xl ${styles.bgTopography}`}
          style={{ borderBottomWidth: '1.25rem' }}
        >
          <div
            style={{ top: '100%', left: '0%' }}
            className='absolute ml-1 text-xs text-gray'
          >
            Site map
          </div>
          <Section
            position={{ bottom: '2%', left: '2%' }}
            title='Home'
            href='/'
            Icon={HomeIcon}
          />
          <Section
            title='Search'
            position={{ top: '80%', right: '40%' }}
            href='/homes'
            Icon={SearchIcon}
          />
          <Section
            title='Product page'
            position={{ top: '92%', right: '32%' }}
            href='/homes/68'
            Icon={PhotographIcon}
          />
          <Section
            title='Authentication'
            position={{ top: '64%', left: '24%' }}
            href='/signup'
            Icon={LockClosedIcon}
          />
          <Section
            title='Wishlist'
            position={{ top: '8%', right: '76%' }}
            href='/wishlist'
            Icon={HeartIcon}
            enabled={!!uid}
          />
          <Section
            title='Messages'
            position={{ top: '0%', right: '92%' }}
            href='/messages'
            Icon={ChatIcon}
            enabled={!!uid}
          />
          <Section
            title='User'
            position={{ top: '16%', right: '12%' }}
            href='/user'
            Icon={UserCircleIcon}
            enabled={!!uid}
          />
          <Section
            title='Add new home'
            position={{ top: '2%', right: '12%' }}
            href='/homes/new'
            Icon={PlusCircleIcon}
            enabled={!!uid}
          />
          <Section
            title='My homes'
            position={{ top: '8%', right: '2%' }}
            href='/homes/myhomes'
            Icon={ClipboardListIcon}
            enabled={!!uid}
          />
          <Section
            title='Agents (not implemented)'
            position={{ top: '52%', right: '12%' }}
            href='/agents'
            Icon={UserGroupIcon}
          />
        </div>
      </div>
    </div>
  )
}

export default TripGuide
