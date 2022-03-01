import { ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'

export interface ILinkProps {
  href: LinkProps['href']
  className?: string
  onHover?: () => void
  onBlur?: () => void
  children: (string | ReactElement) | (string | ReactElement)[]
}

const MyLink = ({
  href,
  className,
  onHover,
  onBlur,
  children,
  ...linkProps
}: ILinkProps & LinkProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link href={href} {...linkProps}>
    <a
      role='link'
      tabIndex={0}
      onClick={onHover}
      onKeyDown={onHover}
      onBlur={onBlur}
      className={className}
    >
      {children}
    </a>
  </Link>
)

export default MyLink
