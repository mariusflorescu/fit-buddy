import type { ReactElement } from 'react'
import PaymentLayout from '@layout/payment'
import useSignoutAfterTimeout from '@lib/use-signout-after-timeout'
import type { NextPageWithLayout } from '@pages/_app'

const Failure: NextPageWithLayout = () => {
  // useSignoutAfterTimeout()

  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="red"
          className="h-10 w-10 rounded-full bg-red-100 p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="text-sm font-light">
        There has been a problem with your payment. You'll be redirected to
        login in 5 seconds.
      </div>
    </>
  )
}

Failure.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>
}

export default Failure
