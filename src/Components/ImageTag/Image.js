import React from "react";
import styled from "styled-components";
export const Image = styled.img`
  width: 20vw;
  min-width: 300px;
  /* height: 230px; */
  src: url(${(props) => props.URL});
  margin-bottom: 5px;
`;
