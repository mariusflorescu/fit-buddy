import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect
} from 'react'
import { trpc } from '@utils/trpc'
import type { inferProcedureOutput } from '@trpc/server'
import type { AppRouter } from '@server/trpc/router/_app'
import { useRouter } from 'next/router'

type Context = {
  user:
    | inferProcedureOutput<AppRouter['_def']['procedures']['user']['init']>
    | undefined
}

const UserContext = createContext<Context>({
  user: undefined
})

const UserProvider = ({ children }: PropsWithChildren) => {
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

  return (
    <UserContext.Provider value={{ user: data }}>
      {children}
    </UserContext.Provider>
  )
}

export const UseUser = () => useContext(UserContext)

export default UserProvider
