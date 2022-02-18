import '../src/globals.css'
import yourTheme from './myTheme'
import * as NextImage from 'next/image'
import { addDecorator } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { urqlDecorator } from '@urql/storybook-addon'

addDecorator(urqlDecorator)

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z'
    />
  ),
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: yourTheme,
  },
  layout: 'fullscreen',
}

// if (!global.process) {
//   const { mswWorker } = require('../src/mocks/mswWorker')
//   mswWorker.start()
// }

/**
 * This document for msw: https://blog.logrocket.com/using-storybook-and-mock-service-worker-for-mocked-api-responses/
 */

// Initialize MSW
initialize({
  serviceWorker: {
    url: '../public/mockServiceWorker.js',
  },
})

addDecorator(mswDecorator)
// Provide the MSW addon decorator globally
// export const decorators = [mswDecorator]
