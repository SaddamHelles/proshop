import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  flex-direction: column;
  margin: auto;
  margin-top: 5px;
  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const RedBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const RedRectangle = styled(RedBox)`
  width: 350px;
`;
