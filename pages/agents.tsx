import AgentListing from 'src/components/templates/AgentListing'
import { client, ssrCache } from 'src/config/urqlClient'
import { GetHomeDocument } from 'src/generated/graphql'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const AgentListingPage = () => <AgentListing />

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default AgentListingPage
