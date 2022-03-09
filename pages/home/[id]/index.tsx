import { useRouter } from 'next/router'
import Home from 'src/components/templates/ProductPage/ProductPage'

const ProductPage = () => {
  const router = useRouter()
  console.log(router.query.id)
  return <Home />
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: [],
    },
  }
}

export default ProductPage
