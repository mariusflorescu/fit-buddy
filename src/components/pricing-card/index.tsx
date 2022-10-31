import type { Plan } from '@ts/stripe'
import { FC } from 'react'

type Props = {
  plan: Plan
}

const PricingCard: FC<Props> = ({ plan }) => {
  const { name, price: planPrice, interval, currency } = plan
  const price = planPrice! / 100

  return <div>Hello</div>
}

export default PricingCard
