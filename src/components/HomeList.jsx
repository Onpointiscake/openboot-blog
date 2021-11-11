
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
   // No consigo que se vean las imagenes
   // Lo comento provisionalmente para que funcione lo de arriba y luego ya refactorizas tu:
  /*
  return (
    <div className="homelist_container">
      {properties.map((article) => (
        <div className="card_article_container">
          <img className="article_image" scr={article.rutaImagen} alt="" />
          <h1 className="article_title">{article.titulo}</h1>
          <Article
            key={article.id}
            id={article.id}
            titulo={article.titulo}
            imagen={article.rutaImagen}
          />
          <h3 className="article_fechaCreacion">{article.fechaCreacion}</h3>

          <h3 className="article_autor">{article.autor}</h3>
        </div>
      ))}
    </div>
  );
  */
}
