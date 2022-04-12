import { mount } from '@cypress/react'
import TripGuide from './TripGuide'

describe('TripGuide Component', () => {
  it('TripGuide renders', () => {
    mount(<TripGuide />)
  })
})
