import React from 'react'
import * as RadixLabel from '@radix-ui/react-label'
import { cva } from 'class-variance-authority'

const labelStyles = cva('font-medium text-gray-900')

type Props = RadixLabel.PrimitiveLabelProps

const Label: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <RadixLabel.Root className={labelStyles({ class: className })} {...props}>
      {children}
    </RadixLabel.Root>
  )
}

export default Label
