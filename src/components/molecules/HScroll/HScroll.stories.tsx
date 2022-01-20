import React, { ReactElement } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HScroll from './HScroll'

export default {
  title: 'molecules/HScroll',
  component: HScroll,
} as ComponentMeta<typeof HScroll>

const childrenItems: ReactElement[] = [
  <div key='Hello' className='px-5 py-2 bg-blue-200 rounded-full'>
    Hello
  </div>,
  <div key='World' className='px-5 py-2 bg-blue-200 rounded-full'>
    World
  </div>,
  <div key='!</' className='px-5 py-2 bg-blue-200 rounded-full'>
    !
  </div>,
  <div key='How' className='px-5 py-2 bg-blue-200 rounded-full'>
    How
  </div>,
  <div key='are' className='px-5 py-2 bg-blue-200 rounded-full'>
    are
  </div>,
  <div key='you' className='px-5 py-2 bg-blue-200 rounded-full'>
    you
  </div>,
  <div key='?</' className='px-5 py-2 bg-blue-200 rounded-full'>
    ?
  </div>,
  <div key='I' className='px-5 py-2 bg-blue-200 rounded-full'>
    I
  </div>,
  <div key='am' className='px-5 py-2 bg-blue-200 rounded-full'>
    am
  </div>,
  <div key='fine' className='px-5 py-2 bg-blue-200 rounded-full'>
    fine
  </div>,
  <div key='Thank' className='px-5 py-2 bg-blue-200 rounded-full'>
    Thank
  </div>,
  <div key='you' className='px-5 py-2 bg-blue-200 rounded-full'>
    you
  </div>,
  <div key='Bye' className='px-5 py-2 bg-blue-200 rounded-full'>
    Bye
  </div>,
]

const Template: ComponentStory<typeof HScroll> = () => (
  <HScroll>
    <HScroll.RightArrow className='absolute left-0 h-full '>
      <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
        &lt;
      </div>
    </HScroll.RightArrow>
    <HScroll.LeftArrow className='absolute right-0 h-full'>
      <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
        &gt;
      </div>
    </HScroll.LeftArrow>
    <HScroll.Body>{[<div key='1'>Helo</div>]}</HScroll.Body>
  </HScroll>
)

const Template2: ComponentStory<typeof HScroll> = () => (
  <HScroll>
    <div className='flex py-2'>
      <h2 className='font-bold'>Some Title</h2>
      <div className='flex ml-auto space-x-2'>
        <HScroll.RightArrow>
          <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
            &lt;
          </div>
        </HScroll.RightArrow>
        <HScroll.LeftArrow>
          <div className='flex items-center justify-center w-6 h-6 bg-white rounded-full'>
            &gt;
          </div>
        </HScroll.LeftArrow>
      </div>
    </div>
    <HScroll.Body className='pb-24'>{[<div key='1'>Helo</div>]}</HScroll.Body>
  </HScroll>
)

export const Absolute = Template.bind({})
Absolute.args = {
  children: childrenItems,
}
Absolute.parameters = {}

export const Relative = Template2.bind({})
Relative.args = {
  children: childrenItems,
}
Relative.parameters = {}
