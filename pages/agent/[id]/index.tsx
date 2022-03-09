import AgentListing from 'src/components/templates/AgentListing'
import { client, ssrCache } from 'src/config/urqlClient'
import { GetHomeDocument } from 'src/generated/graphql'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const AgentPage = () => <AgentListing />

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps(context) {
  const { id } = context.params

  return {
    props: {
      id,
    },
  }
}

export default AgentPage
