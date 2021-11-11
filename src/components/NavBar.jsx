import React from "react";
import { Link } from "react-router-dom";
import Toggle from "./toggle/Toggle";

export default function NavBar() {
  return (
    <React.Fragment>
      <div>
        <Link to="/" fontSize="xl">
          Home
        </Link>
        <Toggle />
      </div>
    </React.Fragment>
  );
}
