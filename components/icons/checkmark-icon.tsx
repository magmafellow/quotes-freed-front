import { cn } from '@/lib/utils'
import { TCommonSVGIcon } from '@/types/ui/icons'

function CheckmarkIcon({ className, ...props }: TCommonSVGIcon) {
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
      <g clipPath="url(#clip0_2075_4023)">
        <path
          d="M26 8L12 24L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2075_4023">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CheckmarkIcon
