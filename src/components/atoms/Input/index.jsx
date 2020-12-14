import React from 'react';
import { StyledInput } from './style';
import PropTypes from 'prop-types';

const Input = ({ size, type, id, onChange, value, placeholder }) => {
  return (
    <StyledInput
      type={type}
      size={size}
      id={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.number,
};

Input.defaultProps = {
  type: PropTypes.string,
  placeholder: '',
  size: 'large',
};

export default Input;
