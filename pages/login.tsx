import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import SignIn from 'src/components/templates/SignIn'
import { useAppSelector } from 'src/store'
import { selectUser } from 'src/store/user'
import toast from 'react-hot-toast'
import { notify } from 'src/hooks'

const Login: NextPage = () => {
  const user = useAppSelector(selectUser)
  const router = useRouter()
  if (user.data.uid) {
    notify({ message: 'You are already logged in', type: 'warning' })
    router.push('/')
  }

  return (
    <div>
      <NextSeo
        title='Zillow clone - Login page'
        description='This is the amazing sample page. A short description goes here which says what goes here.'
      />
      <SignIn />
    </div>
  )
}

export default Login
