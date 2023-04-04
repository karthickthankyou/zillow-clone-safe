import { ReactElement } from 'react'
import CheckIcon from '@heroicons/react/outline/CheckIcon'
import XIcon from '@heroicons/react/outline/XIcon'

export interface ITypographyProps {}

const NotOk = ({ className }: { className?: string }) => (
  <div
    className={`items-center bg-red-200 text-red-900 inline-block p-1 text-xs mb-2 ${className}`}
  >
    <XIcon className='w-4 h-4' />
  </div>
)

const Ok = ({ className }: { className?: string }) => (
  <div
    className={`inline-block items-center text-xs bg-primary-200 p-1 text-primary-900 mb-2 ${className}`}
  >
    <CheckIcon className='w-4 h-4' />
  </div>
)

const Heading = ({ children }: { children: React.ReactNode }) => (
  <div className='mt-2 mb-4 text-xl font-bold'>{children}</div>
)

const Description = ({ children }: { children: React.ReactNode }) => (
  <div className='max-w-sm mt-2 mb-6 text-gray-600'>{children}</div>
)
const SampleText = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={`p-6 bg-gray-100 shadow-inner ${className}`}>{children}</div>
)

export const RenderScale = ({
  id,
  title,
  display = 'Hello World',
  input,
}: {
  id?: string
  title: string
  display?: string | ReactElement
  input: { title: string; size?: string }[]
}) => (
  <div className='mt-8' id={id}>
    <div className='text-2xl '>{title}</div>
    <div className='grid grid-cols-1 gap-4 mt-4 -ml-2'>
      {input.map((style) => (
        <div
          key={style.title}
          className='pl-2 mt-8 border-l border-primary-200'
        >
          <div className='inline-block px-2 py-0.5 text-xs text-primary-800 rounded-r-full border border-primary-200 shadow-lg shadow-primary-500/20'>
            {style.title}
          </div>

          <div className={`${style.title} mt-2 ml-2`}>{display}</div>
        </div>
      ))}
    </div>
  </div>
)

const Typography = () => (
  <div>
    <div className='container mx-auto space-y-12'>
      <div className='mt-4 mb-8 text-2xl'>Typography guidelines</div>

      <div>
        <Heading>Letter Spacing</Heading>
        <Description>
          Have wider letter spacing for smaller letters and tighter spacing for
          larger text sizes.
        </Description>
        <SampleText className='space-y-6 divide-y'>
          <div>
            <NotOk />
            <div className='text-sm tracking-tighter '>Hello World</div>
            <div className='text-4xl tracking-widest'>Hello World</div>
          </div>
          <div>
            <Ok />
            <div className='text-sm tracking-widest '>Hello World</div>
            <div className='text-4xl tracking-normal'>Hello World</div>
          </div>
        </SampleText>
      </div>

      <div>
        <Heading>Line Height</Heading>

        <Description>
          Have taller line heights for smaller letters and decently short line
          heights for larger text sizes.
        </Description>
        <SampleText className='space-y-6'>
          <div>
            <NotOk />
            <div className='max-w-xs pt-2 text-sm leading-no-gap'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              necessitatibus ut magnam qui eius officiis cupiditate ad nostrum
              ipsa iure, eaque atque obcaecati eveniet.
            </div>
            <div className='max-w-sm text-3xl leading-loose'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div>
            <Ok />
            <div className='max-w-xs pt-2 text-sm leading-loose'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              necessitatibus ut magnam qui eius officiis cupiditate ad nostrum
              ipsa iure, eaque atque obcaecati eveniet.
            </div>
            <div className='max-w-sm mt-4 text-3xl leading-tight'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
        </SampleText>
      </div>
    </div>
  </div>
)

export default Typography
