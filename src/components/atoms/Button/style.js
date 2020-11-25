import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  ${({ size }) =>
    size === "small"
      ? `
  height: 35px;
  padding: 0 15px;
  font-size: 1.6rem;
  `
      : `
  height: 45px;
  padding: 0 25px;
  font-size: 2rem;
  `}
  ${({ icon }) => (icon ? "font-size: 2.4rem;" : "")}

  margin: ${({ margin }) => margin};
  background-color: ${({ theme, color }) => theme.colors[color]};
  border: 0;
  color: #ffffff;
  text-transform: uppercase;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.3);
  transition: 0.15s;
  margin: 0 3px;
  font-family: "Lato", sans-serif;
  ${({ disabled, theme }) =>
    disabled
      ? `background-color: ${theme.colors.disabled};
        box-shadow: none;
        `
      : ""}

  &:hover,
  &:focus,
  &:active {
    ${({ theme, color, disabled }) =>
      !disabled
        ? `background-color:  ${theme.colors[`dark${color}`]};
        transform: translateY(1px);
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.5);
        cursor: pointer;`
        : ""};
  }
`;
