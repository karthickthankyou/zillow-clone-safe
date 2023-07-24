/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import NextImage from 'next/image'
import fallbackImg from 'public/rowan-heuvel-bjej8BY1JYQ-unsplash.jpeg'

export type IImageProps = React.ComponentProps<typeof NextImage> & {
  fallbackSrc?: string
  className?: string
}

const Image = (props: IImageProps) => {
  const { src, fallbackSrc = fallbackImg, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <NextImage
      {...rest}
      alt={alt}
      src={imgSrc}
      width={300}
      height={300}
      className='object-cover h-full'
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default Image
