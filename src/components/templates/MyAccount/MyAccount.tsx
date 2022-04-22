import { useState } from 'react'
import Container from 'src/components/atoms/Container'
import { useAppSelector } from 'src/store'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { selectUserRoles } from 'src/store/user/userSlice'
import Button from 'src/components/atoms/Button/Button'

export interface IMyAccountProps {}

const MyAccount = () => {
  const [becoming, setBecoming] = useState(false)

  const becomeAgentClick = () => {
    const functions = getFunctions()
    setBecoming(true)
    const becomeSellerForZillow = httpsCallable(functions, 'becomeAgent')
    becomeSellerForZillow().then(() => {
      setBecoming(false)
    })
  }
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
        <Button
          isLoading={becoming}
          className='px-4 py-2 text-white rounded bg-primary-500'
          onClick={becomeAgentClick}
        >
          Become agent
        </Button>
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
