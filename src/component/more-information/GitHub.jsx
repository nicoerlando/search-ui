import "./more-information.css";
import React from "react";
import { GitHubData } from "./GitHubData";

export default function GitHub({}) {
  return (
    <div>
      <h4> Related Projects </h4>
      <div className={"pictures"}>
        {GitHubData.map((projects) => (
          <div>
            <img src={projects.logo} alt="logo" className={"picture"}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
