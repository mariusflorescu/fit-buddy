import PaymentLayout from '@layout/payment'
import useSignoutAfterTimeout from '@lib/use-signout-after-timeout'
import { NextPage } from 'next'

const Success: NextPage = () => {
  useSignoutAfterTimeout()

  return (
    <PaymentLayout>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="green"
          className="h-10 w-10 rounded-full bg-green-100 p-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="text-sm font-light">
        Your payment has been successfully received! You'll be now logged out in
        5 seconds in order to have access to the latest information.
      </div>
    </PaymentLayout>
  )
}

export default Success
