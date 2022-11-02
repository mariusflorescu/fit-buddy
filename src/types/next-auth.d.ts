import { DefaultSession, DefaultUser } from 'next-auth'

type Role = 'ADMIN' | 'TRAINER' | 'USER'

declare module 'next-auth' {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    role: Role
    stripe_customer: string
    is_subscribed: boolean
    subscription_id?: string
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user?: User
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    id: string
    role: Role
    is_subscribed: boolean
    stripe_customer: string
  }
}
