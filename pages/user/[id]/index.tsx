import { useRouter } from 'next/router'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useAppSelector } from 'src/store'

const UserpagePage = () => {
  const { query } = useRouter()
  const user = useAppSelector((state) => state.user)
  console.log(user)

  const becomeAgentClick = () => {
    const functions = getFunctions()
    const becomeAgent = httpsCallable(functions, 'becomeAgent')
    becomeAgent().then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const { data } = result
      console.log('Become agent is over: ', result)
    })
  }

  const roles = user.data.claims?.['x-hasura-allowed-roles']

  return (
    <div className='h-screen'>
      <div>Hello {query.id}</div>
      <button
        type='button'
        className='px-4 py-2 bg-primary-300'
        onClick={becomeAgentClick}
      >
        Become agent
      </button>
      <div className='mt-4'>
        <div>Roles</div>
        <ul>
          {roles?.map((role) => (
            <li className='inline-block px-2 py-1 border shadow-lg' key={role}>
              {role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps(context) {
  const { id } = context.params
  console.log('id', id)
  return {
    props: {},
  }
}

export default UserpagePage
