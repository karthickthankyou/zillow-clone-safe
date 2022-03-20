import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import fallback from 'src/assets/fallback.jpg'
import Image from './Image'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = ({ src, fallbackSrc }) => (
  <Wrapper>
    <Image
      alt=''
      src={src}
      fallbackSrc={fallbackSrc}
      layout='fill'
      className='w-24 h-24'
    />
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'sdf/sdf.jpg',
  fallbackSrc: fallback as unknown as string,
}
Primary.parameters = {}
