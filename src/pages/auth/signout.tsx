import { NextPage } from 'next'
import Head from 'next/head'
import { signOut, useSession } from 'next-auth/react'
import AuthLayout from '@layout/auth'
import Button from '@components/button'

const SignOut: NextPage = () => {
  const { status } = useSession()

  if (status === 'authenticated') {
    signOut({ redirect: false })
  }

  if (status === 'loading') {
    return (
      <AuthLayout>
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </AuthLayout>
    )
  }

  return (
    <>
      <Head>
        <title>FitBuddy - Sign Out</title>
      </Head>
      <AuthLayout>
        <h2 className="text-2xl font-semibold">You've been logged out</h2>
        <p className="text-sm text-gray-400">We hope to see you again soon!</p>
        <span className="h-[1px] w-full bg-gray-100" />
        <Button>Go back to login</Button>
      </AuthLayout>
    </>
  )
}

export default SignOut
