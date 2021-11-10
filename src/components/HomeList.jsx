
import Article from "./Article";

export default function HomeList() {
  const properties = [
    { id: 1, titulo: 'Este es el primer articulo', fechaCreacion: "08/11/2021", autor: "Rocio", categoria: "ReactJS", rutaImagen:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU" },
    { id: 2, titulo: 'Este siguiente es el segundo', fechaCreacion: "08/11/2021", autor: "Pepe", categoria: "Java", rutaImagen:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"  },
    { id: 3, titulo: 'Otro más por aquí', fechaCreacion: "08/11/2021", autor: "Ana", categoria: "CSS", rutaImagen:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU" },
    { id: 4, titulo: 'Este el cuarto y ultimo post', fechaCreacion:"08/11/2021", autor: "David", categoria: "HTML & CSS", rutaImagen:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"  },
    { id: 4, titulo: 'Este el cuarto y ultimo post', fechaCreacion:"08/11/2021", autor: "David", categoria: "Spring", rutaImagen:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"  }

  ]

  return (
    <div className="container_article">
    {properties.map((article)=> (
      <div maxW="lg" borderWidth="2px" borderRadius="lg" >
        <img scr={article.rutaImagen} alt=""/>
         <h1 className="article_title">
            {article.titulo}
          </h1>
          <Article key={article.id} id={article.id} titulo={article.titulo} imagen={article.rutaImagen}/>
          <h3 className="article_fechaCreacion">{article.fechaCreacion}</h3>
            
          <h3 className="article_autor">
            {article.autor}
          </h3>
              

          </div>

    ))}
</div>
  );
}
