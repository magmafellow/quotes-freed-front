import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import PersonFillIcon from '../icons/person-fill-icon'

const avatarVariants = cva(
  'rounded-[999px] flex justify-center items-center bg-accent-300 text-accent-900',
  {
    variants: {
      size: {
        xs: 'size-6 [&_svg]:size-3',
        sm: 'size-8 [&_svg]:size-4',
        md: 'size-12 [&_svg]:size-6',
        lg: 'size-16 [&_svg]:size-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

type TAvatarCVA = VariantProps<typeof avatarVariants>

type TAvatarProps = {} & TAvatarCVA & React.ComponentProps<'div'>

function Avatar({ className, size, ...props }: TAvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      <PersonFillIcon />
    </div>
  )
}

export default Avatar
