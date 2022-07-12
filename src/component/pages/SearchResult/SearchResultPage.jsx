import React from "react";
import Header from "../../header/header";
import SearchResult from "./SearchResult";
import { resultData } from "./SearchResultData";
import Contact from "../../more-information/Contact";
import GitHub from "../../more-information/GitHub";
import Recommendations from "../../more-information/Recommendations";
import "./SearchResult.css";

class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Header ref={this.headerRef}/>
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
            <GitHub />
            <Recommendations />
          </div>
        </div>
      </div>
    );

  }
}

export default SearchResultPage
