import { ReactElement, useRef, useState } from 'react'
import Image from 'src/components/atoms/Image'
import SlideUp from 'src/components/molecules/Slideup/Slideup'
import useTriggerOnScroll from 'src/hooks'

export interface IBannerHomeLoanProps {
  reverse?: boolean
  title: string
  description: string | ReactElement
  btnText: string
  src?: string
}

const BannerHomeLoan = ({
  reverse = false,
  title,
  description,
  src = 'https://res.cloudinary.com/thankyou/image/upload/c_fit,q_auto:eco/a_0/v1640717751/nike/misc/surface-0WFE46jwO8o-unsplash_lk8dfy.jpg',
  btnText,
}: IBannerHomeLoanProps) => {
  const flexClass = reverse ? 'flex-row-reverse' : ''
  const skewClass = reverse ? '-skew-y-6' : 'skew-y-6'
  const textAlignClass = reverse
    ? 'items-end text-right'
    : 'items-start text-left'

  const [show, el] = useTriggerOnScroll()

  return (
    <div className={`flex gap-6 bg-opacity-25 bg-contain h-144 ${flexClass}`}>
      <div className={`transform ${skewClass} flex-1`}>
        <Image
          className='block w-full h-full shadow-md rounded-3xl'
          alt=''
          src={src}
        />
      </div>
      <div
        className={`flex flex-col justify-center flex-1 p-3 ${textAlignClass} `}
        ref={el}
      >
        <SlideUp show={show}>
          <div className='text-4xl font-semibold tracking-tighter text-gradient bg-gradient-to-tr via-black to-primary-500 from-primary-500'>
            {title}
          </div>
          <div className='max-w-xs mt-2 text-gray-500'>
            {/* Get pre-approved and take a big step toward buying your new home. */}
            {description}
          </div>
          <button
            type='button'
            className='px-4 py-2 mt-12 border rounded-full text-primary-600 border-primary-600'
          >
            {btnText}
          </button>
        </SlideUp>
      </div>
    </div>
  )
}

export default BannerHomeLoan
