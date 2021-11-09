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
    { id: 4, titulo: 'Este el cuarto y ultimo post', date:"08/11/2021", author: "David", tags: ["Python", "Django", "CSS", "HTML5  "] }
  ]

  return (
    <div>
      <SimpleGrid mt="5%" mb="5%" columns={3} spacing={5}>
    {properties.map((article)=> (
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
         <Box p="2">
        <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            isTruncated
          >
            {article.titulo}
          </Box>
          <Article key={article.id} id={article.id} titulo={article.titulo} />
          <Box fontSize="xl">{article.date}</Box>
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
