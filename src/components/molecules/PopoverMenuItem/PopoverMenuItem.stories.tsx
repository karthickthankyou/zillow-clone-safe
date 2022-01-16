import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from 'src/components/atoms/Link'
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
      <PopoverButton>Hello</PopoverButton>
      <PopoverOverlay />
      <PopoverPanel>
        <Link href='/'>Helo World</Link>
        <Link href='/'>Helo World 2</Link>
        <Link href='/'>Helo World 3</Link>
        <label htmlFor='checkbox'>
          <input type='checkbox' />
          Click me
        </label>
      </PopoverPanel>
    </PopoverParent>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
