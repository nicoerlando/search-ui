import React from "react";
import Header from "../../header/header";
import SearchResult from "./SearchResult";
import { resultData } from "./SearchResultData";
import Contact from "../../more-information/Contact";
import GitHub from "../../more-information/GitHub";
import "./SearchResult.css";

export default function SearchResultPage() {
  return (
    <div>
      <Header />
      <div className={"big-result"}>
        <div className={"search-result"}>
          {resultData.map((result, i) => (
            <SearchResult
              index={i + 1}
              title={result.title}
              pageUrl={result.pageUrl}
              source={result.source}
              content={result.content}
            />
          ))}
        </div>
        <div className={"more-information"}>
          <Contact />
          {/* <GitHub /> */}
        </div>
      </div>
    </div>
  );
}
