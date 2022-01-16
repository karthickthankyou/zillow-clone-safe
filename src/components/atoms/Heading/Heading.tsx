import { ReactElement } from 'react'

export interface IHeadingProps {
  children: string | ReactElement
  variant?: 'heading-0' | 'heading-1' | 'heading-2'
  headerType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  classes?: string
}

const Heading = ({
  children,
  variant = 'heading-0',
  classes = '',
  headerType = 'h1',
}: IHeadingProps) => {
  const variantClasses = {
    'heading-0': 'text-lg mb-2 font-semibold',
    'heading-1': 'text-2xl mb-4 font-semibold',
    'heading-2': 'text-4xl mb-6 font-bold',
  }
  const Header = headerType

  return (
    <Header className={`${variantClasses[variant]} ${classes}`}>
      {children}
    </Header>
  )
}

export default Heading
