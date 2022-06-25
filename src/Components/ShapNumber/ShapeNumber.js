import styled from "styled-components";

const StyleNumber = styled.div`
  background: ${({ bgColor }) => bgColor ?? "#fcdd06"} 0% 0% no-repeat
    padding-box;
  margin-right: 4px;
  color: ${({ bgColor }) => bgColor && "#fff"};
  width: 40px;
  height: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
`;

export default StyleNumber;
