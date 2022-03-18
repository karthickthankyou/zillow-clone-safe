import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'

import { createStore, combineReducers } from '@reduxjs/toolkit'
import utilsReducer from 'src/store/utils/utilsStore'
import Notification from './Notification'

export default {
  title: 'molecules/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = () => <Notification />

const store = createStore(combineReducers({ utils: utilsReducer }), {
  utils: {
    notifications: [
      {
        id: 'string',
        message: (
          <div className='max-w-md'>
            <h2 className='text-lg font-semibold'>Notification</h2>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              illum hic placeat?
            </p>
          </div>
        ),
      },
    ],
  },
})

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
Primary.decorators = [(story) => <Provider store={store}>{story()}</Provider>]
