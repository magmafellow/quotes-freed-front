import { cn } from '@/lib/utils'
import { TCommonSVGIcon } from '@/types/ui/icons'
import React from 'react'

function LikeFillIcon({ className, ...props }: TCommonSVGIcon) {
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
      <g clipPath="url(#clip0_2064_3253)">
        <path
          d="M18.6663 27.2108C18.0103 27.6215 17.4623 27.9388 17.077 28.1562C16.873 28.2708 16.6663 28.3828 16.4597 28.4922H16.457C16.3155 28.5649 16.1588 28.6029 15.9997 28.6029C15.8406 28.6029 15.6838 28.5649 15.5423 28.4922C15.3339 28.3834 15.1272 28.2714 14.9223 28.1562C12.6527 26.8759 10.5086 25.3849 8.51834 23.7028C5.06634 20.7628 1.33301 16.4415 1.33301 11.3508C1.33301 6.73616 5.10501 3.3335 8.98101 3.3335C12.0397 3.3335 14.5077 4.96816 15.9997 7.4735C17.493 4.96816 19.9597 3.3335 23.0183 3.3335C26.893 3.3335 30.6663 6.73616 30.6663 11.3522C30.6663 16.4428 26.9317 20.7655 23.481 23.7015C21.9622 24.985 20.3532 26.1578 18.6663 27.2108Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2064_3253">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LikeFillIcon
