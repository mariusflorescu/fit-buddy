import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'
import { trpc } from '../utils/trpc'
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
