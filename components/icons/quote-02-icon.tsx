import { cn } from '@/lib/utils'
import { TCommonSVGIcon } from '@/types/ui/icons'
import React from 'react'

function Quote02Icon({ className, ...props }: TCommonSVGIcon) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <g clip-path="url(#clip0_2040_878)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.68 25.0002C22.54 21.8802 24.9 18.6602 24.9 13.2802C24.58 13.3802 24.3 13.3802 24.02 13.3802C21.48 13.3802 19.02 11.6602 19.02 8.56017C19.02 5.34018 21.08 3.34018 24.02 3.34018C27.82 3.34018 30 6.38018 30 11.8402C30 19.4402 26.5 24.9002 19.96 28.6802L17.68 25.0002ZM3.68 25.0002C8.54 21.8802 10.9 18.6602 10.9 13.2802C10.58 13.3802 10.3 13.3802 10.02 13.3802C7.48 13.3802 5.02 11.6602 5.02 8.56017C5.02 5.34018 7.08 3.34018 10.02 3.34018C13.8 3.34018 15.98 6.38018 15.98 11.8402C15.98 19.4402 12.48 24.9002 5.94 28.6802L3.66 25.0002H3.68Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2040_878">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Quote02Icon
