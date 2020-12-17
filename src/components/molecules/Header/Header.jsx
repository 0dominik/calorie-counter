import React from 'react';
import { Logo } from '../../atoms/Logo/Logo';
import { StyledHeader } from './style';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};
