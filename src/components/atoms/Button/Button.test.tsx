import { mount } from '@cypress/react'
import Button from '.'

describe('button component', () => {
  it('should render with given text', async () => {
    mount(<Button>Click</Button>)
  })
})
