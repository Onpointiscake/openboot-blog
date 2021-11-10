import {
  Box,
  List,
  Tag,
  TagLabel,
  Badge,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";


import Article from "./Article";

export default function HomeList() {
  const properties = [
    { id: 1, titulo: 'Este es el primer articulo', date: "08/11/2021", author: "Rocio", tags: ["ReactJS", "JavaScript", "CSS", "HTML5  "] },
    { id: 2, titulo: 'Este siguiente es el segundo', date: "08/11/2021", author: "Pepe", tags: ["Java", "Spring", "CSS", "HTML5  "] },
    { id: 3, titulo: 'Otro más por aquí', date: "08/11/2021", author: "Ana", tags: ["CSS", "c++", "Swift", "HTML5  "] },
    { id: 4, titulo: 'Este el cuarto y ultimo post', date:"08/11/2021", author: "David", tags: ["Python", "Django", "CSS", "HTML5  "] },
    { id: 4, titulo: 'Este el cuarto y ultimo post', date:"08/11/2021", author: "David", tags: ["Python", "Django", "CSS", "HTML5  "] }

  ]

  return (
    <div>
      <SimpleGrid mt="5%" mb="5%" columns={{lg:"3",md:"2", sm:"1"}} spacing={2}>
    {properties.map((article)=> (
      <Box maxW="lg" borderWidth="2px" borderRadius="lg" >
         <Box p="2">
        <Box
            m="2"
            fontWeight="semibold"
            fontSize="2xl"
            lineHeight="tight"
            isTruncated
          >
            {article.titulo}
          </Box>
          <Article key={article.id} id={article.id} titulo={article.titulo} />
          <Box fontSize="md">{article.date}</Box>
          <Box>
            
            <Badge
              m="3"
              fontSize="xl"
              borderRadius="lg"
              px="3"
              colorScheme="gray"
            >
              {article.author}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              
              <List className="tags">
              {article.tags.map((tag, index) => (
                  <Tag m="2" key={index} className="tag">
                  <TagLabel className="tag-title">{tag}</TagLabel>
                </Tag>
              ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    ))}
    </SimpleGrid>
</div>
  );
}
