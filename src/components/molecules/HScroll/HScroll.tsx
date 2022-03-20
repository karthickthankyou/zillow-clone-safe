import React, { createContext, ReactElement, useContext, useMemo } from 'react'
import { useScroll } from 'src/hooks'
import ChevronLeftIcon from '@heroicons/react/outline/ChevronLeftIcon'
import { Children } from 'src/types'

export interface IHScrollProps {
  children: ReactElement[] | ReactElement
  className?: string
}

const ScrollContext = createContext([] as any)

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error(
      `A composite Scroll component cannot be rendered outside of the parent HScroll component.`
    )
  }
  return context
}

const getArrowDetails = ({ scrollPos, right, distance }: any) => {
  const show = right ? scrollPos[1] > 0 : scrollPos[0] > 0
  const scrollDistance = right ? -distance : distance
  const arrowClasses = right && 'rotate-180'
  return { show, scrollDistance, arrowClasses }
}

const Arrow = ({
  children,
  className,
  arrowClassName,
  distance = -120,
  right,
}: {
  children?: ReactElement | string
  distance?: number
  className?: string
  arrowClassName?: string
  right?: boolean
}) => {
  const { scrollPos, scroll } = useScrollContext()
  const { show, scrollDistance, arrowClasses } = getArrowDetails({
    scrollPos,
    right,
    distance,
  })

  return (
    <button
      type='button'
      className={`${className} z-20  ${
        show ? 'opacity-100' : 'opacity-10 cursor-auto'
      }`}
      onClick={() => scroll(scrollDistance)}
    >
      {children || (
        <div
          className={`w-10 h-10 p-2 bg-white rounded-full ${arrowClassName}`}
        >
          <ChevronLeftIcon className={` ${arrowClasses} `} />
        </div>
      )}
    </button>
  )
}

export type HScrollBodyProps = {
  children?: ReactElement[] | ReactElement
  className?: string
}

const HScrollBody = ({ children, className }: HScrollBodyProps) => {
  const { scrollEl, scrollListener } = useScrollContext()
  // React.Children.forEach(children, (child) => {
  //   console.log('name =', child)
  // })

  return (
    <div
      ref={scrollEl}
      onScroll={scrollListener}
      className={`flex w-full py-3 space-x-2 overflow-x-scroll snap-x snap-mandatory scrollbar-hide ${className}`}
    >
      {children}
    </div>
  )
}

const Child = ({
  children,
  className,
}: {
  children: Children
  className?: string
}) => <div className={`flex-shrink-0 snap-start ${className}`}>{children}</div>

Child.displayName = 'ScrollChild'

const HScroll = ({ children, className }: IHScrollProps) => {
  const [scrollPos, scrollEl, scrollListener, scroll] = useScroll()

  const value = useMemo(
    () => ({
      scrollPos,
      scrollEl,
      scrollListener,
      scroll,
    }),
    [scroll, scrollEl, scrollListener, scrollPos]
  )

  return (
    <div className={`relative ${className}`}>
      <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
    </div>
  )
}

HScroll.Arrow = Arrow
HScroll.Body = HScrollBody
HScroll.Child = Child

export default HScroll
