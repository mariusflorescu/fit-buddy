import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@server/db/client'
import { env } from '@env/server.mjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 30
  },
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout'
  },
  // Include user.id on session
  callbacks: {
    async jwt({ token, user, isNewUser }) {
      if (user?.id) {
        token.id = user?.id
      }

      if (user?.role) {
        token.role = user.role
      }

      if (isNewUser) {
        token.role = 'USER'
      }

      return token
    },
    async session({ session, token }) {
      session.id = token.id
      session.role = token.role

      return session
    }
  }
}

export default NextAuth(authOptions)
