import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PopoverMenu, {
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from './PopoverMenu'

export default {
  title: 'src/components/molecules/PopoverMenu',
  component: PopoverMenu,
} as ComponentMeta<typeof PopoverMenu>

const Template: ComponentStory<typeof PopoverMenu> = () => (
  <div>
    <PopoverMenu>
      <PopoverButton>
        Expand <span aria-hidden>▾</span>
      </PopoverButton>
      <PopoverOverlay />
      <PopoverPanel>
        <label className='flex items-center select-none'>
          <input type='checkbox' className='mr-1' />
          Houses
        </label>
        <label className='flex items-center select-none'>
          <input type='checkbox' className='mr-1' />
          Townhomes
        </label>
        <label className='flex items-center select-none'>
          <input type='checkbox' className='mr-1' />
          Multifamily
        </label>
        <label className='flex items-center select-none'>
          <input type='checkbox' className='mr-1' />
          Condos
        </label>
      </PopoverPanel>
    </PopoverMenu>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
