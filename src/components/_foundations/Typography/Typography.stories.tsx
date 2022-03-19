import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography, { RenderScale } from './Typography'

export default {
  title: '_foundations/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = () => <Typography />
const FontSizeTemplate: ComponentStory<typeof Typography> = () => (
  <RenderScale
    title='Font size'
    input={[
      { title: 'text-xs', size: '12px' },
      { title: 'text-sm', size: '14px' },
      { title: 'text-base', size: '16px' },
      { title: 'text-lg', size: '18px' },
      { title: 'text-xl', size: '24px' },
      { title: 'text-2xl', size: '32px' },
      { title: 'text-3xl', size: '80px' },
      { title: 'text-4xl', size: '160px' },
    ]}
  />
)
const FontWeightTemplate: ComponentStory<typeof Typography> = () => (
  <RenderScale
    title='Font Weight'
    input={[
      { title: 'font-thin', size: '100' },
      { title: 'font-extralight', size: '200' },
      { title: 'font-light', size: '300' },
      { title: 'font-normal', size: '400' },
      { title: 'font-medium', size: '500' },
      { title: 'font-semibold', size: '600' },
      { title: 'font-bold', size: '700' },
      { title: 'font-extrabold', size: '800' },
      { title: 'font-black', size: '900' },
    ]}
  />
)
const LetterSpacingTemplate: ComponentStory<typeof Typography> = () => (
  <RenderScale
    id='letterSpacing'
    title='Letter Spacing'
    input={[
      { title: 'tracking-tighter' },
      { title: 'tracking-tight' },
      { title: 'tracking-normal' },
      { title: 'tracking-wide' },
      { title: 'tracking-wider' },
      { title: 'tracking-widest' },
    ]}
  />
)
const LetterHeightTemplate: ComponentStory<typeof Typography> = () => (
  <RenderScale
    title='Line height'
    display={
      <div className='inline-block bg-gray-50'>
        Hello World <br />
        Lorem ipsum dolor sit amet consectetur.
      </div>
    }
    input={[
      { title: 'leading-no-gap' },
      { title: 'leading-extra-tight' },
      { title: 'leading-none' },
      { title: 'leading-tight' },
      { title: 'leading-snug' },
      { title: 'leading-normal' },
      { title: 'leading-relaxed' },
      { title: 'leading-loose' },
    ]}
  />
)
const FontFamilyTemplate: ComponentStory<typeof Typography> = () => (
  <RenderScale
    title='Font Family'
    input={[
      { title: 'font-sans' },
      { title: 'font-serif' },
      { title: 'font-mono' },
    ]}
  />
)

export const FontSize = FontSizeTemplate.bind({})
FontSize.args = {}
FontSize.parameters = {}

export const FontWeight = FontWeightTemplate.bind({})
FontWeight.args = {}
FontWeight.parameters = {}

export const LetterSpacing = LetterSpacingTemplate.bind({})
LetterSpacing.args = {}
LetterSpacing.parameters = {}

export const LetterHeight = LetterHeightTemplate.bind({})
LetterHeight.args = {}
LetterHeight.parameters = {}

export const FontFamily = FontFamilyTemplate.bind({})
FontFamily.args = {}
FontFamily.parameters = {}

export const Guidelines = Template.bind({})
Guidelines.args = {}
Guidelines.parameters = {}
