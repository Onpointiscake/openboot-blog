import React from "react";
import { Link } from "react-router-dom";

export default function Article(props) {
  return (
    <div>
      <Link to={`/articulo/${props.id}`}>
        {" "}
        <button id="see_more">See more</button>
      </Link>
      {/* <Link to={`/articulo/${props.id}`}>Leer Más <Search2Icon w={2} h={2} /> </Link> */}
    </div>
  );
}
