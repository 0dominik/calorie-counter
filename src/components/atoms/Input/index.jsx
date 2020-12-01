import React from 'react';
import { StyledInput } from './style';
import PropTypes from 'prop-types';

const Input = ({ size, type, id, onChange, value, placeholder }) => {
  return <StyledInput type={type} size={size} id={id} onChange={onChange} value={value} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
