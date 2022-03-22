import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SplitLayoutImage from './SplitLayoutImage'

export default {
  title: 'templates/SplitLayoutImage',
  component: SplitLayoutImage,
} as ComponentMeta<typeof SplitLayoutImage>

const Template: ComponentStory<typeof SplitLayoutImage> = (args) => (
  <SplitLayoutImage {...args}>
    <div className='w-full h-full p-4 rounded outline-dashed bg-gray-50 outline-gray-200'>
      Sample child content.
    </div>
  </SplitLayoutImage>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}

// <>
//   <div>
//     This layout is used in auth pages. Have a look at templates/Signin and
//     templates/SignUp.
//   </div>
//   <div>Currently the brand logo is static.</div>
// </>
