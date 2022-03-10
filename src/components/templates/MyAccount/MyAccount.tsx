import Container from 'src/components/atoms/Container'
import { useAppSelector } from 'src/store'
import { getFunctions, httpsCallable } from 'firebase/functions'
import Link from 'src/components/atoms/Link'
import { selectUserRoles } from 'src/store/user/userSlice'

export interface IMyAccountProps {}

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

const MyAccount = () => {
  const roles = useAppSelector(selectUserRoles)
  return (
    <Container className='h-screen '>
      <div className='mt-4 mb-2 text-xl'>Agent status</div>
      {roles?.includes('agent') ? (
        <div>Already an agent!</div>
      ) : (
        <button
          type='button'
          className='px-4 py-2 bg-primary-300'
          onClick={becomeAgentClick}
        >
          Become agent
        </button>
      )}
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
    </Container>
  )
}

export default MyAccount
