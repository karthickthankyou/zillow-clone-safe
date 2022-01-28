import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductListingResults from './ProductListingResults'

export default {
  title: 'src/components/organisms/ProductListingResult',
  component: ProductListingResults,
} as ComponentMeta<typeof ProductListingResults>

const Template: ComponentStory<typeof ProductListingResults> = (args) => (
  <ProductListingResults {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
