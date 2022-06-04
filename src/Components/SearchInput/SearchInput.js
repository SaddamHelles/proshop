import React from "react";
import "./style.css";

function SearchInput() {
  return (
    <form class="example" action="/action_page.php">
      <div className="search-input">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i class="fa fa-search"></i> Search
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
