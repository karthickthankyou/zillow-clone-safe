import { mount } from '@cypress/react'
import { sampleMyHome } from 'src/lib/util'
import MyHomesCard from './MyHomesCard'

describe('MyHomesCard Component', () => {
  it('MyHomesCard renders', () => {
    mount(<MyHomesCard home={sampleMyHome} />)
  })
})
