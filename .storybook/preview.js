import '../src/globals.css'
import yourTheme from './myTheme'
import * as NextImage from 'next/image'
import { addDecorator } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { handlers } from 'src/mocks/handlers'
// import { urqlDecorator } from '@urql/storybook-addon'

// addDecorator(urqlDecorator)

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

/**
 * Initiaze msw in storybook
 */
initialize({
  serviceWorker: {
    url: '../public/mockServiceWorker.js',
  },
  onUnhandledRequest: ({ method, url }) => {
    console.error(`Unhandled ${method} request to ${url}.

        This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.
        If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
      `)
  },
})
export const decorators = [mswDecorator]

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
  msw: {
    handlers: handlers,
  },
}

if (typeof global.process === 'undefined') {
  console.log('[MSW] Starting worker...')
  const { mswWorker } = require('../src/mocks/mswWorker')
  mswWorker.start()
}

/**
 * This document for msw: https://blog.logrocket.com/using-storybook-and-mock-service-worker-for-mocked-api-responses/
 */
