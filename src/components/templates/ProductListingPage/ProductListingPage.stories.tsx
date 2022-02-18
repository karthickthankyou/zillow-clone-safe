import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import ProductListingPage from './ProductListingPage'

export default {
  title: 'templates/ProductListingPage',
  component: ProductListingPage,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof ProductListingPage>

const Template: ComponentStory<typeof ProductListingPage> = () => (
  <div className='container mx-auto'>
    <ProductListingPage />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
