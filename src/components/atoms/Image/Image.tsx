/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import NextImage from 'next/image'
import fallbackImg from 'public/rowan-heuvel-bjej8BY1JYQ-unsplash.jpeg'

export type IImageProps = React.ComponentProps<typeof NextImage> & {
  fallbackSrc?: string
  className?: string
}

const Image = (props: IImageProps) => {
  const { src, fallbackSrc = fallbackImg, className, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        {...rest}
        alt={alt}
        src={imgSrc}
        className='object-cover h-full'
        layout='fill'
        onError={() => {
          setImgSrc(fallbackSrc)
        }}
      />
    </div>
  )
}

export default Image
