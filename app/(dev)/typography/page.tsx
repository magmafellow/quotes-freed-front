import DefaultContainer from '@/components/blocks/default-container'
import InstagramColorfulIcon from '@/components/icons/instagram-colorful-icon'
import ShareIcon from '@/components/icons/share-icon'
import Image from 'next/image'

const exampleText = `На празднике собрались самые блестящие вельможи Европы и лучшие умы
          своего времени — Лафонтен, Ларошфуко...`

const exampleText_2 = 'Освежающий бриз'

export default function Home() {
  return (
    <div className="">
      <DefaultContainer>
        <div className="typo-h1-desktop text-accent-700 mb-10">Typograhpy</div>
      </DefaultContainer>
      <div>
        <DefaultContainer>
          <h2 className="typo-h2-desktop text-accent-600">Headings</h2>
        </DefaultContainer>
        <DefaultContainer className="mb-10">
          <div className="typo-h1-desktop">Awesome title H1</div>
          <div className="typo-h2-desktop">Awesome title H2</div>
          <div className="typo-h3-desktop">Awesome title H3</div>
          <div className="typo-h4-desktop">Awesome title H4</div>
          <div className="typo-h5-desktop">Awesome title H5</div>
          <div className="typo-h6-desktop">Awesome title H6</div>
        </DefaultContainer>

        <DefaultContainer className="mb-10">
          <div className="typo-h1-tablet">Awesome title H1</div>
          <div className="typo-h2-tablet">Awesome title H2</div>
          <div className="typo-h3-tablet">Awesome title H3</div>
          <div className="typo-h4-tablet">Awesome title H4</div>
          <div className="typo-h5-tablet">Awesome title H5</div>
          <div className="typo-h6-tablet">Awesome title H6</div>
        </DefaultContainer>

        <DefaultContainer className="mb-16">
          <div className="typo-h1-mobile">Awesome title H1</div>
          <div className="typo-h2-mobile">Awesome title H2</div>
          <div className="typo-h3-mobile">Awesome title H3</div>
          <div className="typo-h4-mobile">Awesome title H4</div>
          <div className="typo-h5-mobile">Awesome title H5</div>
          <div className="typo-h6-mobile">Awesome title H6</div>
        </DefaultContainer>
      </div>

      <DefaultContainer className="mb-10">
        <div className="typo-h2-desktop text-accent-600 mb-2">Body text</div>
        <div className="max-w-[760px]">
          <p className="typo-body-xl mb-6">{exampleText}</p>
          <p className="typo-body-lg mb-6">{exampleText}</p>
          <p className="typo-body-md mb-6">{exampleText}</p>
          <p className="typo-body-sm mb-6">{exampleText}</p>
          <p className="typo-body-xs mb-6">{exampleText}</p>
        </div>
      </DefaultContainer>
      <DefaultContainer className="mb-10">
        <div className="typo-h2-desktop text-accent-600 mb-2">
          Body-bold text
        </div>
        <div className="max-w-[760px]">
          <p className="typo-body-xl-bold mb-6">{exampleText}</p>
          <p className="typo-body-lg-bold mb-6">{exampleText}</p>
          <p className="typo-body-md-bold mb-6">{exampleText}</p>
          <p className="typo-body-sm-bold mb-6">{exampleText}</p>
          <p className="typo-body-xs-bold mb-6">{exampleText}</p>
        </div>
      </DefaultContainer>
      <DefaultContainer className="mb-10">
        <div className="typo-h2-desktop text-accent-600 mb-2">Caption text</div>
        <div className="max-w-[760px]">
          <p className="typo-caption-lg mb-6">{exampleText_2}</p>
          <p className="typo-caption-md mb-6">{exampleText_2}</p>
          <p className="typo-caption-sm mb-6">{exampleText_2}</p>
          <p className="typo-caption-xs mb-6">{exampleText_2}</p>
        </div>
      </DefaultContainer>
    </div>
  )
}
