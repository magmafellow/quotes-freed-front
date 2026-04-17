import { cn } from '@/lib/utils'
import React from 'react'

type TButtonPsiProps = {
  isSelected?: boolean
} & React.ComponentProps<'button'>

export default function ButtonPsi({
  isSelected,
  className,
  children,
  ...props
}: TButtonPsiProps) {
  return (
    <div
      className={cn(
        'inline-flex flex-col gap-1.5 cursor-pointer *:cursor-pointer',
        isSelected ? 'text-primary-700' : 'text-grey-700'
      )}
    >
      <button className={cn('', className)} {...props}>
        {children}
      </button>
      <div
        className={cn('h-0.5', isSelected ? 'bg-primary-500 ' : 'bg-grey-200')}
      ></div>
    </div>
  )
}
