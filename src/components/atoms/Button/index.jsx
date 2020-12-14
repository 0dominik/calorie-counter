import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';

const Button = ({ text, type, color, size, onClick, hasIcon }) => {
  return (
    <StyledButton
      text={text}
      type={type}
      color={color}
      size={size}
      onClick={onClick}
      hasIcon={hasIcon}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
};

Button.defaultProps = {
  hasIcon: false,
};

export default Button;
