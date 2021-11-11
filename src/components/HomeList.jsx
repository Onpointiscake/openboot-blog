import {
  Box,
  Badge,
  SimpleGrid,
  List,
  Tag,
  TagLabel
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react"

import Article from "./Article";

export default function HomeList() {

  const [articles, setArticles] = useState([]);
  const [tagsData, setTagsData] = useState([]);
  const [tagsAreReady, setTagsState] = useState(false);
  
  useEffect(() => getArticles(), []);

  const getArticles = async () => {
    const articleResponse = await fetch("https://notion-sinsecurity.herokuapp.com/api/articulos/mostrar");
    const tagsResponse = await fetch("https://notion-sinsecurity.herokuapp.com/api/categorias/mostrar")

    const data = await articleResponse.json();
    const dataTags = await tagsResponse.json();

    setArticles(data);

    setTagsData(dataTags);
    setTagsState(true)
    
  };

    return (
      <div>
      <SimpleGrid mt="5%" mb="5%" columns={3} spacing={5}>
      {articles.map((article, index)=> (
            <Article key={article.id} id={article.id} 
                     titulo={article.titulo}
                     categoria={tagsAreReady ? tagsData[index].categoria : 'Cargando...'}
                     autor={article.autor}
                     fechaCreacion={article.fechaCreacion}
            />
      ))}
      </SimpleGrid>
  </div>
    );
  
}
