import Avatar from '@/components/blocks/avatar'
import DefaultContainer from '@/components/blocks/default-container'
import Footer from '@/components/features/footer'
import Header from '@/components/features/header'
import InstagramColorfulIcon from '@/components/icons/instagram-colorful-icon'
import SearchIcon from '@/components/icons/search-icon'
import ShareIcon from '@/components/icons/share-icon'
import ButtonPsi from '@/components/ui-manual/button-psi'
import { Badge } from '@/components/ui/badge'
import { ButtonAlpha } from '@/components/ui/button-alpha'
import { ButtonClose } from '@/components/ui/button-close'
import { InputAlpha } from '@/components/ui/input-alpha'
import { InputOmega } from '@/components/ui/input-omega'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <DefaultContainer className="mb-10">
        <h2 className="typo-h2-desktop mb-4">Buttons alpha</h2>
        <ButtonsAlpha />
      </DefaultContainer>

      <DefaultContainer className="mb-10">
        <h2 className="typo-h2-desktop mb-4">Buttons Close</h2>
        <ButtonsClose />
      </DefaultContainer>

      <DefaultContainer className="mb-10">
        <h2 className="typo-h2-desktop mb-4">Badges</h2>
        <Badges />
      </DefaultContainer>

      <DefaultContainer className="mb-10">
        <h2 className="typo-h2-desktop mb-4">Inputs Omega</h2>
        <InputsOmega />
      </DefaultContainer>

      <DefaultContainer className="mb-10">
        <h2 className="typo-h2-desktop mb-4">Inputs Alpha</h2>
        <InputsAlpha />
      </DefaultContainer>
    </div>
  )
}

function ButtonsAlpha() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <ButtonAlpha>Button label</ButtonAlpha>
        <ButtonAlpha disabled>Button label</ButtonAlpha>
      </div>
      <div className="flex items-center gap-4">
        <ButtonAlpha size="sm">Button label</ButtonAlpha>
        <ButtonAlpha size="sm" disabled>
          Button label
        </ButtonAlpha>
      </div>

      <div className="flex items-center gap-4">
        <ButtonAlpha intent="neutral">Button label</ButtonAlpha>
        <ButtonAlpha intent="neutral" disabled>
          Button label
        </ButtonAlpha>
      </div>
      <div className="flex items-center gap-4">
        <ButtonAlpha intent="neutral" size="sm">
          Button label
        </ButtonAlpha>
        <ButtonAlpha intent="neutral" size="sm" disabled>
          Button label
        </ButtonAlpha>
      </div>
    </div>
  )
}

function ButtonsClose() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <ButtonClose />
        <ButtonClose disabled />
      </div>
    </div>
  )
}

function Badges() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Badge>Label 01</Badge>
        <Badge variant="neutral">Label 02</Badge>
      </div>
    </div>
  )
}

function InputsOmega() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <InputOmega IconComponent={SearchIcon} />
        <InputOmega
          IconComponent={SearchIcon}
          placeholder="Default placeholder value..."
        />
      </div>

      <div className="flex items-center gap-4">
        <InputOmega />
        <InputOmega placeholder="Default placeholder value..." />
      </div>
    </div>
  )
}

function InputsAlpha() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <InputAlpha IconComponent={SearchIcon} />
        <InputAlpha
          IconComponent={SearchIcon}
          placeholder="Default placeholder value..."
        />
      </div>

      <div className="flex items-center gap-4">
        <InputAlpha />
        <InputAlpha placeholder="Default placeholder value..." />
      </div>
    </div>
  )
}
