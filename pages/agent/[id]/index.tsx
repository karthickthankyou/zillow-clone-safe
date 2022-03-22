/* eslint-disable react/jsx-props-no-spreading */
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import AgentCard from 'src/components/organisms/AgentCard'
import { sampleAgentProps } from 'src/components/organisms/AgentCard/AgentCard.stories'
import AgentListing from 'src/components/templates/AgentListing'

const AgentPage = () => (
  <AgentListing>
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
  </AgentListing>
)

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}
interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
  const id = context.params?.id

  return {
    props: {
      id,
    },
  }
}

export default AgentPage
