import { useEffect, useState } from 'react'
import { config, animated, useTransition } from 'react-spring'

export interface IScrollBannerProps {
  input: string[]
  className: string
}

const ScrollBanner = ({ input, className }: IScrollBannerProps) => {
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % input.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [input.length])

  const markersTransitions = useTransition([input[selected]] || [], {
    keys: (item) => item,
    from: { opacity: 0, transform: 'translateY(6px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },

    // update: { opacity: 1, transform: 'translateY(0px)' },
    config: config.wobbly,
  })

  return (
    <div className='inline-block '>
      {markersTransitions((style, item) => (
        <animated.div key={item} style={style}>
          <div className={className} key={item}>
            {item}
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default ScrollBanner
