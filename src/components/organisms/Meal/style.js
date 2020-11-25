import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5px;

  ::after {
    content: "";
    width: 200px;
    height: 4px;
    margin: 40px 0;
    background-color: #000000;
  }

  ul {
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Sum = styled.p`
  margin-top: 20px;
`;

export const Info = styled.p`
  font-weight: 700;
  margin-bottom: 30px;
`;
