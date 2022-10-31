import { type NextPage } from 'next'

import stripe from '@utils/stripe'

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
  return <p>{JSON.stringify(plans, null, 2)}</p>
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

  return {
    props: {
      plans
    }
  }
}

export default Pricing
