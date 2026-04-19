import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'typo-caption-xs inline-flex justify-center items-center shrink-0 h-5.5 px-1.5 py-0.5 rounded-(--size-2)',
  {
    variants: {
      variant: {
        accent: 'bg-accent-200 text-accent-700',
        neutral: 'bg-grey-100 text-grey-700',
      },
    },
    defaultVariants: {
      variant: 'accent',
    },
  }
)

function Badge({
  className,
  variant = 'accent',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  })
}

export { Badge, badgeVariants }
