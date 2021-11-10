import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <React.Fragment>
      <div>
        <Link to="/" fontSize="xl">
          Home
        </Link>
      </div>
    </React.Fragment>
  );
}
