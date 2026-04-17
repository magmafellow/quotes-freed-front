import React from 'react'
import DefaultContainer from '../blocks/default-container'
import { cn } from '@/lib/utils'
import Avatar from '@/components/blocks/avatar'
import BurgerMenuStartIcon from '../icons/burger-menu-icon'
import ButtonPsi from '../ui-manual/button-psi'

type TFooterProps = {} & React.ComponentProps<'footer'>

function Footer({ className, children, ...props }: TFooterProps) {
  return (
    <footer className={cn('bg-grey-900 text-grey-0', className)} {...props}>
      <DefaultContainer className="min-h-25">footer</DefaultContainer>
    </footer>
  )
}

export default Footer
