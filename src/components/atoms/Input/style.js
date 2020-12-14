import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 1.6rem;
  height: 35px;
  width: ${({ size }) => (size === 'small' ? '50px' : '150px')};
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  -moz-appearance: textfield;
  ${({ size }) => (size === 'small' ? 'text-align: center' : '')};
  margin: 0;
  padding: 0 5px;
  font-family: 'Lato', sans-serif;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.1);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.lightblue};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    outline: 0;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  }
`;
