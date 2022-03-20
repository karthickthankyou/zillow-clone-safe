import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Accordion from './Accordion'

export default {
  title: 'molecules/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)

const AccordionListTemplate: ComponentStory<typeof Accordion> = () => (
  <>
    <Accordion title='Title 1'>
      <div>Body 1</div>
    </Accordion>
    <Accordion title='Title 2'>
      <div>Body 2</div>
    </Accordion>
    <Accordion title='Title 3'>
      <div>Body 3</div>
    </Accordion>
  </>
)
const AccordionListTemplateLoose: ComponentStory<typeof Accordion> = () => (
  <>
    <Accordion title='Title 1' className='py-3'>
      <div>Body 1</div>
    </Accordion>
    <Accordion title='Title 2' className='py-3'>
      <div>Body 2</div>
    </Accordion>
    <Accordion title='Title 3' className='py-3'>
      <div>Body 3</div>
    </Accordion>
  </>
)
const NestedAccordionListTemplate: ComponentStory<typeof Accordion> = () => (
  <Accordion title='I have an accodion inside me!' className='py-3'>
    <Accordion title='I have one too.' className='py-3'>
      <Accordion title='I have nothing. 🙄' className='py-3'>
        <div>You have me... 😟</div>
      </Accordion>
    </Accordion>
  </Accordion>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Helo World',
  children: <div>Children</div>,
}
Primary.parameters = {}

export const AccordionList = AccordionListTemplate.bind({})
AccordionList.parameters = {}
export const AccordionListLoose = AccordionListTemplateLoose.bind({})
AccordionListTemplateLoose.parameters = {}
export const NestedAccordionList = NestedAccordionListTemplate.bind({})
NestedAccordionListTemplate.parameters = {}
