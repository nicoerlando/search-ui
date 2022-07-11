import "./SearchResult.css";
import { Link } from "react-router-dom";
import React from "react";

export default function SearchResult(props) {
  const { title, source, pageUrl, content } = props;
  return (
    <div className={"container"}>
      <div className={"left-box"}>
        <a href={pageUrl}>
          <h3 className={"title"}>{title}</h3>
        </a>
        <div className={"source"}>{source}</div>
        <div className={"content"}>{content}</div>
      </div>
    </div>
  );
}
