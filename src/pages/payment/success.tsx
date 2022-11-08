import { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Success: NextPage = () => {
  const router = useRouter()
  const { status } = useSession()

  if (status === 'authenticated') {
    signOut({ redirect: false })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/auth/signin')
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8">
      <div className="flex w-full flex-col items-center space-y-8 rounded-lg bg-white p-8 shadow">
        <h1 className="text-lg font-bold">FitBuddy</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            className="h-10 w-10 rounded-full bg-green-100 p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div> 
        <div className="text-sm font-light">
        Your payment has been successfully received! You'll be now logged out in
        5 seconds in order to have access to the latest information.
        </div>
      </div>
    </div>
  )
}

export default Success
