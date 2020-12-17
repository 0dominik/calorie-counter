import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: normal;
  position: relative;
  margin-bottom: 30px;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.blue};
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    bottom: -5px;
  }
`;
