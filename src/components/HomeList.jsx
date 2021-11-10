
import Article from "./Article";

export default function HomeList() {
  const properties = [
    { id: 1, titulo: 'Este es el primer articulo', fechaCreacion: "08/11/2021", autor: "Rocio", categoria: "ReactJS", rutaImagen:"https://depor.com/resizer/CmzgBqm-lucY4hl9-eBi8dX72cM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IW7ZDXD2ONFHRFEK5FSZIURNIA.jpg" },
    { id: 2, titulo: 'Este siguiente es el segundo', fechaCreacion: "08/11/2021", autor: "Pepe", categoria: "Java", rutaImagen:"https://depor.com/resizer/CmzgBqm-lucY4hl9-eBi8dX72cM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IW7ZDXD2ONFHRFEK5FSZIURNIA.jpg"  },
    { id: 3, titulo: 'Otro más por aquí', fechaCreacion: "08/11/2021", autor: "Ana", categoria: "CSS", rutaImagen:"https://depor.com/resizer/CmzgBqm-lucY4hl9-eBi8dX72cM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IW7ZDXD2ONFHRFEK5FSZIURNIA.jpg" },
    { id: 4, titulo: 'Este el cuarto y ultimo post', fechaCreacion:"08/11/2021", autor: "David", categoria: "HTML & CSS", rutaImagen:"https://depor.com/resizer/CmzgBqm-lucY4hl9-eBi8dX72cM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IW7ZDXD2ONFHRFEK5FSZIURNIA.jpg"  },
    { id: 4, titulo: 'Este el cuarto y ultimo post', fechaCreacion:"08/11/2021", autor: "David", categoria: "Spring", rutaImagen:"https://depor.com/resizer/CmzgBqm-lucY4hl9-eBi8dX72cM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/IW7ZDXD2ONFHRFEK5FSZIURNIA.jpg"  }

  ]
// no consigo que se vean las imagenes
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
