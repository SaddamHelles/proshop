import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import "./style.css";
function Nav() {
  return (
    <nav>
      <div className="inner-container">
        <span className="logo-pro">ProShop</span>
        <SearchInput />
        {/* <span className="logo-shop">Shop</span> */}
      </div>
    </nav>
  );
}

export default Nav;
