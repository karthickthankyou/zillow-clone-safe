export interface IOptionProps {
  title: string
  content: undefined | string | string[]
}
export interface IDetailsProps {
  title: string
  content: IOptionProps[]
}

const Option = ({ title, content }: IOptionProps) => {
  const contentDisplay = Array.isArray(content) ? content : [content]
  return (
    <div>
      <div className='mb-1 font-semibold'>{title}</div>
      {contentDisplay.map((item) => (
        <div key={item} className='py-0.5 text-gray-600'>
          {item}
        </div>
      ))}
    </div>
  )
}

const Details = ({ title, content }: IDetailsProps) => (
  <div>
    <div className='mb-4 text-xl font-bold'>{title}</div>
    <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
      {content.map((item) => (
        <Option key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  </div>
)

export default Details
