export interface ISuboptionProps {
  title?: string
  value: string
}

const Suboption = ({ title, value }: ISuboptionProps) => (
  <div className='flex gap-1'>
    {title && <div className='text-black '>{title}:</div>}
    <div className='text-gray-600'>{value}</div>
  </div>
)

export default Suboption
