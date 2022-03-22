import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerSplit from './BannerHomeLoan'

export default {
  title: 'organisms/BannerHomeLoan',
  component: BannerSplit,
} as ComponentMeta<typeof BannerSplit>

const Template: ComponentStory<typeof BannerSplit> = (args) => (
  <BannerSplit {...args}>
    <BannerSplit.Heading>Find an Agent</BannerSplit.Heading>
    <BannerSplit.Description className='mt-4'>
      Zillow&apos;s directory of local real estate agents and brokers connects
      you with professionals who can help meet your needs.
    </BannerSplit.Description>
    <button
      className='px-8 py-3 mt-6 font-semibold text-white capitalize rounded-full  bg-primary-500' // bg-gradient-to-tr from-primary-400 to-primary-600
      type='button'
    >
      Find agents
    </button>
  </BannerSplit>
)

export const Primary = Template.bind({})
Primary.args = {
  reverse: false,
}
Primary.parameters = {}
