// src/pages/_app.tsx
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import type { AppType } from 'next/app'
import { trpc } from '@utils/trpc'
import UserProvider from '@lib/user-provider'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
