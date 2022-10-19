import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'

const SignOut: NextPage = () => {
  const { status } = useSession()

  if (status === 'authenticated') {
    signOut({ redirect: false })
  }
  return <div>You have been logged out</div>
}

export default SignOut
