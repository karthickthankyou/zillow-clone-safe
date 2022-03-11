import React from 'react'

export interface IHighButtonProps {
  onClick: () => {}
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text: string
}

const HighText = ({ Icon, text }: IHighButtonProps) => (
  <div className='flex items-center px-4 py-2 space-x-2 text-black transition-all border border-white rounded-full hover:bg-primary-50 hover:shadow-2xl'>
    <Icon className='w-8 h-8 rotate-180' />
    <div>{text}</div>
  </div>
)

export default HighText
