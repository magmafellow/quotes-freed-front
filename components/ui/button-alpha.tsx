import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex items-center justify-center duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: '',
        // secondary: '',
      },
      intent: {
        accent: '',
        neutral: '',
      },
      size: {
        md: 'rounded-(--size-2) h-10 typo-body-sm-bold px-5',
        sm: 'rounded-(--size-2) h-8 typo-body-xs-bold px-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      intent: 'accent',
      size: 'md',
    },
    compoundVariants: [
      {
        variant: 'primary',
        intent: 'accent',
        className:
          'bg-primary-500 text-grey-0 hover:bg-primary-400 disabled:bg-primary-600 disabled:text-grey-200',
      },
      {
        variant: 'primary',
        intent: 'neutral',
        className:
          'bg-grey-200 text-grey-500 hover:bg-grey-100 disabled:bg-grey-200 disabled:text-grey-900',
      },
    ],
  }
)

function ButtonAlpha({
  className,
  variant = 'primary',
  intent = 'accent',
  size = 'md',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, intent, size, className }))}
      {...props}
    />
  )
}

export { ButtonAlpha, buttonVariants }
