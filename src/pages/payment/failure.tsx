import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'

const Failure: NextPage = () => {
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
            stroke="red"
            className="h-10 w-10 rounded-full bg-red-100 p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="text-sm font-light">
          There has been a problem with your payment. You'll be redirected to login in 5 seconds.
        </div>
      </div>
    </div>
  )
}

export default Failure
