import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from 'src/components/organisms/Mapbox/Mapbox'
import { SbReduxProvider } from 'src/lib/sb'
import Popup from './Popup'
import ShowHide from '../ShowHide/ShowHide'
import NotesFixed from '../NotesFixed/NotesFixed'

export default {
  title: 'molecules/Popup',
  component: Popup,
  decorators: [
    (story) => (
      <MapProvider className='h-screen'>
        <Mapbox>{story()}</Mapbox>
      </MapProvider>
    ),
    SbReduxProvider,
  ],
} as ComponentMeta<typeof Popup>

const BugNotification = () => (
  <NotesFixed title='Umm. A bug.'>
    <div>Popup not showing? Try dragging the map.</div>
    <div className='mt-2'>
      Popups are working fine in the application. We need to investigate this
      one.
    </div>
  </NotesFixed>
)

const Template: ComponentStory<typeof Popup> = () => {
  const [open, setOpen] = useState(true)

  return (
    <ShowHide show={open}>
      <Popup latitude={36} longitude={-122} onClose={() => setOpen(false)}>
        <div className='p-3'>Some text</div>
      </Popup>
      <BugNotification />
    </ShowHide>
  )
}
const MultipleTemplate: ComponentStory<typeof Popup> = () => {
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(true)
  return (
    <>
      <BugNotification />
      <ShowHide show={open}>
        <Popup latitude={36} longitude={-122} onClose={() => setOpen(false)}>
          <div className='max-w-sm p-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </Popup>
      </ShowHide>
      <ShowHide show={open2}>
        <Popup latitude={42} longitude={-112} onClose={() => setOpen2(false)}>
          <div className='max-w-sm p-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim id
            tempore quia sit adipisci facilis, error laudantium nisi consectetur
            repellendus repudiandae ut.
          </div>
        </Popup>
      </ShowHide>
    </>
  )
}

export const Primary = Template.bind({})
export const Multiple = MultipleTemplate.bind({})
