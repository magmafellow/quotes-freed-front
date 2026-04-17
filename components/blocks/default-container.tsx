import { cn } from '@/lib/utils'
import React from 'react'

type TDefaultContainerProps = {
  autoPaddingX?: boolean
} & React.ComponentProps<'div'>

function DefaultContainer({
  className,
  children,
  autoPaddingX = true,
  ...props
}: TDefaultContainerProps) {
  return (
    <div
      className={cn(
        'w-full max-w-[1140px] mx-auto',
        autoPaddingX && 'px-2.5 lg:px-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default DefaultContainer
