import React from "react";
import { Image } from "../ImageTag/Image";
import "./SliderStyle.css";
import BlockText from "../BlockText/BlockText";

function Slider({ UrlImage }) {
  return (
    <div className="slider-container">
      <BlockText />
      <Image width={"400px;"} src={UrlImage} />
    </div>
  );
}

export default Slider;