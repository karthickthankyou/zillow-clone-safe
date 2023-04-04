import { ReactNode, useState } from 'react'
import Container from 'src/components/atoms/Container'
import { useAppSelector } from 'src/store'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { selectUserRoles } from 'src/store/user/userSlice'
import Button from 'src/components/atoms/Button/Button'
import { divide } from 'cypress/types/lodash'

export interface IMyAccountProps {}

export const TitleValue = ({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) => (
  <div>
    <div className='font-semibold'>{title}</div>
    <div>{children}</div>
  </div>
)

const MyAccount = () => {
  const user = useAppSelector((state) => state.user)

  return (
    <Container className='h-screen '>
      <div className='mb-4 text-xl '>My Account</div>
      <div className='flex flex-col gap-2'>
        <TitleValue title='Name'>{user.displayName}</TitleValue>
        <TitleValue title='Email'>{user.email}</TitleValue>
        <TitleValue title='Roles'>
          <>
            {user.roles?.length === 0 ? <div>-</div> : null}
            <ul>
              {user.roles?.map((role) => (
                <li
                  className='inline-block px-2 py-1 border shadow-lg'
                  key={role}
                >
                  {role}
                </li>
              ))}
            </ul>
          </>
        </TitleValue>
      </div>
    </Container>
  )
}

export default MyAccount
