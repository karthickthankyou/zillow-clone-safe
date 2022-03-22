import Image from '../Image'

export interface IAvatarProps {
  size: 'sm' | 'md' | 'lg'
  src: string
  count?: number
  rounded?: boolean
  shadow?: boolean
  className?: string
}

const Avatar = ({
  size,
  src,
  count = 0,
  rounded = false,
  shadow = false,
  className,
}: IAvatarProps) => {
  const sizeCls = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20 p-0.5',
  }
  return (
    <div className={` overflow-hidden p-1 inline-block relative ${className}`}>
      <div className={`${sizeCls[size]} overflow-hidden  `}>
        <Image
          src={src}
          alt=''
          layout='fill'
          placeholder='blur'
          blurDataURL='https://via.placeholder.com/10'
          className={`object-cover w-full h-full ${
            rounded ? 'rounded-full' : 'rounded'
          } ${shadow && 'shadow-lg'} `}
        />
      </div>

      {count ? (
        <div className='absolute top-0 right-0 flex items-center justify-center p-1 text-xs font-bold text-white bg-black border-2 border-white rounded-full w-7 h-7'>
          {count > 9 ? '9+' : count}
        </div>
      ) : null}
    </div>
  )
}

export default Avatar
