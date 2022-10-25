import React from 'react'
import type { ButtonVariants } from './styles'
import { buttonStyles } from './styles'

type ButtonProps = ButtonVariants &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ variant, size, class: className })}
      {...props}
    />
  )
}

export default Button
