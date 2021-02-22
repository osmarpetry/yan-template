import { useState } from 'react'

import Logo from 'components/Logo'

import { Close as CloseIcon } from '@styled-icons/material/Close'
import { Menu as MenuIcon } from '@styled-icons/material/Menu'
import { Person as PersonIcon } from '@styled-icons/material/Person'

import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)} />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile aria-label="Application logo" />
      </S.LogoWrapper>
      <S.IconWrapper>
        <PersonIcon aria-label="Profile" />
      </S.IconWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
