import {
  Box,
  List,
  Tag,
  TagLabel,
  Badge,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

// Sample card from Airbnb

export default function HomeList() {
  const property = {
    tags: ["ReactJS", "JavaScript", "CSS", "HTML5  "],
    title: "Create a Blog with ReactJS",
    date: "08/11/2021",
    author: "Ana",
  };

  return (
    <SimpleGrid mt="5%" mb="5%" columns={3} spacing={5}>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="2">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box fontSize="xl">{property.date}</Box>

          <Box>
            <Badge
              m="3"
              fontSize="xl"
              borderRadius="lg"
              px="3"
              colorScheme="gray"
            >
              {property.author}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              <List className="tags">
                {property.tags.map((tag, index) => (
                  <Tag m="2" key={index} className="tag">
                    <TagLabel className="tag-title">{tag}</TagLabel>
                  </Tag>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="2">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box fontSize="xl">{property.date}</Box>

          <Box>
            <Badge
              m="3"
              fontSize="xl"
              borderRadius="lg"
              px="3"
              colorScheme="gray"
            >
              {property.author}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              <List className="tags">
                {property.tags.map((tag, index) => (
                  <Tag m="2" key={index} className="tag">
                    <TagLabel className="tag-title">{tag}</TagLabel>
                  </Tag>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="2">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box fontSize="xl">{property.date}</Box>

          <Box>
            <Badge
              m="3"
              fontSize="xl"
              borderRadius="lg"
              px="3"
              colorScheme="gray"
            >
              {property.author}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              <List className="tags">
                {property.tags.map((tag, index) => (
                  <Tag m="2" key={index} className="tag">
                    <TagLabel className="tag-title">{tag}</TagLabel>
                  </Tag>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="2">
          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="xl"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
          <Box fontSize="xl">{property.date}</Box>

          <Box>
            <Badge
              m="3"
              fontSize="xl"
              borderRadius="lg"
              px="3"
              colorScheme="gray"
            >
              {property.author}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              <List className="tags">
                {property.tags.map((tag, index) => (
                  <Tag m="2" key={index} className="tag">
                    <TagLabel className="tag-title">{tag}</TagLabel>
                  </Tag>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
