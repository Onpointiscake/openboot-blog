import React from 'react'
import {Link }  from "react-router-dom";
import { Search2Icon } from '@chakra-ui/icons'

export default function Article(props) {
    return (
        <div>                            {/* Cambiar el color de la lupa al del tema ?¿ No se hacerlo */}
            <Link to={`/articulo/${props.id}`}>Leer Más <Search2Icon w={6} h={6} color="green.500" /> </Link>
        </div>
    )
}