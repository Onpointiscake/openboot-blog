import React, { useState } from "react";
//import {Link} from 'react-router-dom'
import "../styles/EditorApp.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "@pathofdev/react-tag-input/build/index.css";

import { useNavigate } from "react-router-dom";

export default function EditorApp() {
  const [markdown, setMarkdown] = useState("Heading");
  const navigate = useNavigate();

  function createArticle(event) {
    event.preventDefault();


    // Una vez que el backend lo haya creado, cambiar :id_articulo por id actual
    navigate("/articulo/:id_articulo");
  }


  return (
    <React.Fragment>
        <form
          onSubmit={createArticle}
          colorScheme="brand"
          id="markdown__editor__post"
        >
          <input
            placeholder="Amazing title here! ⚡️"
            isRequired={true}
            type="text"
            className="editor_title"
          />
                    <h3 className="editor_subtitle">
            Upload your cover photo
          </h3>
            <input type="file" id="img" name="img" accept="image/*" />

          <select
            isRequired={true}
            placeholder="Select Author"
            className="editor_author"
          >
            <option>Ana</option>
            <option>Javier</option>
            <option>Josema</option>
            <option>Clemen</option>
          </select>

          <h3 className="editor_subtitle">
            Select your category
          </h3>

          <div id="radio_buttons_group">
            <input type="radio" id="category_java"
              value="java" />
            <label for="category_java">Java</label>

            <input type="radio" id="category_spring"
              value="spring" />
            <label for="category_spring">Spring</label>

            <input type="radio" id="category_htmlcss"
              value="htmlcss" />
            <label for="category_htmlcss">HTML & CSS</label>

            <input type="radio" id="category_javascript"
              value="javascript" />
            <label for="category_javascript">JavaScript</label>

            <input type="radio" id="category_react"
              value="react" />
            <label for="category_react">React JS</label>


          </div>
          <h3 className="editor_subtitle"> Write here</h3>

          <input
            isRequired={true}
            type="textarea"
            resize={"none"}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />

          <span className="container">
            <MarkdownPreview source={markdown} />
          </span>

          <button type="submit" colorScheme="brand">
            New Post
          </button>
        </form>
    </React.Fragment>
  );
}
