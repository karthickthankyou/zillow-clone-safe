import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Shadows from './Shadows'

export default {
  title: '_foundations/Shadows',
  component: Shadows,
} as ComponentMeta<typeof Shadows>

const Layout = ({
  children,
  heading,
  description,
}: {
  children: React.ReactNode
  heading: string
  description?: string
}) => (
  <div className='bg-gray-100'>
    <div className='container p-2 mx-auto space-y-10'>
      <div className='max-w-lg p-6 mx-auto '>
        <h1 className='mb-4 text-3xl font-thin'>{heading}</h1>
        <h1 className='mb-8 text-gray-600'>{description}</h1>
        <div className='grid grid-cols-1 gap-3 mt-3'>{children}</div>
      </div>
    </div>
  </div>
)

const Template: ComponentStory<typeof Shadows> = () => (
  <Layout heading='Shadows'>
    {[
      'shadow-none',
      'shadow-inner',
      'shadow-sm',
      'shadow-md',
      'shadow-lg',
      'shadow-xl',
      'shadow-2xl',
    ].map((shadow) => (
      <div
        key={shadow}
        className={`px-2 py-4 mt-2 rounded ${shadow} bg-gray-50 border border-white`}
      >
        {shadow}
      </div>
    ))}
  </Layout>
)
const ColoredTemplate: ComponentStory<typeof Shadows> = () => (
  <div>
    <Layout
      heading='Colored shadows'
      description='Add transparency to your taste. The recommended amount is 20%.'
    >
      {[
        ' shadow-black/20',
        ' shadow-primary-500/20',
        ' shadow-gray-500/20',
        ' shadow-red-500/20',
        ' shadow-green-500/20',
        ' shadow-yellow-500/20',
      ].map((shadow) => (
        <div
          key={shadow}
          className={`px-2 py-4 shadow-xl mt-2 rounded ${shadow} bg-gray-50/50 border border-white`}
        >
          {shadow}
        </div>
      ))}
    </Layout>
    <Layout
      heading='Colored shadows with colored borders'
      description='Shadows and borders work together.'
    >
      {[
        'border border-black shadow-black/20',
        'border border-primary-500 shadow-primary-500/20',
        'border border-gray-500 shadow-gray-500/20',
        'border border-red-500 shadow-red-500/20',
        'border border-green-500 shadow-green-500/20',
        'border border-yellow-500 shadow-yellow-500/20',
      ].map((shadow) => (
        <div
          key={shadow}
          className={`px-2 py-4 shadow-xl mt-2 rounded ${shadow} bg-gray-50/50 border border-white`}
        >
          {shadow}
        </div>
      ))}
    </Layout>
    <Layout
      heading='Colored shadows with full opacity'
      description='Remember. Shadows with full opacity are awful.'
    >
      {[
        'shadow-black',
        'shadow-primary-500',
        'shadow-gray-500',
        'shadow-red-500',
        'shadow-green-500',
        'shadow-yellow-500',
      ].map((shadow) => (
        <div
          key={shadow}
          className={`px-2 py-4 shadow-xl mt-2 rounded ${shadow} bg-gray-50/50 border border-white`}
        >
          {shadow}
        </div>
      ))}
    </Layout>
  </div>
)

export const Primary = Template.bind({})
export const ColoredShadows = ColoredTemplate.bind({})
