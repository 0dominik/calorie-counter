import React from 'react';
import { LogoImg, H1 } from './style';

const Logo = () => {
  return (
    <H1>
      <LogoImg src="./img/logo.png" alt="carrot logo" />
      <span>Calorie Counter</span>
    </H1>
  );
};

export default Logo;
