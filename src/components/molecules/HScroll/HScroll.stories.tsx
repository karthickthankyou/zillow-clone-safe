import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from 'src/components/atoms/Image'
import HScroll from './HScroll'
import NotesFixed from '../NotesFixed'

export default {
  title: 'molecules/HScroll',
  component: HScroll,
} as ComponentMeta<typeof HScroll>

const data = [
  'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
]

const textData = [
  {
    text: `Today, my son asked "Can I have a book mark?" and I burst into tears.`,
    punch: `11 years old and he still doesn't know my name is Brian.`,
  },
  {
    text: `To the guy who invented zero...`,
    punch: 'thanks for nothing.',
  },
  { text: `Mountains aren't just funny`, punch: 'they are hill areas' },
  {
    text: `Thanks for explaining the word "many" to me.`,
    punch: 'It means a lot.',
  },
  {
    text: `I used to be a banker,`,
    punch: ' but I lost interest.',
  },
  {
    text: `I got an A on my origami assignment`,
    punch: 'when I turned my paper into my teacher',
  },
  {
    text: `What creature is smarter than a talking parrot?`,
    punch: 'A spelling bee.',
  },

  {
    text: `What's red and bad for your teeth?`,
    punch: 'A Brick.',
  },
]

const TemplatePictures: ComponentStory<typeof HScroll> = () => (
  <div className='p-12'>
    <HScroll className='relative flex gap-2 h-28'>
      <HScroll.Body>
        {data.map((item) => (
          <HScroll.Child key={item}>
            <Image
              src={item}
              alt=''
              className='h-full border border-white rounded-lg shadow-md w-44'
            />
          </HScroll.Child>
        ))}
      </HScroll.Body>
      <HScroll.Arrow
        className='absolute left-0 z-10 h-full -translate-x-1/2'
        arrowClassName='shadow-md'
      />
      <HScroll.Arrow
        right
        className='absolute right-0 z-10 h-full translate-x-1/2'
        arrowClassName='shadow-md'
      />
    </HScroll>
  </div>
)
export const Pictures = TemplatePictures.bind({})

const TemplatePicturesArrowTop: ComponentStory<typeof HScroll> = () => (
  <div className='p-12 '>
    <HScroll>
      <div className='flex justify-end space-x-2'>
        <HScroll.Arrow
          className='left-0 z-10 h-full '
          arrowClassName='shadow-md'
        />
        <HScroll.Arrow
          right
          className='right-0 z-10 h-full '
          arrowClassName='shadow-md'
        />
      </div>
      <HScroll.Body className='h-64 gap-2'>
        {data.map((item) => (
          <HScroll.Child key={item}>
            <Image
              src={item}
              alt=''
              className='h-full border border-white rounded-lg shadow-md w-44'
            />
          </HScroll.Child>
        ))}
      </HScroll.Body>
    </HScroll>
  </div>
)
export const PicturesArrowsTop = TemplatePicturesArrowTop.bind({})

const TemplateText: ComponentStory<typeof HScroll> = () => (
  <div className='p-12 '>
    <HScroll className=''>
      <div className='flex justify-end space-x-2'>
        <HScroll.Arrow
          distance={-240}
          className='left-0 z-10 h-full '
          arrowClassName='shadow-md'
        />
        <HScroll.Arrow
          distance={-240}
          right
          className='right-0 z-10 h-full '
          arrowClassName='shadow-md'
        />
      </div>
      <HScroll.Body className='gap-2 mb-6'>
        {textData.map((item) => (
          <HScroll.Child key={item.text} className='pb-6'>
            <div className='max-w-xs p-3 border border-white rounded shadow-lg '>
              <div className='text-lg'>{item.text}</div>
              <div className='mt-2 text-sm text-gray-600'>{item.punch}</div>
            </div>
          </HScroll.Child>
        ))}
      </HScroll.Body>
    </HScroll>
    <NotesFixed>Dad jokes.</NotesFixed>
  </div>
)
export const Text = TemplateText.bind({})
