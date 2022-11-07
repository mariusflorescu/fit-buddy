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
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <p>
      Your payment has been successfully received! You'll be now logged out in 3
      seconds in order to have access to the latest information
    </p>
  )
}

export default Success
