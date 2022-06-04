import styled from "styled-components";

import Img2 from "../../images/img2.PNG";
import { Image } from "../ImageTag/Image";
import QuantityCounter from "./QuantityCounter";

const CardQuantity = (props) => {
  return (
    <StyledCardQuantity>
      <img src={props.imgurl} alt={""} />
      <p>Apple iPhone 11 Pro 256GB Memory</p>
      <QuantityCounter />
      <b>$499.99</b>
    </StyledCardQuantity>
  );
};
const StyledCardQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  width: 80%;
  height: 100%;
  border-radius: 6px;
  margin-bottom: 8px;
  b {
    font-size: 22px;
  }
  img {
    border-radius: 6px;
  }
`;

export default CardQuantity;
