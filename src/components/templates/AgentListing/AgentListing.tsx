export interface IAgentListingProps {}

const AgentListing = ({ children }: { children: React.ReactNode }) => (
  <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>{children}</div>
)

export default AgentListing
