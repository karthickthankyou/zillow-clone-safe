import { Children } from 'src/types'

export interface IShowHideProps {
  show: boolean
  children: Children
}

// eslint-disable-next-line react/function-component-definition
function ShowHide({ show, children }: IShowHideProps): JSX.Element | null {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return show ? <>{children}</> : null
}

export default ShowHide
