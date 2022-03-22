import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PopoverParent, {
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from './PopoverMenuItem'

export default {
  title: 'molecules/PopoverMenuItem',
  component: PopoverParent,
} as ComponentMeta<typeof PopoverParent>

const Template: ComponentStory<typeof PopoverParent> = () => (
  <div className='relative'>
    <PopoverParent>
      <PopoverButton>Menu button</PopoverButton>
      <PopoverPanel>
        <div className='max-w-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          placeat nostrum natus!
        </div>
      </PopoverPanel>
    </PopoverParent>
  </div>
)
const WithOverlayTemplate: ComponentStory<typeof PopoverParent> = () => (
  <div className='relative'>
    <PopoverParent>
      <PopoverOverlay />
      <PopoverButton>Menu button</PopoverButton>
      <PopoverPanel>
        <div className='max-w-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          placeat nostrum natus!
        </div>
      </PopoverPanel>
    </PopoverParent>
  </div>
)

export const Primary = Template.bind({})
export const WithOverlay = WithOverlayTemplate.bind({})
