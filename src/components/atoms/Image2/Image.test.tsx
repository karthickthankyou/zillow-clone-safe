import React from 'react'
import { mount } from '@cypress/react'
import Image from './Image'

describe('Image Component', () => {
  it('Image renders', () => {
    mount(
      <Image
        src='https://via.placeholder.com/150'
        blurDataURL='https://via.placeholder.com/10'
        alt=''
      />
    )
  })
})
