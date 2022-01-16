import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductListingPage from './ProductListingPage'

export default {
  title: 'templates/ProductListingPage',
  component: ProductListingPage,
} as ComponentMeta<typeof ProductListingPage>

const Template: ComponentStory<typeof ProductListingPage> = (args) => (
  <div className='container mx-auto'>
    <ProductListingPage />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
