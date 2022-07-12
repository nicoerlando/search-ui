import React from "react";
import Checkbox from "./checkbox";

export default function Filter({}) {
  // const [menuOpen, setMenuOpen] = useState(0)

  return (
    <div>
      <Checkbox
        id="1"
        source="Confluence"
        checked={this.state.categories.first}
        handleChange={this.handleChange}
      />
    </div>
  );
}
