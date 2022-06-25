import React from "react";
import StyleNumber from "../Components/ShapNumber/ShapeNumber";
import { GeneralContainer } from "../GeneralContainer/GeneralContainer";
import { Line } from "../Components/Line/Line";
import ContainerSection from "../Components/ContainerSection/ContainerSection";
import InputField from "../Components/InputField/InputField";
import StyledGrayText from "../Components/GrayText/StyledGrayText";
import { Image } from "../Components/ImageTag/Image";
import Img2 from "../images/img2.PNG";

const Page5 = () => {
  return (
    <GeneralContainer>
      <section>
        <h3>Review Order</h3>
        <div className="flex">
          <StyleNumber>1</StyleNumber>
          <h5>Shipping and Payment</h5>
          <Line />
          <StyleNumber bgColor={"#707070"}>2</StyleNumber>
          <h5>Place an Order</h5>
        </div>
      </section>
      <div style={{ width: "100%" }}></div>
      <ContainerSection>
        <p style={{ fontWeight: "bold", fontSize: "1.5rem", width: "100%" }}>
          Shipping Address
        </p>
        <InputField
          labelText="Country"
          placeholder="Country"
          inputName="country"
        />
        <InputField labelText="City" placeholder="City" inputName="city" />
        <InputField
          labelText="Zip Code"
          placeholder="Zip Code"
          inputName="zipCode"
        />
        <InputField
          labelText="Street Address "
          placeholder="Street Address"
          inputName="streetAddress"
        />
        <p style={{ fontWeight: "bold", fontSize: "1.5rem", width: "100%" }}>
          Payment Details{" "}
        </p>
        <InputField
          labelText="Name on Card"
          placeholder="Name on Card"
          inputName="nameOnCard"
        />
        <InputField
          labelText="Card Number"
          placeholder="Card Number"
          inputName="cardNumber"
        />
        <InputField
          labelText="Expiration Date"
          placeholder="Expiration Date"
          inputName="expirationDate"
        />
        <InputField labelText="CVC" placeholder="CVC" inputName="CVC" />
      </ContainerSection>
      <ContainerSection>
        <p style={{ fontWeight: "bold", fontSize: "1.5rem", width: "100%" }}>
          Order Details
        </p>
        <img width={"135px"} alt="" src={require("../images/img14.PNG")} />
        <StyledGrayText>iPhone 11 Pro 256GB Memory</StyledGrayText>
        <StyledGrayText>$499.99</StyledGrayText>
        <hr width={"100%"} />
        <p style={{ fontWeight: "bold", fontSize: "1.5rem", width: "100%" }}>
          Order Details
        </p>
        <img width={"135px"} alt="" src={require("../images/img15.PNG")} />
        <StyledGrayText>
          Apple Airpods Wireless Bluetooth Headset
        </StyledGrayText>
        <StyledGrayText>$89.99</StyledGrayText>
        <hr width={"100%"} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <StyledGrayText>Subtotal $589.98</StyledGrayText>
          <StyledGrayText>Tax $2.53</StyledGrayText>
          <StyledGrayText>Shipping $0.00</StyledGrayText>
          <h4>Total $592.51</h4>
        </div>
      </ContainerSection>
    </GeneralContainer>
  );
};

export default Page5;
