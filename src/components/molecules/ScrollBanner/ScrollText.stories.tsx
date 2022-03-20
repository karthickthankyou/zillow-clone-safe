import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrapper } from 'src/components/atoms/utils'
import ScrollText from './ScrollText'

export default {
  title: 'molecules/ScrollText',
  component: ScrollText,
} as ComponentMeta<typeof ScrollText>

const Template: ComponentStory<typeof ScrollText> = (args) => (
  <ScrollText {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  input: ['Hello', 'World', 'How', 'Are', 'You?'],
}
Primary.decorators = [(story) => <Wrapper>{story()}</Wrapper>]

export const AmongTextStyled = Template.bind({})
AmongTextStyled.args = {
  input: ['buying', 'selling', 'renting'],
  className: 'font-bold text-primary-600 ',
}
AmongTextStyled.decorators = [
  (story) => (
    <Wrapper>
      <div className='max-w-md text-gray-600'>
        Whether you’re {story()}, we can help you move forward.
      </div>
    </Wrapper>
  ),
]
