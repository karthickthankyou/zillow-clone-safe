export interface IOptionProps {
  title: string
  content: string[]
}

const Option = ({ title, content }: IOptionProps) => (
  <div>
    <div className='mb-1 font-semibold'>{title}</div>
    {content.map((item) => (
      <div key={item} className='py-0.5 text-gray-600'>
        {item}
      </div>
    ))}
  </div>
)

export default Option
