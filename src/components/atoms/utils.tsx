import { Children } from 'src/types'

export const Wrapper = ({ children }: { children: Children }) => (
  <div className='max-w-md p-3 mx-auto my-12 bg-white rounded-lg shadow-lg'>
    {children}
  </div>
)
