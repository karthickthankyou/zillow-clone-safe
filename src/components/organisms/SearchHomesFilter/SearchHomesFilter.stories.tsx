import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import mapReducer, {
  initialState as mapInitialState,
} from 'src/store/map/mapSlice'
import { produce } from 'immer'
import SearchHomesFilter from './SearchHomesFilter'

export default {
  title: 'organisms/SearchHomesFilter',
  component: SearchHomesFilter,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof SearchHomesFilter>

const Template: ComponentStory<typeof SearchHomesFilter> = (args) => (
  <SearchHomesFilter {...args} />
)

const storeZoom6 = createStore(combineReducers({ map: mapReducer }), {
  map: produce(mapInitialState, (draft) => {
    draft.debouncedViewport = {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 6,
    }
  }),
})
const storeZoom12 = createStore(combineReducers({ map: mapReducer }), {
  map: produce(mapInitialState, (draft) => {
    draft.debouncedViewport = {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 12,
    }
  }),
})

export const SidebarOpen = Template.bind({})
SidebarOpen.args = {
  sidebarOpenDefault: true,
}
SidebarOpen.decorators = [
  (story: any) => <Provider store={storeZoom12}>{story()}</Provider>,
]

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  (story: any) => <Provider store={storeZoom12}>{story()}</Provider>,
]

export const FiltersDisappearWhenZoomedOut = Template.bind({})
FiltersDisappearWhenZoomedOut.args = {}
FiltersDisappearWhenZoomedOut.decorators = [
  (story: any) => <Provider store={storeZoom6}>{story()}</Provider>,
]
