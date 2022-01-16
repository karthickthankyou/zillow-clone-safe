import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductPageCarousel from './ProductPageCarousel'

export default {
  title: 'organisms/ProductPageCarousel',
  component: ProductPageCarousel,
} as ComponentMeta<typeof ProductPageCarousel>

const Template: ComponentStory<typeof ProductPageCarousel> = (args) => (
  <ProductPageCarousel {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
