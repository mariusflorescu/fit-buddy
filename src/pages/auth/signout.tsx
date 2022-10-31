import { NextPage } from 'next'
import Head from 'next/head'
import { signOut, useSession } from 'next-auth/react'

const SignOut: NextPage = () => {
  const { status } = useSession()

  if (status === 'authenticated') {
    signOut({ redirect: false })
  }

  if (status === 'loading') {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center px-8">
        <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-white p-8 shadow">
          <h1 className="text-lg font-bold">FitBuddy</h1>
          <h2 className="text-2xl font-semibold">Loading...</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>FitBuddy - Sign Out</title>
      </Head>
      <div className="flex h-full w-full flex-col items-center justify-center px-8">
        <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-white p-8 shadow">
          <h1 className="text-lg font-bold">FitBuddy</h1>
          <h2 className="text-2xl font-semibold">You've been logged out</h2>
          <p className="text-sm text-gray-400">
            We hope to see you again soon!
          </p>
          <span className="h-[1px] w-full bg-gray-100" />
          <button className="w-full bg-gray-900 text-gray-50">
            Go back to login
          </button>
        </div>
      </div>
    </>
  )
}

export default SignOut
