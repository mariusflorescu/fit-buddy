import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <div>Loading...</div>
  }

  // if (session.status === 'unauthenticated') {
  //   return <div>Not authenticated TODO: go to login</div>
  // }

  if (session.status === 'unauthenticated') {
    router.replace('/overview')
  }

  return <div>Home page</div>
}

export default Home
