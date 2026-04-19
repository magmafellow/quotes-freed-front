import * as React from 'react'
import { Input as InputPrimitive } from '@base-ui/react/input'

import { cn } from '@/lib/utils'
import SearchIcon from '../icons/search-icon'

type TInputOmegaProps = {
  IconComponent?: React.ComponentType<{ className?: string }>
}

function InputOmega({
  className,
  type,
  IconComponent,
  ...props
}: React.ComponentProps<'input'> & TInputOmegaProps) {
  return (
    <div className="relative">
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(
          `typo-body-sm bg-grey-100 h-10 pl-2 outline-none  border-b border-grey-300 hover:bg-grey-50 hover:border-grey-200 focus:bg-grey-50 focus:border-grey-400 duration-200`,
          IconComponent ? 'pr-8' : 'pr-2',
          className
        )}
        {...props}
      />
      {IconComponent ? (
        <IconComponent className="absolute size-6 top-1/2 right-2 -translate-y-1/2 text-grey-500 pointer-events-none" />
      ) : null}
    </div>
  )
}

export { InputOmega }
