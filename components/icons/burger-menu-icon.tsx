import { cn } from '@/lib/utils'
import { TCommonSVGIcon } from '@/types/ui/icons'
import React from 'react'

function BurgerMenuStartIcon({ className, ...props }: TCommonSVGIcon) {
  return (
    <svg
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <rect width="36" height="2" fill="currentColor" />
      <rect
        width="36"
        height="2"
        transform="translate(0 9)"
        fill="currentColor"
      />
      <rect
        width="36"
        height="2"
        transform="translate(0 18)"
        fill="currentColor"
      />
    </svg>
  )
}

export default BurgerMenuStartIcon
