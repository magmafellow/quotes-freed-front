import React from 'react'
import DefaultContainer from '../blocks/default-container'
import { cn } from '@/lib/utils'
import Avatar from '@/components/blocks/avatar'
import BurgerMenuStartIcon from '../icons/burger-menu-icon'
import ButtonPsi from '../ui-manual/button-psi'

type THeaderProps = {} & React.ComponentProps<'header'>

function Header({ className, children, ...props }: THeaderProps) {
  return (
    <header className={cn('fixed left-0 top-0 w-full z-100', className)} {...props}>
      <DefaultContainer className="shadow-md-half bg-grey-0 rounded-b-[32px]">
        <div className="h-20 md:h-24 flex items-center justify-between">
          <div className="_logotype-box flex items-center gap-4">
            <a href="#" className="shrink-0">
              <img
                className="size-14"
                src="/assets/images/logotypes/logotype-neutral-rounded-md.svg"
                alt="logotype (Quotes Freed)"
              />
            </a>
            <input type="text" className="bg-grey-100" />
          </div>

          <div className="_right-box flex items-center">
            <nav className="hidden lg:block pr-24">
              <ul className="flex items-center gap-8">
                <ButtonPsi isSelected>Home</ButtonPsi>
                <ButtonPsi>Create</ButtonPsi>
                <ButtonPsi>Favorites</ButtonPsi>
              </ul>
            </nav>

            <BurgerMenuStartIcon className="lg:hidden" />
            <a href="#">
              <Avatar className="hidden lg:flex" />
            </a>
          </div>
        </div>
      </DefaultContainer>
    </header>
  )
}

export default Header
