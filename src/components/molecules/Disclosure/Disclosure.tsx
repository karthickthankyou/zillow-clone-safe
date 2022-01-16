import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { ReactElement } from 'react'

export interface IDisclosureProps {
  title: string
  className?: string
  children: ReactElement
}

const MyDisclosure = ({ title, className, children }: IDisclosureProps) => (
  <Disclosure as='div' className={`${className}`}>
    {({ open }) => (
      <>
        <Disclosure.Button className='flex justify-between w-full p-3 font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
          <span>{title}</span>
          <ChevronUpIcon
            className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
          />
        </Disclosure.Button>
        <Disclosure.Panel className='px-3 pb-3'>{children}</Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export default MyDisclosure
