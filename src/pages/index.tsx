import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { trpc } from '@utils/trpc'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const { data, isLoading } = trpc.user.init.useQuery()

  useEffect(() => {
    if (isLoading) return

    if (data?.is_subscribed) {
      router.push('/app/overview')
    } else {
      router.push('/payment/pricing')
    }
  }, [isLoading])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return null
}

export default Home
