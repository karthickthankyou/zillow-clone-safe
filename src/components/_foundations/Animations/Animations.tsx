export interface IAnimationsProps {
  className?: string
  children?: string
}

const Animations = ({ className, children }: IAnimationsProps) => (
  <div className={`${className} `}>{children}</div>
)

export default Animations
