import React from 'react'
import {Link }  from "react-router-dom";

export default function Article(props) {
    return (
        <div>
            <Link to={`/articulo/${props.id}`}><p>LEER AHORA</p></Link>
        </div>
    )
}