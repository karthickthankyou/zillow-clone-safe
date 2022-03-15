import { GetStaticProps } from 'next'
import AgentListing from 'src/components/templates/AgentListing'

const AgentListingPage = () => <AgentListing />

export const getStaticProps: GetStaticProps = () => ({
  props: {},
})

export default AgentListingPage
