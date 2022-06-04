import React from "react";
import { Button } from "../Button/Button";

function BlockText() {
  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <p>Save up to $99.99</p>
      <h2>iPhone 11 PRO</h2>
      <p>
        Pro cameras.
        <br />
        Pro display. Pro performance.
      </p>
      <Button width={"100%;"} bg={"#FCDD06;"}>
        shop now
      </Button>
    </div>
  );
}

export default BlockText;
