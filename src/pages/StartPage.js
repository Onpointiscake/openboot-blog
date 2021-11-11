import React from "react";
import HomeList from "../components/HomeList";
import { Link } from "react-router-dom";

import "../styles/startpage.css";

//El link de ver mas lleva a la pagina de editar, no a la vista del articulo

export default function StartPage() {
  return (
    <React.Fragment>
      <div className="container_home">
        <div className="container_heading_home">
          <h1 className="title_home">Hey! 👋</h1>
          <h2 className="subtitle_home">...start writing something</h2>
          <Link to="/editorapp">
            <button className="newpost_home" to="./EditorApp.js">
              New Post
            </button>
          </Link>{" "}
        </div>

        <Link to="/login"></Link>
        <div>
          <HomeList />
        </div>
      </div>
    </React.Fragment>
  );
}
