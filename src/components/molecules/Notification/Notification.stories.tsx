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
const storeTwoMessages = createStore(combineReducers({ utils: utilsReducer }), {
  utils: {
    notifications: [
      {
        id: '01',
        message: (
          <div className='max-w-md'>
            <h2 className='text-lg font-semibold'>Me first!</h2>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              illum hic placeat?
            </p>
          </div>
        ),
      },
      {
        id: '02',
        message: (
          <div className='max-w-md'>
            <h2 className='text-lg font-semibold'>No. Look at me.</h2>
            <p className='mt-2'>
              Lorem ipsum consectetur adipisicing elit. Numquam illum hic
              placeat?
            </p>
          </div>
        ),
      },
      {
        id: '03',
        message: (
          <div className='max-w-md'>
            <h2 className='text-lg font-semibold'>Meh. Who cares.</h2>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              illum hic?
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

export const MultipleMessages = Template.bind({})
MultipleMessages.args = {}
MultipleMessages.decorators = [
  (story) => <Provider store={storeTwoMessages}>{story()}</Provider>,
]
