import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import AgentListing from 'src/components/templates/AgentListing'
import { ssrCache } from 'src/components/templates/UrqlProvider/UrqlProvider'
import { GetHomeDocument } from 'src/generated/graphql'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const AgentPage = () => <AgentListing />

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
