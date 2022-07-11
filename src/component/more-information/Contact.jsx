import "./Contact.css";
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
              className={"person-profile-pic"}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
