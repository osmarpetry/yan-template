import * as S from './styles'

import Logo from 'components/Logo'
import { Menu as MenuIcon } from '@styled-icons/material/Menu'
import { Person as PersonIcon } from '@styled-icons/material/Person'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile aria-label="Application logo" />
    </S.LogoWrapper>
    <S.IconWrapper>
      <PersonIcon aria-label="Profile" />
    </S.IconWrapper>
  </S.Wrapper>
)

export default Menu
