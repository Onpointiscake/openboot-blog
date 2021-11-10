import React from 'react'
import {Link }  from "react-router-dom";
import { Search2Icon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button';

export default function Article(props) {
    return (
        <div>                       
            <Link to={`/articulo/${props.id}`}> <Button m="7px" size="sm" leftIcon={<Search2Icon />} variant="outline"> 
    See more
  </Button></Link>
            {/* <Link to={`/articulo/${props.id}`}>Leer Más <Search2Icon w={2} h={2} /> </Link> */}
        </div>
    )
}