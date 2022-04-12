/* eslint-disable react/jsx-props-no-spreading */
import NextImage, { ImageProps } from 'next/image'

const Image = ({
  className,
  src,
  width = 240,
  height = 240,
  layout = 'responsive',
  alt = '',
  quality = 75,
  ...props
}: ImageProps) => {
  const imgWidth = layout === 'fill' ? undefined : width
  const imgHeight = layout === 'fill' ? undefined : height
  const imgSrc =
    src ||
    'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/nopicture_fi31cv.jpg'

  return (
    <NextImage
      className={`object-cover ${className}`}
      src={imgSrc}
      width={imgWidth}
      height={imgHeight}
      layout={layout}
      alt={alt}
      quality={quality}
      placeholder='blur'
      blurDataURL='/images/blur.png'
      {...props}
    />
  )
}

export default Image
