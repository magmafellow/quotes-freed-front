import { cn } from '@/lib/utils'
import { TCommonSVGIcon } from '@/types/ui/icons'
import React from 'react'

function Quote01Icon({ className, ...props }: TCommonSVGIcon) {
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
      <g clip-path="url(#clip0_2040_882)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.32 6.99982C9.46 10.1198 7.1 13.3398 7.1 18.7198C7.42 18.6198 7.7 18.6198 7.98 18.6198C10.52 18.6198 12.98 20.3398 12.98 23.4398C12.98 26.6598 10.92 28.6598 7.98 28.6598C4.18 28.6598 2 25.6198 2 20.1598C2 12.5598 5.5 7.09982 12.04 3.31982L14.32 6.99982ZM28.32 6.99982C23.46 10.1198 21.1 13.3398 21.1 18.7198C21.42 18.6198 21.7 18.6198 21.98 18.6198C24.52 18.6198 26.98 20.3398 26.98 23.4398C26.98 26.6598 24.92 28.6598 21.98 28.6598C18.2 28.6598 16.02 25.6198 16.02 20.1598C16.02 12.5598 19.52 7.09982 26.06 3.31982L28.34 6.99982H28.32Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2040_882">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Quote01Icon
