import React from 'react';
import { StyledButton } from './style';

const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;
