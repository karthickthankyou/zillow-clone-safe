import { ReactElement } from 'react'
import { Disclosure } from '@headlessui/react'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'

export interface IAccordionProps {
  title: string
  children: ReactElement | ReactElement[]
  className?: string
}

const Accordion = ({ title, children, className }: IAccordionProps) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button
          className={`flex justify-between w-full py-2 font-medium ${className}`}
        >
          <span className={open ? 'text-primary-600' : 'text-gray-600'}>
            {title}
          </span>
          <ChevronDownIcon
            className={` ${
              open ? 'transform rotate-180 text-primary-500' : 'text-gray-500'
            } w-5 h-5 `}
          />
        </Disclosure.Button>
        <Disclosure.Panel className='w-full px-4 pb-4 text-gray-600'>
          {children}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export default Accordion
