import React, { useState } from "react";
import SearchBar from "../SearchResult/SearchBar";
import "./LandingPage.css";

export default function LandingPage() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
  <div className= {"bg"}>
    <div className={"main"}>
      <h1>GS Rigs</h1>
      <div className={"search"}>
        <SearchBar />
      </div>
    </div>
    </div>
  );
}
