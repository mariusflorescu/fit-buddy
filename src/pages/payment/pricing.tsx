import { type NextPage } from 'next'

import stripe from '@utils/stripe'
import Button from '@components/button'

import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

type Plan = {
  id: string
  name: string
  price: number | null
  interval: 'day' | 'month' | 'week' | 'year'
  currency: string
}

type Props = {
  plans: Plan[]
}

const Pricing: NextPage<Props> = ({ plans }) => {
  const processSubscription = async (planId: string) => {
    const { data } = await axios.get(`/api/payment/${planId}`)
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_KEY as string
    )
    await stripe?.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div>
      <p>{JSON.stringify(plans, null, 2)}</p>
      <div>
        {plans.map((plan) => (
          <Button key={plan.id} onClick={() => processSubscription(plan.id)}>
            Subscript to plan {plan.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: prices } = await stripe.prices.list()

  const plans = await Promise.all(
    prices.map(async (price) => {
      const product = await stripe.products.retrieve(price.product as string)

      return {
        id: price.id,
        name: product.name,
        price: price.unit_amount,
        interval: price.recurring?.interval,
        currency: price.currency
      }
    })
  )

  const sortedPlans = plans.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))

  return {
    props: {
      plans: sortedPlans
    }
  }
}

export default Pricing
