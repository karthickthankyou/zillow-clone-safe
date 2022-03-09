import AgentCard from 'src/components/organisms/AgentCard'

export interface IAgentListingProps {}

const AgentListing = () => (
  <div className='container grid gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
  </div>
)

export default AgentListing
