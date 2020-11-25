import styled from "styled-components";

export const StyledFoodElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  label {
    margin-right: 10px;
    text-align: center;
  }

  @media (max-width: 350px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  margin: 5px 0;
`;

export const Ingredients = styled.p`
  text-align: center;
  margin-top: 5px;
`;

export const Unit = styled.p`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 3px;
`;
