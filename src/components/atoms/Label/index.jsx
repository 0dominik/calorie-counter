import React from 'react';
import { StyledLabel } from './style';
import PropTypes from 'prop-types';

const Label = ({ text, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

Label.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Label;
