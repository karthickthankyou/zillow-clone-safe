import { useState } from 'react'
import Image from 'src/components/atoms/Image'
import HScroll from 'src/components/molecules/HScroll'

export interface IProductPageCarouselProps {}
const data = [
  {
    id: '0',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  },
  {
    id: '1',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  },
  {
    id: '2',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  },
  {
    id: '3',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  },
  {
    id: '4',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  },
  {
    id: '5',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  },
  {
    id: '6',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  },
  {
    id: '7',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  },
  {
    id: '8',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  },
  {
    id: '9',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg',
  },
  {
    id: '10',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640617959/nike/house1_tmtonc.jpg',
  },
  {
    id: '11',
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1640674085/nike/villas_xev2wm.jpg',
  },
]

const ProductPageCarousel = () => {
  const [selected, setSelected] = useState(0)
  return (
    <div className='min-h-[30rem] flex flex-col'>
      <Image
        key={data[selected].id}
        src={data[selected].src}
        alt=''
        className='flex-grow h-full border border-white rounded-lg bg-primary/10 '
      />

      <HScroll className='relative flex h-28'>
        <HScroll.Body>
          {data.map((item, index) => (
            <HScroll.Child key={item.id}>
              <Image
                src={item.src}
                alt=''
                className='h-full border border-white rounded-lg shadow-md w-44'
                onClick={() => setSelected(index)}
              />
            </HScroll.Child>
          ))}
        </HScroll.Body>
        <HScroll.Arrow
          className='absolute left-0 z-10 h-full'
          arrowClassName='shadow-md'
        />

        <HScroll.Arrow
          right
          className='absolute right-0 z-10 h-full '
          arrowClassName='shadow-md'
        />
      </HScroll>
    </div>
  )
}

export default ProductPageCarousel
