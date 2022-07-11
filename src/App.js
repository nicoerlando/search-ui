import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/pages/LandingPage/LandingPage";
import SearchResultPage from "./component/pages/SearchResult/SearchResultPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<div><LandingPage/></div>}></Route>
          <Route path="/result" element={<div><SearchResultPage/></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
