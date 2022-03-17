import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Wrapper } from 'src/components/atoms/utils'
import Accordion from './Accordion'

export default {
  title: 'molecules/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Wrapper>
    <Accordion {...args} />
  </Wrapper>
)

const AccordionListTemplate: ComponentStory<typeof Accordion> = () => (
  <Wrapper>
    <Accordion title='Title 1'>
      <div>Body 1</div>
    </Accordion>
    <Accordion title='Title 2'>
      <div>Body 2</div>
    </Accordion>
    <Accordion title='Title 3'>
      <div>Body 3</div>
    </Accordion>
  </Wrapper>
)
const AccordionListTemplateLoose: ComponentStory<typeof Accordion> = () => (
  <Wrapper>
    <Accordion title='Title 1' className='py-3'>
      <div>Body 1</div>
    </Accordion>
    <Accordion title='Title 2' className='py-3'>
      <div>Body 2</div>
    </Accordion>
    <Accordion title='Title 3' className='py-3'>
      <div>Body 3</div>
    </Accordion>
  </Wrapper>
)
const NestedAccordionListTemplate: ComponentStory<typeof Accordion> = () => (
  <Wrapper>
    <Accordion title='I have an accodion inside me!' className='py-3'>
      <Accordion title='I have one too.' className='py-3'>
        <Accordion title='I have nothing. 🙄' className='py-3'>
          <div>You have me... 😟</div>
        </Accordion>
      </Accordion>
    </Accordion>
  </Wrapper>
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
