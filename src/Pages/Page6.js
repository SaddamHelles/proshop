import React from "react";
import ImgMediaCard from "../Components/Card/Card";
import { Line } from "../Components/Line/Line";
import { Title } from "../Components/Titles/Title";
import { GeneralContainer } from "../GeneralContainer/GeneralContainer";
import img8 from "../images/img8.PNG";
import img7 from "../images/img7.PNG";
import img6 from "../images/img6.PNG";

const Page6 = () => {
  return (
    <>
      <div style={{ width: "100%", margin: "60px" }}>
        <a href="#">Back /</a>
        <span> Shopping Cart</span>
      </div>
      <h4>Your shopping cart is empty</h4>
      <img alt="" src={require("../images/Group 491.png")} />
      <Line />
      <GeneralContainer>
        <Title>Recently viewed</Title>
        <ImgMediaCard imgurl={img8}></ImgMediaCard>
        <ImgMediaCard imgurl={img7}></ImgMediaCard>
        <ImgMediaCard imgurl={img6}></ImgMediaCard>
      </GeneralContainer>
    </>
  );
};

export default Page6;
