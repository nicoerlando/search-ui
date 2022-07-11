import React, { useState } from "react";
import SearchBar from "../SearchResult/SearchBar";

export default function LandingPage() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>GS Integrated Search</h1>
      <div className="search">
        <SearchBar />
      </div>
    </div>
  );
}
