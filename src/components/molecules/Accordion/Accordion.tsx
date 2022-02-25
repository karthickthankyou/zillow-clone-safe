import { ReactElement } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export interface IAccordionProps {
  title: string
  children: ReactElement | ReactElement[]
}

const Accordion = ({ title, children }: IAccordionProps) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className='flex justify-between w-full py-3 font-medium'>
          <span>{title}</span>
          <ChevronUpIcon
            className={`${open ? 'transform rotate-180' : ''} w-5 h-5 `}
          />
        </Disclosure.Button>
        <Disclosure.Panel className='pl-3'>{children}</Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

export default Accordion
