import { Fragment, ReactNode, RefObject } from 'react'
import { Transition } from '@headlessui/react'

interface Props {
  show: boolean
  children: ReactNode
  transition?: {
    enter: string
    enterFrom: string
    enterTo: string
    leave: string
    leaveFrom: string
    leaveTo: string
  }
  ref?: RefObject<HTMLDivElement>
}

const transitionDefault = {
  enter: 'transform transition ease-in-out duration-1000',
  enterFrom: 'opacity-0 translate-y-3',
  enterTo: 'opacity-100 translate-y-0',
  leave: 'transform transition ease-in-out duration-1000',
  leaveFrom: 'opacity-100 translate-y-0',
  leaveTo: 'opacity-0 translate-y-3',
}

const SlideUp = ({
  show,
  children,
  transition = transitionDefault,
  ref,
}: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Transition show={show} {...transition}>
    {children}
  </Transition>
)

export default SlideUp
