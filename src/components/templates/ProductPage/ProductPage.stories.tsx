import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { homeData } from 'src/mocks/data/homes'
import ProductPage from './ProductPage'

export default {
  title: 'templates/ProductPage',
  component: ProductPage,
} as ComponentMeta<typeof ProductPage>

const Template: ComponentStory<typeof ProductPage> = () => (
  <ProductPage homeData={homeData} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
