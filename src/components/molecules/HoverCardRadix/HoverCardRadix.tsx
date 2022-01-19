import React from 'react'

import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

// // Exports
// export const HoverCard = HoverCardPrimitive.Root
// export const HoverCardTrigger = HoverCardPrimitive.Trigger
// export const HoverCardContent = StyledContent
// export const HoverCardArrow = StyledArrow

// Your app...

export interface IHoverCardRadixProps {}

const HoverCardDemo = () => (
  <div className='flex justify-around'>
    <HoverCardPrimitive.Root defaultOpen openDelay={300}>
      <HoverCardPrimitive.Trigger asChild>
        <a href='/'>
          <img
            className='w-12 h-12 rounded-full '
            src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
          />
        </a>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content>
        <a href='/' className='w-56 p-3 text-white bg-black'>
          hello
        </a>
        <a href='/' className='w-56 p-3 text-white bg-black'>
          hello 2
        </a>
        <a href='/' className='w-56 p-3 text-white bg-black'>
          hello 2
        </a>
        <HoverCardPrimitive.Arrow offset={4} />
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <a href='/'>
          <img
            className='w-12 h-12 rounded-full '
            src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
          />
        </a>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content>
        <a className='w-56 p-3 text-white bg-black'>hello</a>
        <a className='w-56 p-3 text-white bg-black'>hello 2</a>
        <a className='w-56 p-3 text-white bg-black'>hello 3</a>
        <HoverCardPrimitive.Arrow offset={4} />
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  </div>
)

export default HoverCardDemo
