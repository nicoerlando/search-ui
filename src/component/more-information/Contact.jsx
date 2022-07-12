import "./more-information.css";
import React from "react";
import { ContactData } from "./ContactData";

export default function Contact({}) {
  return (
    <div>
      <h4> Relevant Contacts </h4>
      <div className={"pictures"}>
        {ContactData.map((person) => (
          <div>
            <img
              src={person.userPicture}
              alt="PersonPicture"
              className={"picture"}
            ></img>
            <div>{person.fullName} </div>
            <div>[{person.division}] </div>
          </div>
        ))}
      </div>
    </div>
  );
}
