import React from "react";
import HomeList from "../components/HomeList";
import {Link} from 'react-router-dom'

export default function StartPage() {
  return (
    <React.Fragment>
      <div >
        <div >
          <h1 fontSize="60px" align="left">
            Hey! 👋
          </h1>
          <h2 fontSize="40px" align="left">
            ...start writing something
          </h2>{" "}
            <Link to="/editorapp">
              <button to="./EditorApp.js" variant="outline" size="lg">
                New Post
              </button>
            </Link>
            <Link to="/login">
              <button to="./Login.js" variant="outline" size="lg">
                Login
              </button>
            </Link>
        </div>{" "}
        <div maxW="div.xl">
          <HomeList />
        </div>
       
      </div>
    </React.Fragment>
  );
}
