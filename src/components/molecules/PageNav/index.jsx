import React from 'react';

import Button from '../../atoms/Button';
import { Container } from './style';
import PropTypes from 'prop-types';

const PageContainer = ({ fetchData, currentPage, setCurrentPage, totalPages }) => {
  const nextPage = () => {
    setCurrentPage((prevValue) => prevValue + 1);
    fetchData(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevValue) => prevValue - 1);
    fetchData(currentPage - 1);
  };

  return (
    <Container>
      <Button size='small' onClick={prevPage} type='button' text='Previous page' color='blue' disabled={currentPage <= 1} />
      <p>
        {currentPage} / {totalPages}
      </p>
      <Button size='small' onClick={nextPage} type='button' text='Next page' color='blue' disabled={currentPage >= totalPages} />
    </Container>
  );
};

PageContainer.propTypes = {
  fetchData: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalPages: PropTypes.number,
};

export default PageContainer;
