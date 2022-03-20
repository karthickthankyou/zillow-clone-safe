import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import ProductListingResults from './ProductListingResults'

export default {
  title: 'organisms/ProductListingResult',
  component: ProductListingResults,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof ProductListingResults>

const Template: ComponentStory<typeof ProductListingResults> = () => (
  <ProductListingResults />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
