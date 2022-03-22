import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { homeData } from 'src/mocks/data/homes'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import ProductPage from './ProductPage'

export default {
  title: 'templates/ProductPage',
  component: ProductPage,
  decorators: [SbReduxProvider, SbUrqlProvider],
} as ComponentMeta<typeof ProductPage>

const Template: ComponentStory<typeof ProductPage> = () => (
  <ProductPage home={homeData} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
