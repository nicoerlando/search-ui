import React from "react";
import Header from "../../header/header";
import SearchResult from "./SearchResult";
import { resultData } from "./SearchResultData";
import Contact from "../../more-information/Contact";
import GitHub from "../../more-information/GitHub";
import Recommendations from "../../more-information/Recommendations";
import "./SearchResult.css";
import { useState } from "react";

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.setResults = this.setResults.bind(this)
  }

  setResults(newResults) {
    this.setState({results: newResults})
  }

  render() {
    return (
      <div>
        <Header setResults={this.setResults} />
        <div className={"big-result"}>
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
            <Recommendations />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultPage;
