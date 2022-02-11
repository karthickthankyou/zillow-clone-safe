import {
  createContext,
  ReactElement,
  useContext,
  useMemo,
  ReactChild,
  ReactNode,
  JSX,
} from 'react'

// import { HiOutlineChevronRight } from '@react-icons/all-files/hi/HiOutlineChevronRight'
import { useScroll } from 'src/hooks'

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

const RightArrow = ({
  children,
  className,
  distance = -120,
}: {
  children: ReactElement | string
  distance?: number
  className?: string
}) => {
  const { scrollPos, scroll } = useScrollContext()
  // const show = scrollPos[ 0 ] > 0
  const show = useMemo(() => scrollPos[0] > 0, [scrollPos])
  return (
    <div>
      <button
        type='button'
        className={`${className} ${
          show ? 'opacity-100' : 'opacity-10 cursor-auto'
        }`}
        onClick={() => scroll(distance)}
      >
        {children}
      </button>
    </div>
  )
}

const LeftArrow = ({
  children,
  className,
  distance = 120,
}: {
  children: ReactElement | string
  className?: string
  distance?: number
}) => {
  const { scrollPos, scroll } = useScrollContext()
  const show = useMemo(() => scrollPos[1] > 0, [scrollPos])

  return (
    <div>
      <button
        type='button'
        className={`${className} ${
          show ? 'opacity-100' : 'opacity-10 cursor-auto'
        }`}
        onClick={() => scroll(distance)}
      >
        {children}
      </button>
    </div>
  )
}

export type HScrollBodyProps = {
  children?: JSX.Element<{ id: string }>[] | JSX.Element<{ id: string }>
  className?: string
}

const HScrollBody = ({ children, className }: HScrollBodyProps) => {
  const { scrollEl, scrollListener, scrollPos } = useScrollContext()
  // const showLeft = scrollPos[0] > 0
  // const showRight = scrollPos[1] > 0

  // const shadowClasses = useMemo(() => {
  //   if (showLeft && showRight) return 'shadow-inner-lr'
  //   if (showRight) return 'shadow-inner-r'
  //   return 'shadow-inner-l'
  // }, [showLeft, showRight])
  const renderChildren: JSX.Element[] = (() => {
    if (!children) return []
    if (!Array.isArray(children)) return [children]
    return children
  })()

  return (
    <div
      ref={scrollEl}
      onScroll={scrollListener}
      className={`flex w-full py-3 space-x-2 overflow-x-scroll snap-x snap-mandatory scrollbar-hide ${className}`}
    >
      {renderChildren?.map((child) => (
        <div key={child.props.id} className='flex-shrink-0 snap-start'>
          {child}
        </div>
      ))}
    </div>
  )
}

const HScroll = ({ children, className }: IHScrollProps) => {
  const [scrollPos, scrollEl, scrollListener, scroll] = useScroll()

  // const value = {
  //   scrollPos,
  //   scrollEl,
  //   scrollListener,
  //   scroll,
  // }
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
    <div className={`relative ${className} mb-12`}>
      <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
    </div>
  )
}

HScroll.LeftArrow = LeftArrow
HScroll.RightArrow = RightArrow
HScroll.Body = HScrollBody

export default HScroll
