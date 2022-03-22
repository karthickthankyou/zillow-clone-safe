import { Children } from 'src/types'

export interface IAgentListingProps {}

const AgentListing = ({ children }: { children: Children }) => (
  <div className='container grid gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
    {children}
  </div>
)

export default AgentListing
