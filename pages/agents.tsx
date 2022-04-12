/* eslint-disable react/jsx-props-no-spreading */
import { GetStaticProps } from 'next'
import AgentCard from 'src/components/organisms/AgentCard'
import { sampleAgentProps } from 'src/components/organisms/AgentCard/AgentCard.stories'
import Container from 'src/components/atoms/Container'
import Badge from 'src/components/atoms/Badge'
import AgentListing from 'src/components/templates/AgentListing'

const AgentListingPage = () => (
  <Container>
    <div className='flex items-center gap-1 mb-6 text-xl'>
      <div>Agents</div>{' '}
      <Badge size='sm' variant='red'>
        Page not implemented
      </Badge>
    </div>

    <AgentListing>
      <AgentCard {...sampleAgentProps} />
      <AgentCard {...sampleAgentProps} />
      <AgentCard {...sampleAgentProps} />
      <AgentCard {...sampleAgentProps} />
      <AgentCard {...sampleAgentProps} />
      <AgentCard {...sampleAgentProps} />
      <AgentCard {...sampleAgentProps} />
    </AgentListing>
  </Container>
)

export const getStaticProps: GetStaticProps = () => ({
  props: {},
})

export default AgentListingPage
