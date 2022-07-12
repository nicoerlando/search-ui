import React from "react";
import Header from "../../header/header";
import SearchResult from "./SearchResult";
import { resultData } from "./SearchResultData";
import Contact from "../../more-information/Contact";
import GitHub from "../../more-information/GitHub";
import Recommendations from "../../more-information/Recommendations";
import Filter from "../../checkbox/filter";
import "./SearchResult.css";
import { useState } from "react";

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  setResults(newResults) {
    this.setResults(newResults);
  }

  render() {
    return (
      <div>
        <Header setResults={this.setResults} />
        <div className={"big-result"}>
          <div>
            <Filter />
          </div>
          <div className={"search-result"}>
            {this.state.results.map((result, i) => (
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
            <GitHub />
            <Recommendations />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultPage;
