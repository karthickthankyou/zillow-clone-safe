export interface ISkeletonProps {
  className?: string
  round?: boolean
}

const Skeleton = ({ className, round = false }: ISkeletonProps) => {
  const roundClass = round ? 'rounded-full' : 'rounded'
  return (
    <div
      className={`bg-gray-300 animate-pulse rounded ${roundClass} ${className}`}
    />
  )
}

export default Skeleton
