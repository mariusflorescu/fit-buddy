import { ReactElement } from 'react'
import PaymentLayout from '@layout/payment'
import useSignoutAfterTimeout from '@lib/use-signout-after-timeout'
import type { NextPageWithLayout } from '@pages/_app'

const Success: NextPageWithLayout = () => {
  // useSignoutAfterTimeout()

  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="green"
          className="h-10 w-10 rounded-full bg-green-100 p-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="text-sm font-light">
        Your payment has been successfully received! You'll be now logged out in
        5 seconds in order to have access to the latest information.
      </div>
    </>
  )
}

Success.getLayout = function getLayout(page: ReactElement) {
  return <PaymentLayout>{page}</PaymentLayout>
}

export default Success
