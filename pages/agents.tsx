/* eslint-disable react/jsx-props-no-spreading */
import { GetStaticProps } from 'next'
import AgentCard from 'src/components/organisms/AgentCard'
import { sampleAgentProps } from 'src/components/organisms/AgentCard/AgentCard.stories'
import AgentListing from 'src/components/templates/AgentListing'

const AgentListingPage = () => (
  <AgentListing>
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
  </AgentListing>
)

export const getStaticProps: GetStaticProps = () => ({
  props: {},
})

export default AgentListingPage
