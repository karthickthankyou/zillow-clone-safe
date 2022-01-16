import Option from 'src/components/templates/ProductPage/Option/Option'

export interface IDetailsProps {
  title: string
  content: { title: string; content: string[] }[]
}

const Details = ({ title, content }: IDetailsProps) => (
  <div>
    <div className='mb-4 text-xl font-bold'>{title}</div>
    <div className='grid grid-cols-3 gap-6'>
      {content.map((item) => (
        <Option key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  </div>
)

export default Details
