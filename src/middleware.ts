import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(function middleware(req) {
  const token = req.nextauth.token
  const url = req.nextUrl.clone()

  if (!token) {
    console.log('should be here')
    url.pathname = '/auth/signin'
    return NextResponse.rewrite(url)
  }

  if (req.url.includes('/app') && !token?.is_subscribed) {
    url.pathname = '/payment/pricing'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/', '/app/:path*', '/auth/signout']
}
