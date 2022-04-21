import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductPageCarousel, { dummyImagedData } from './ProductPageCarousel'

export default {
  title: 'organisms/ProductPageCarousel',
  component: ProductPageCarousel,
} as ComponentMeta<typeof ProductPageCarousel>

const Template: ComponentStory<typeof ProductPageCarousel> = () => (
  <ProductPageCarousel imgs={dummyImagedData.map((item) => item.src)} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
