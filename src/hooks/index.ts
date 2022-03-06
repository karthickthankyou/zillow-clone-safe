import { RefObject, useEffect, useRef, useState } from 'react'

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const useScroll = (): [
  [number, number],
  RefObject<HTMLDivElement>,
  () => void,
  (distance: number) => void
] => {
  const [scrollPos, setScrollPos] = useState<[number, number]>([0, 0])
  const scrollEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = scrollEl.current
    element?.addEventListener('wheel', (e) => e.preventDefault)

    return () => {
      element?.removeEventListener('wheel', (e) => e.preventDefault)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scroll = (distance: number) => {
    if (scrollEl.current) {
      const leftPos = scrollEl.current.scrollLeft + distance
      scrollEl.current?.scrollTo({ left: leftPos, behavior: 'smooth' })
    }
  }

  // const getScrollWidthEnd = (scrollElement: RefObject<HTMLDivElement>) => {
  //   if (scrollElement?.current) {
  //     const { scrollWidth, clientWidth } = scrollElement.current
  //     return scrollWidth - clientWidth
  //   }
  //   return 0
  // }

  const scrollListesener = () => {
    const start = scrollEl.current ? scrollEl?.current.scrollLeft : 0
    const end = (() => {
      if (scrollEl?.current) {
        const { scrollWidth, clientWidth } = scrollEl.current
        return scrollWidth - clientWidth
      }
      return 0
    })()
    setScrollPos([start, end - start])
  }
  useEffect(() => {
    scrollListesener()
  }, [])

  return [scrollPos, scrollEl, scrollListesener, scroll]
}

export default function useTriggerOnScroll({
  triggerPoint,
}: {
  triggerPoint: number
}): [boolean, RefObject<HTMLDivElement>] {
  const [triggered, setTriggered] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function getOffset(element: HTMLElement) {
      let x = 0
      let y = 0
      let el = element
      while (
        el &&
        !Number.isNaN(el.offsetLeft) &&
        !Number.isNaN(el.offsetTop)
      ) {
        x += el.offsetLeft - el.scrollLeft
        y += el.offsetTop - el.scrollTop
        el = el.offsetParent as HTMLElement
      }
      return { top: y, left: x }
    }
    function hasScrolledTo(element: HTMLElement) {
      if (!element) return false
      const { top } = getOffset(element)
      // const offset = 0
      const offset = window.innerHeight * triggerPoint
      return top - offset <= window.pageYOffset
    }

    function onScroll() {
      const el = ref.current

      const viewed = hasScrolledTo(el as HTMLElement)
      if (viewed && !triggered) {
        window.removeEventListener('scroll', onScroll)
        setTriggered(true)
      } else if (!viewed && triggered) {
        window.removeEventListener('scroll', onScroll)
        setTriggered(false)
      }
    }
    setTimeout(() => {
      window.addEventListener('scroll', onScroll)
    }, 10)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [ref, triggerPoint, triggered])
  return [triggered, ref]
}

export const useScrollTo = () => {
  const interactiveMapRef = useRef<HTMLDivElement | null>(null)

  const executeScroll = () =>
    interactiveMapRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  return [interactiveMapRef, executeScroll] as const
}
