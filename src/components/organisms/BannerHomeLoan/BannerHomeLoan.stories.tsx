import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerHomeLoan from './BannerHomeLoan'

export default {
  title: 'organisms/BannerHomeLoan',
  component: BannerHomeLoan,
} as ComponentMeta<typeof BannerHomeLoan>

const Template: ComponentStory<typeof BannerHomeLoan> = (args) => (
  <BannerHomeLoan {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
