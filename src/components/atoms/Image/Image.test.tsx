import React from 'react'
import { render } from '@testing-library/react'
import Image from './Image'

describe('Image Component', () => {
  test('Image renders', () => {
    render(
      <Image
        src='https://via.placeholder.com/150'
        blurDataURL='ttps://via.placeholder.com/10'
        alt=''
      />
    )
  })
})
