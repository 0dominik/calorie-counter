import React from "react";

import Button from "../../atoms/Button";

import { Container } from "./style";

const PageContainer = ({ prevPage, nextPage, currentPage, totalPages }) => {
  return (
    <Container>
      <Button
        size="small"
        onClick={prevPage}
        type="button"
        text="Previous page"
        color="blue"
        disabled={currentPage <= 1}
      />
      <p>
        {currentPage} / {totalPages}
      </p>
      <Button
        size="small"
        onClick={nextPage}
        type="button"
        text="Next page"
        color="blue"
        disabled={currentPage >= totalPages}
      />
    </Container>
  );
};

export default PageContainer;
