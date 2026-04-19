import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import XIcon from '@/components/icons/x-icon'

const buttonVariants = cva(
  'shrink-0 flex items-center justify-center disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed duration-200',
  {
    variants: {
      variant: {
        primary:
          'bg-grey-50 text-grey-500 hover:opacity-70 disabled:bg-grey-200 disabled:text-grey-500',
      },
      intent: {},
      size: {
        md: 'size-8 [&_svg]:size-5.25 rounded-[999px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
    compoundVariants: [{}],
  }
)

function ButtonClose({
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: VariantProps<typeof buttonVariants> & React.ComponentProps<'button'>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      <XIcon />
    </button>
  )
}

export { ButtonClose, buttonVariants }
