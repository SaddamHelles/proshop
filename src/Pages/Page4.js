import React from "react";
import img14 from "../images/img14.PNG";
import img15 from "../images/img15.PNG";
import img16 from "../images/img16.PNG";
import CardQuantity from "../Components/CardQuantities/CardQuantity";
import { GeneralContainer } from "../GeneralContainer/GeneralContainer";
import TotalPrice from "../Components/TotalPrice/TotalPrice";

function Page4() {
  return (
    <GeneralContainer>
      <CardQuantity imgurl={img14}></CardQuantity>
      <TotalPrice />
      <CardQuantity imgurl={img15}></CardQuantity>
      <CardQuantity imgurl={img16}></CardQuantity>
    </GeneralContainer>
  );
}

export default Page4;
