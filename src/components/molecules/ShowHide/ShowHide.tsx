import { Children } from 'src/types'

export interface IShowHideProps {
  show: boolean
  children?: Children
}

const ShowHide = ({ show, children }: IShowHideProps) =>
  show ? children : null

export default ShowHide
