import * as S from './styled'

export default function FullpageInformation({
  title,
  description,
  img = {
    src: '/img/hero-illustration.svg',
    alt: 'Um desenvolvedor de frente para uma tela com código.'
  }
}: {
  title: string
  description: string
  img?: {
    src: string
    alt: string
  }
}) {
  return (
    <S.Wrapper>
      <S.Illustration src={img.src} alt={img.alt} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}
