import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare'
import { IconType } from '@react-icons/all-files'
import Link from 'src/components/atoms/Link'

const Icon = ({ IconInput }: { IconInput: IconType }) => (
  <Link
    href='/'
    className='w-10 h-10 p-1.5 rounded-full text-black bg-gray-100  hover:bg-white'
  >
    <IconInput className='w-full h-full ' />
  </Link>
)

const FooterLink = ({ text }: { text: string }) => (
  <Link href='/' className='block text-gray-600 hover:text-gray-900'>
    <li>{text}</li>
  </Link>
)

const footerItems = [
  'About',
  'Zestimates',
  'Research',
  'Careers',
  'Help',
  'Advertise',
  'Fair Housing Guide',
  'Terms of use',
  'Privacy Portal',
  'Cookie Preference',
  'Blog',
  'AI',
  'Mobile Apps',
  'Trulia',
  'StreetEasy',
  'HotPads',
  'Out East',
  'ShowingTime',
]

const Footer = ({ className }: { className?: string }) => (
  <footer className={` bg-gray-100 ${className}`}>
    <div className='container py-6 mx-auto'>
      <div className='flex py-12'>
        <div className='grid flex-grow space-y-4 text-sm text-gray-500 md:gap-2 lg:grid-cols-4 md:grid-cols-2 md:space-y-0'>
          <ul className='block'>
            {footerItems.slice(0, 5).map((item) => (
              <li key={item}>
                <FooterLink key={item} text={item} />
              </li>
            ))}
          </ul>
          <ul className='block'>
            {footerItems.slice(5, 10).map((item) => (
              <li key={item}>
                <FooterLink key={item} text={item} />
              </li>
            ))}
          </ul>
          <ul className='block'>
            {footerItems.slice(10, 15).map((item) => (
              <li key={item}>
                <FooterLink key={item} text={item} />
              </li>
            ))}
          </ul>
          <ul className='block'>
            {footerItems.slice(15, 18).map((item) => (
              <li key={item}>
                <FooterLink key={item} text={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-3 mt-4 md:justify-end md:mt-0'>
          {[FaYoutube, FaFacebook, FaTwitter, FaInstagramSquare].map(
            (SocialIcon) => (
              <Icon key={SocialIcon.toString()} IconInput={SocialIcon} />
            )
          )}
        </div>
      </div>
      <hr className='my-4 border-gray-200' />
      <div className='justify-between text-xs md:flex'>
        <ul className='flex gap-2'>
          <li>Zillow Clone, Karthick Ragavendran</li>
        </ul>
        <ul className='mt-2 md:space-x-2 md:flex md:mt-0'>
          {['Guides', 'Terms of Sale', 'Company details', 'Privacy Policy'].map(
            (item) => (
              <FooterLink key={item} text={item} />
            )
          )}
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
