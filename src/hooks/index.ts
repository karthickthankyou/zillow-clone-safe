import { RefObject, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  map,
  Subject,
  tap,
  delay,
  throttleTime,
  takeUntil,
  timer,
  switchMap,
} from 'rxjs'
import { useAppDispatch, useAppSelector } from 'src/store'
import {
  addNotification,
  removeNotification,
  resetNotification,
} from 'src/store/utils/utilsStore'
import { NotificationType } from 'src/types'
import { setHighlightedHomeId } from 'src/store/home/homeSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { selectUser } from 'src/store/user'

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

export const useScrollTo = <T = HTMLDivElement | null>() => {
  const interactiveMapRef = useRef<T>(null)

  const executeScroll = () =>
    interactiveMapRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  return [interactiveMapRef, executeScroll] as const
}

const notifySubject$ = new Subject<Omit<NotificationType, 'id'>>()
export const notify = ({
  message,
  type = 'info',
  position = 'bottom-center',
}: Omit<NotificationType, 'id'>) => {
  // Add map bounds into the data as default parameters.
  notifySubject$.next({ message, type, position })
}

export const useNotification = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const subscription = notifySubject$
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((v) => ({ ...v, id: uuidv4() })),
        tap((v) => dispatch(addNotification(v))),
        delay(4000),
        tap((v) => dispatch(removeNotification(v.id))),
        catchError(() => EMPTY)
      )
      .subscribe()
    return () => {
      dispatch(resetNotification())
      subscription.unsubscribe()
    }
  }, [dispatch])
}

const debouncedDispatchSubject$ = new Subject<{
  payload: any
  type: string
}>()
export const debouncedDispatch = (action: { payload: any; type: string }) => {
  debouncedDispatchSubject$.next(action)
}

export const useDebouncedDispatch = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const subscription = debouncedDispatchSubject$
      .pipe(
        debounceTime(200),
        tap((v) => dispatch(v)),
        catchError(() => EMPTY)
      )
      .subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [dispatch])
}

export const useKeypress = (key: any, action: () => void) => {
  useEffect(() => {
    const onKeyup = (e: { key: any }) => {
      if (e.key === key) action()
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [action, key])
}

const onHover$ = new Subject<{
  type: string
  payload: any
}>()
const onLeave$ = new Subject()

const highlightHome$ = onHover$.pipe(
  switchMap((v) =>
    timer(200).pipe(
      takeUntil(onLeave$),
      map(() => v)
    )
  )
)

export const startLongHoverDispatch = (action: {
  type: string
  payload: any
}) => {
  onHover$.next(action)
}

export const stopLongHoverDispatch = () => {
  onLeave$.next(null)
}

export const useLongHoverDispatch = () => {
  const disptach = useAppDispatch()
  useEffect(() => {
    const sub = highlightHome$.subscribe((v) => {
      disptach(v)
    })

    return () => {
      sub.unsubscribe()
    }
  }, [disptach])
}

export const useRedirectLoggedInUsers = () => {
  const user = useAppSelector(selectUser)
  const router = useRouter()
  if (user.data.user?.uid) {
    notify({ message: 'You are already logged in', type: 'warning' })
    router.push('/')
  }
}
export const useRedirectUnAuthenticatedUsers = () => {
  const user = useAppSelector(selectUser)
  const router = useRouter()
  console.log('user in user page: ', user)
  if (!user.data.user?.uid) {
    notify({ message: 'You are not logged in', type: 'warning' })
    typeof window !== 'undefined' && router.push('/login')
  }
}
