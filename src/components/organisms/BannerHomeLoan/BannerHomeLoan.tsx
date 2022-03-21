import Image from 'src/components/atoms/Image'
import SlideUp from 'src/components/molecules/Slideup/Slideup'
import { Children } from 'src/types'

export interface IBannerHomeLoanProps {
  reverse?: boolean
  src?: string
  children: Children
}

const BannerSplit = ({
  reverse = false,
  children,
  src = 'https://res.cloudinary.com/thankyou/image/upload/c_fit,q_auto:eco/a_0/v1640717751/nike/misc/surface-0WFE46jwO8o-unsplash_lk8dfy.jpg',
}: IBannerHomeLoanProps) => {
  const flexClass = reverse ? 'flex-row-reverse' : ''
  const skewClass = reverse ? '-skew-y-2' : 'skew-y-2'
  const textAlignClass = reverse
    ? 'items-end text-right'
    : 'items-start text-left'

  return (
    <div className={`md:flex gap-12 bg-opacity-25  ${flexClass}`}>
      <div className={`transform flex-1 ${skewClass} md:h-144 h-64`}>
        <Image
          className='block w-full h-full shadow-md rounded-3xl'
          alt=''
          src={src}
        />
      </div>
      <div
        className={`flex flex-1 flex-col justify-center md:mt-0 mt-8 p-3 ${textAlignClass}`}
      >
        <SlideUp>{children}</SlideUp>
      </div>
    </div>
  )
}

const Heading = ({
  children,
  className,
}: {
  children: Children
  className?: string
}) => (
  <div
    className={`text-4xl font-semibold tracking-tighter text-gradient bg-gradient-to-tr via-black to-primary-500 from-primary-500 ${className}`}
  >
    {children}
  </div>
)

const Description = ({
  children,
  className,
}: {
  children: Children
  className?: string
}) => <div className={`max-w-xs text-gray-700 ${className}`}>{children}</div>

BannerSplit.Heading = Heading
BannerSplit.Description = Description

export default BannerSplit
