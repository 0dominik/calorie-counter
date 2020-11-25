import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
