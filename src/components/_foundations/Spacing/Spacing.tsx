export interface ISpacingProps {}

const Spacing = () => (
  <div className='container mx-auto'>
    <div className=' min-w-max'>
      <h1 className='mb-3 text-3xl font-thin'>Spacing</h1>
      {[
        ['w-0', ' 0px'],
        ['w-px', '1px'],
        ['w-0.5', '0.125rem'],
        ['w-1', '0.25rem'],
        ['w-1.5', '0.375rem'],
        ['w-2', '0.5rem'],
        ['w-2.5', '0.625rem'],
        ['w-3', '0.75rem'],
        ['w-3.5', '0.875rem'],
        ['w-4', '1rem'],
        ['w-5', '1.25rem'],
        ['w-6', '1.5rem'],
        ['w-7', '1.75rem'],
        ['w-8', '2rem'],
        ['w-9', '2.25rem'],
        ['w-10', '2.5rem'],
        ['w-11', '2.75rem'],
        ['w-12', '3rem'],
        ['w-14', '3.5rem'],
        ['w-16', '4rem'],
        ['w-20', '5rem'],
        ['w-24', '6rem'],
        ['w-28', '7rem'],
        ['w-32', '8rem'],
        ['w-36', '9rem'],
        ['w-40', '10rem'],
        ['w-44', '11rem'],
        ['w-48', '12rem'],
        ['w-52', '13rem'],
        ['w-56', '14rem'],
        ['w-60', '15rem'],
        ['w-64', '16rem'],
        ['w-72', '18rem'],
        ['w-80', '20rem'],
        ['w-96', '24rem'],
        ['w-112', '28rem'],
        ['w-128', '32rem'],
        ['w-144', '36rem'],
        ['w-160', '40rem'],
        ['w-176', '44rem'],
        ['w-192', '48rem'],
        ['w-208', '52rem'],
      ].map(([size, text]) => (
        <div key={size} className='flex items-center my-2 -ml-8 text-sm'>
          <div className='w-6 mr-2 text-right text-gray-500'>
            {size.split('-')[1]}
          </div>
          <div className={`h-3  ${size} bg-blue-500 rounded-sm`} />
          <div className='w-6 px-3 text-gray-600'>{text}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Spacing
