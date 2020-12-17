import React from 'react';

import { Button } from '../../atoms/Button/Button';
import { Container } from './style';
import PropTypes from 'prop-types';

export const PageContainer = ({ fetchData, currentPage, setCurrentPage, totalPages }) => {
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
      <Button
        size="small"
        onClick={prevPage}
        type="button"
        color="blue"
        disabled={currentPage <= 1}
      >
        Previous page
      </Button>
      <p>
        {currentPage} / {totalPages}
      </p>
      <Button
        size="small"
        onClick={nextPage}
        type="button"
        color="blue"
        disabled={currentPage >= totalPages}
      >
        Next page
      </Button>
    </Container>
  );
};

PageContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
