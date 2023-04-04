import { Provider, ssrExchange } from 'urql'

import { client as urqlClient } from 'src/config/urqlClientWonka'

export interface IUrqlProviderProps {
  children: React.ReactNode
}

const isServerSide = typeof window === 'undefined'
export const ssrCache = ssrExchange({ isClient: !isServerSide })

const UrqlProvider = ({ children }: IUrqlProviderProps) => (
  <Provider value={urqlClient}>{children}</Provider>
)

export default UrqlProvider
