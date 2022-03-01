import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductListingResults from './ProductListingResults'

export default {
  title: 'organisms/ProductListingResult',
  component: ProductListingResults,
} as ComponentMeta<typeof ProductListingResults>

const Template: ComponentStory<typeof ProductListingResults> = () => (
  <ProductListingResults />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
