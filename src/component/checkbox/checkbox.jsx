// import "./more-information.css";
import React from "react";
// import { ContactData } from "./ContactData";

const Checkbox = (props) => {
  const { id, source, handleChange, checked } = props;
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        name={source}
        onChange={handleChange}
        checked={checked}
      />
      <label>{source}</label>
    </div>
  );
};

export default Checkbox;
