import React, { useState } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';




const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/result');
  };
  return (<form action="https://qv5krif365.execute-api.ap-southeast-1.amazonaws.com/dev/search-query-tagger-lambda" method="post" onSubmit={handleSubmit}>
    <input
      type="text"
      id="question"
      placeholder="search documentations here..."
      name="s"
    />
    <button type="submit">Search</button>
  </form>
  )
};

export default SearchBar;
