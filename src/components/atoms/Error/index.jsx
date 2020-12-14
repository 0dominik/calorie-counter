import React from 'react';
import { StyledError } from './style';
import PropTypes from 'prop-types';

const Error = ({ text }) => {
  return <StyledError>{text}</StyledError>;
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
