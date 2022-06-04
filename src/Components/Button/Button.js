import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  border-radius: 10px;
  text-transform: uppercase;
  border: none;
  height: 48px;
  font-weight: bold;
`;
