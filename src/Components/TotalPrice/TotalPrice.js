import React from "react";
import { Button } from "../Button/Button";

const TotalPrice = () => {
  const style = {
    width: "18%",
    minHeight: "152px",
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    borderRadius: "6px",
  };

  return (
    <div style={style}>
      <p style={{ marginBottom: "0" }}>Subtotal (3) items</p>
      <strike>$999.97</strike>
      <b>$989.97</b>
      <hr />
      <Button style={{ margin: "auto" }} width={"90%;"} bg={"#FCDD06;"}>
        Proceed to checkout
      </Button>
    </div>
  );
};

export default TotalPrice;
