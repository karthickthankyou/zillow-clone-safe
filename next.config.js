/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs')

const prod = process.env.NODE_ENV === 'production'

const moduleExports = withPWA({
  // Your existing module.exports
  reactStrictMode: true,

  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    // disable: process.env.NODE_ENV === 'development',
    disable: !prod,
    buildExcludes: [/middleware-manifest.json$/],
    maximumFileSizeToCacheInBytes: 3000000,
  },
  images: {
    domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      'wp-tid.zillowstatic.com',
    ],
  },
})

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
