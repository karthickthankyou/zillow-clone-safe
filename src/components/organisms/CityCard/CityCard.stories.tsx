import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import CityCard from './CityCard'

export default {
  title: 'organisms/CityCard',
  component: CityCard,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof CityCard>

const Template: ComponentStory<typeof CityCard> = (args) => (
  <CityCard {...args} />
)
const SampleLayoutTemplate: ComponentStory<typeof CityCard> = (args) => (
  <div className='grid grid-cols-3 gap-6'>
    <CityCard {...args} />
    <CityCard {...args} />
    <CityCard {...args} />
    <CityCard {...args} />
    <CityCard {...args} />
    <CityCard {...args} />
    <CityCard {...args} />
    <CityCard {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  id: 'Los Angeles',
  lat: '44.76',
  lng: '-112',
  totalHomes: '2345',
  priceSqft: '220',
  type: 'city',
}
Primary.decorators = [(story) => <div className='max-w-lg'>{story()} </div>]

export const SampleLayout = SampleLayoutTemplate.bind({})
SampleLayout.args = {
  id: 'Los Angeles',
  lat: '44.76',
  lng: '-112',
  totalHomes: '2345',
  priceSqft: '220',
  type: 'city',
}
