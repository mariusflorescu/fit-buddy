import { signOut, useSession } from 'next-auth/react'
import AuthLayout from '@layout/auth'
import Button from '@components/button'
import { NextPageWithLayout } from '@pages/_app'
import { ReactElement } from 'react'

const SignOut: NextPageWithLayout = () => {
  const { status } = useSession()

  if (status === 'authenticated') {
    signOut({ redirect: false })
  }

  if (status === 'loading') {
    return <h2 className="text-2xl font-semibold">Loading...</h2>
  }

  return (
    <>
      <h2 className="text-2xl font-semibold">You've been logged out</h2>
      <p className="text-sm text-gray-400">We hope to see you again soon!</p>
      <span className="h-[1px] w-full bg-gray-100" />
      <Button>Go back to login</Button>
    </>
  )
}

SignOut.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Sign Out">{page}</AuthLayout>
}

export default SignOut
