import "./more-information.css";
import React from "react";
import { RecommendationsData } from "./RecommendationsData";

export default function Recommendations({}) {
  return (
    <div>
      <h4> Related Topics </h4>
      <div className={"content"}>
        {RecommendationsData.map((queries) => (
          <div>
            <a href={queries.url}>{queries.query}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
