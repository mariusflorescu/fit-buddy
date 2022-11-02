import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const url = req.nextUrl.clone()

    if (req.url.includes('/app') && !token?.is_subscribed) {
      url.pathname = '/payment/pricing'
      return NextResponse.rewrite(url)
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        return !!token
      }
    }
  }
)

export const config = {
  matcher: ['/', '/app/:path*', '/auth/signout']
}
