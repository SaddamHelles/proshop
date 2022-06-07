import React from "react";
import ImgMediaCard from "../Components/Card/Card";
import { Image } from "../Components/ImageTag/Image";
import { Line } from "../Components/Line/Line";
import { Title } from "../Components/Titles/Title";
import { GeneralContainer } from "../GeneralContainer/GeneralContainer";
import Img2 from "../images/img2.PNG";
import Img3 from "../images/img3.PNG";
import Img4 from "../images/img4.PNG";
import Img5 from "../images/img5.PNG";
import ImgCard1 from "../images/img11.PNG";
import ImgCard2 from "../images/img10.PNG";
import ImgCard3 from "../images/img9.PNG";
import ImgCard4 from "../images/img5.PNG";
import { MySwiper } from "../Components/Swiper/Swiper";

function Page1() {
  return (
    <>
      <MySwiper />
      <Line />
      <GeneralContainer>
        <Title>Featured Categories</Title>

        <figure>
          <Image wdith={""} src={Img2} />
          <figcaption>LAPTOP</figcaption>
        </figure>
        <figure>
          <Image wdith={""} src={Img3} />
          <figcaption>COMPUTER COMPONENTS</figcaption>
        </figure>
        <figure>
          <Image wdith={"100px;"} src={Img4} />
          <figcaption>DEVICES</figcaption>
        </figure>
        <figure>
          <Image wdith={""} src={Img5} />
          <figcaption>ACCESSORIES</figcaption>
        </figure>
      </GeneralContainer>
      <Line />
      <GeneralContainer>
        <Title>TOP RATE PRODUCTS</Title>
        <ImgMediaCard imgurl={ImgCard1}></ImgMediaCard>
        <ImgMediaCard imgurl={ImgCard2}></ImgMediaCard>
        <ImgMediaCard imgurl={ImgCard3}></ImgMediaCard>
        <ImgMediaCard imgurl={ImgCard4}></ImgMediaCard>
      </GeneralContainer>
    </>
  );
}

export default Page1;
