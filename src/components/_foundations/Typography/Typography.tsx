import { ReactElement } from 'react'

export interface ITypographyProps {}

const RenderScale = ({
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
  <div className='mt-5' id={id}>
    <div className='text-2xl '>{title}</div>
    <div className='grid grid-cols-1 gap-4 mt-3 -ml-2'>
      {input.map((style) => (
        <div key={style.title} className='pl-2 border-l border-primary-200'>
          <div className='flex'>
            <div className='inline-block px-1 py-0.5 text-xs text-primary-800 bg-primary-100 rounded-sm'>
              {style.title}
            </div>
            <div className='inline-block  px-1 py-0.5 text-xs text-gray-700 bg-gray-50 rounded-sm ml-1'>
              {style.size}
            </div>
          </div>
          <div className={`${style.title} mt-2`}>{display}</div>
        </div>
      ))}
    </div>
  </div>
)

const Typography = () => (
  <div>
    <div className='container mx-auto'>
      <h1 className='text-3xl font-thin'>Typography</h1>
      {/* <p className="max-w-md mt-2 mb-4 text-sm text-gray-700 ">
        Text comprise of a huge part of UI. This section discusses how we can
        use limited
      </p> */}
      {/* Example for font weight */}
      <RenderScale
        title='Font size'
        input={[
          { title: 'text-xs', size: '12px' },
          { title: 'text-sm', size: '14px' },
          { title: 'text-base', size: '16px' },
          { title: 'text-lg', size: '18px' },
          { title: 'text-xl', size: '24px' },
          { title: 'text-2xl', size: '32px' },
          { title: 'text-3xl', size: '80px' },
          { title: 'text-4xl', size: '160px' },
        ]}
      />
      <RenderScale
        title='Font Weight'
        input={[
          { title: 'font-thin', size: '100' },
          { title: 'font-extralight', size: '200' },
          { title: 'font-light', size: '300' },
          { title: 'font-normal', size: '400' },
          { title: 'font-medium', size: '500' },
          { title: 'font-semibold', size: '600' },
          { title: 'font-bold', size: '700' },
          { title: 'font-extrabold', size: '800' },
          { title: 'font-black', size: '900' },
        ]}
      />
      <RenderScale
        id='letterSpacing'
        title='Letter Spacing'
        input={[
          { title: 'tracking-tighter' },
          { title: 'tracking-tight' },
          { title: 'tracking-normal' },
          { title: 'tracking-wide' },
          { title: 'tracking-wider' },
          { title: 'tracking-widest' },
        ]}
      />
      <RenderScale
        title='Line height'
        display={
          <div className='inline-block bg-gray-50'>
            Hello World <br />
            Lorem ipsum dolor sit amet consectetur.
          </div>
        }
        input={[
          { title: 'leading-no-gap' },
          { title: 'leading-extra-tight' },
          { title: 'leading-none' },
          { title: 'leading-tight' },
          { title: 'leading-snug' },
          { title: 'leading-normal' },
          { title: 'leading-relaxed' },
          { title: 'leading-loose' },
        ]}
      />
      <RenderScale
        title='Font Family'
        input={[
          { title: 'font-sans' },
          { title: 'font-serif' },
          { title: 'font-mono' },
        ]}
      />
      <div className='mt-24 mb-8 text-2xl'>Guidelines</div>

      <div className='text-xl'>Letter Spacing</div>
      <div className='inline-block px-2 py-1 mt-4 text-red-800 bg-red-100 border-t border-red-600 '>
        BAD
      </div>
      <div className='bg-red-50 '>
        <div className='pt-2 text-sm tracking-tighter'>Hello World</div>
        <div className='text-3xl tracking-widest'>Hello World</div>
      </div>
      <div className='inline-block px-2 py-1 mt-4 border-t bg-primary-100 text-primary-800 border-primary-600'>
        GOOD
      </div>
      <div className='bg-primary-50'>
        <div className='pt-2 text-sm tracking-widest'>Hello World</div>
        <div className='text-3xl tracking-tight'>Hello World</div>
      </div>

      <div className='text-xl'>Line Height</div>
      <div className='inline-block px-2 py-1 mt-4 text-red-800 bg-red-100 border-t border-red-600 '>
        BAD
      </div>
      <div className=' bg-red-50'>
        <div className='max-w-xs pt-2 text-sm leading-no-gap'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          necessitatibus ut magnam qui eius officiis cupiditate ad nostrum ipsa
          iure, eaque atque obcaecati eveniet.
        </div>
        <div className='text-3xl leading-loose'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
      <div className='inline-block px-2 py-1 mt-4 border-t bg-primary-100 text-primary-800 border-primary-600'>
        GOOD
      </div>
      <div className='bg-primary-50'>
        <div className='max-w-xs pt-2 text-sm leading-loose'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          necessitatibus ut magnam qui eius officiis cupiditate ad nostrum ipsa
          iure, eaque atque obcaecati eveniet.
        </div>
        <div className='text-3xl leading-none'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
      </div>
    </div>
  </div>
)

export default Typography
