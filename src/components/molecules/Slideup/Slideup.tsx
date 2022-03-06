import { ReactNode } from 'react'
import { Transition } from '@headlessui/react'
import useTriggerOnScroll from 'src/hooks'

interface Props {
  children: ReactNode
  triggerPoint?: number
  transition?: {
    enter: string
    enterFrom: string
    enterTo: string
    leave: string
    leaveFrom: string
    leaveTo: string
  }
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
  children,
  triggerPoint = 0.75,
  transition = transitionDefault,
}: Props) => {
  const [show, el] = useTriggerOnScroll({ triggerPoint })

  return (
    <>
      <div ref={el} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Transition show={show} {...transition}>
        {children}
      </Transition>
    </>
  )
}

export default SlideUp
