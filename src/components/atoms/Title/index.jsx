import React from 'react';
import { H2 } from './style';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return <H2>{text}</H2>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
