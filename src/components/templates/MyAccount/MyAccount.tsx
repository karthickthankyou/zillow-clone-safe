import Container from 'src/components/atoms/Container'
import { useAppSelector } from 'src/store'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { selectUserRoles } from 'src/store/user/userSlice'

export interface IMyAccountProps {}

const becomeAgentClick = () => {
  const functions = getFunctions()
  const becomeAgent = httpsCallable(functions, 'becomeAgent')
  becomeAgent().then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    const { data } = result
    // eslint-disable-next-line no-console
    console.log('Data: ', data)
  })
}

const MyAccount = () => {
  const roles = useAppSelector(selectUserRoles)

  return (
    <Container className='h-screen '>
      <div className='mb-2 text-2xl font-semibold'>Agent status</div>
      <div className='max-w-sm mb-4 text-gray-700'>
        Agent status will allow you to post your listings and receive leads.
      </div>
      {roles?.includes('agent') ? (
        <h2>Already an agent!</h2>
      ) : (
        <button
          type='button'
          className='px-4 py-2 text-white rounded bg-primary-500'
          onClick={becomeAgentClick}
        >
          Become agent
        </button>
      )}

      <div className='mt-6 mb-4 text-2xl font-semibold'>Roles</div>
      <div>{!roles?.length ? <div>No roles assigned.</div> : null}</div>
      <ul>
        {roles?.map((role) => (
          <li className='inline-block px-2 py-1 border shadow-lg' key={role}>
            {role}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default MyAccount
