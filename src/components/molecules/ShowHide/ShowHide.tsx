import { ReactElement } from 'react'
import { Children } from 'src/types'

export interface IShowHideProps {
  show: boolean
  children: ReactElement | ReactElement[]
}

const ShowHide = ({ show, children }: IShowHideProps) =>
  show ? children : null

export default ShowHide
