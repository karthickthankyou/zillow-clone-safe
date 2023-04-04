export interface IContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: IContainerProps) => (
  <div className={`container px-1 mx-auto ${className}`}>{children}</div>
)

export default Container
