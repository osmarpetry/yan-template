import * as S from './styled'

export interface FullpageInformationProps {
  title: string
  description: string
  imgSrc?: string
  imgAlt?: string
}

export default function FullpageInformation({
  title,
  description,
  imgSrc = '/img/hero-illustration.svg',
  imgAlt = 'Um desenvolvedor de frente para uma tela com código.'
}: FullpageInformationProps) {
  return (
    <S.Wrapper>
      <S.Illustration src={imgSrc} alt={imgAlt} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}
