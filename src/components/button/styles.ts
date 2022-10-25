import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'

export const buttonStyles = cva(['border rounded-lg', 'text-base', 'font-semibold'], {
    variants: {
      variant: {
        primary: ['bg-gray-900', 
        'text-white', 
        'hover:bg-gray-700', 
        'focus:border border-double',
        'disable:bg-gray-500 text-gray-100'
    ],
        secondary: '',
      },
      size: {
        small: 'text-sm px-2 py-1',
        medium: 'px-4 py-2',
        large: 'px-6 py-3'
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  });

export type ButtonVariants = VariantProps<typeof buttonStyles>


