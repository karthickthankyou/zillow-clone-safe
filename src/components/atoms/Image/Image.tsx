/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import NextImage from 'next/image'
import fallbackImg from 'src/assets/fallback.jpg'

export type IImageProps = React.ComponentProps<typeof NextImage> & {
  fallbackSrc?: string
  className?: string
}

const Image = (props: IImageProps) => {
  const { src, fallbackSrc = fallbackImg, className, alt, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className={`relative w-full ${className} overflow-hidden`}>
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
