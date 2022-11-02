import { withAuth } from 'next-auth/middleware'

export default withAuth({
  callbacks: {
    authorized({ token }) {
      return !!token
    }
  }
})

export const config = {
  matcher: ['/', '/app/:path*', '/auth/signout']
}
