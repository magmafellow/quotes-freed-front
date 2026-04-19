import * as React from 'react'
import { Input as InputPrimitive } from '@base-ui/react/input'

import { cn } from '@/lib/utils'

type TInputAlphaProps = {
  IconComponent?: React.ComponentType<{ className?: string }>
}

function InputAlpha({
  className,
  type,
  IconComponent,
  ...props
}: React.ComponentProps<'input'> & TInputAlphaProps) {
  return (
    <div className="relative flex">
      <InputPrimitive
        type={type}
        data-slot="input"
        className={cn(
          'typo-body-sm outline-none  h-8.5 pl-3.5 rounded-(--size-4) bg-grey-0 text-grey-400 border border-border hover:border-border-hard focus:border-border-hard duration-200',
          '',
          IconComponent ? 'pr-7.5' : 'pr-3.5',
          className
        )}
        {...props}
      />

      {IconComponent ? (
        <IconComponent className="absolute size-6 top-1/2 right-2.5 -translate-y-1/2 text-grey-400 pointer-events-none" />
      ) : null}
    </div>
  )
}

export { InputAlpha }
