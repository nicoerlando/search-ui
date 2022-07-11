import React, { useState } from "react";

const SearchBar = () => (
  <form action="/" method="get">
    <input
      type="text"
      id="header-search"
      placeholder="search documentations here..."
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
