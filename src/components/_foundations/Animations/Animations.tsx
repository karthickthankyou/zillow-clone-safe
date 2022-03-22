export interface IAnimationsProps {
  className?: string
  children?: string
}

const Animations = ({ className, children }: IAnimationsProps) => (
  <div data-chromatic='ignore' className={`${className} `}>
    {children}
  </div>
)

export default Animations
