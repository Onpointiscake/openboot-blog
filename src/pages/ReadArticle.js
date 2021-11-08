import React from 'react'
import {Link }  from "react-router-dom";

export default function ReadArticle() {

    return (
        <div>
            <h1>The Title of the Article</h1>
            <h5>Estas en el articulo </h5>
            <p>The content of the article</p>
            <small>The author of the article</small>

            <div>
                <p>Share Icons</p>
            </div>

            <Link to="/"> <button>Go Home</button> </Link>
        </div>
    )
}