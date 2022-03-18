const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            // ident: 'postcss',
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      // include: path.resolve(__dirname, '../'),
      include: /node_modules/,
      // include: /node_modules/,
      type: 'javascript/auto',
    })
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ]
    return config
  },
}
