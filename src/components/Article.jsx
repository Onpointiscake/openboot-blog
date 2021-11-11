import React from 'react'
import {Link }  from "react-router-dom";
import { Search2Icon } from '@chakra-ui/icons'
import {
    Tag,
    TagLabel, 
    Box,
    Badge
  } from "@chakra-ui/react";

export default function Article(props) {
    return (
        <div>
             <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
           <Box p="2">
          <Box mt="1" fontWeight="semibold" fontSize="xl" lineHeight="tight" isTruncated>
              {props.titulo}
            </Box>
            <Box fontSize="xl">{props.fechaCreacion}</Box>
            <Box>
              <Badge
                m="3"
                fontSize="xl"
                borderRadius="lg"
                px="3"
                colorScheme="gray"
              >
                {props.autor}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
              </Box>
            </Box>
            <Tag m="2" className="tag">
                    <TagLabel className="tag-title">{props.categoria}</TagLabel>
            </Tag>
            </Box>
            <Link to={`/articulo/${props.id}`}>Leer Más <Search2Icon w={6} h={6} color="green.500" /> </Link>
        </Box>
        </div>
    )
}