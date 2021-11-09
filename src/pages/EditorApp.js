import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "../styles/EditorApp.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "@pathofdev/react-tag-input/build/index.css";

import {useNavigate} from 'react-router-dom';

import {
  Editable,
  EditableInput,
  EditablePreview,
  Select,
  Tab,
  List,
  Tag,
  TagLabel,
  TagCloseButton,
  Text,
  Input,
  Tabs,
  Container,
  TabList,
  TabPanels,
  TabPanel,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function EditorApp() {
  const [markdown, setMarkdown] = useState("Heading");
  const navigate = useNavigate();

  function createArticle(event) {
    event.preventDefault()
    /**
        const idArticulo;
        axios.post('/api/articulo', {
            titulo: tituloArticle,
            contenido: contenidoArticle
        }).then(response => idArticulo = response )
            .catch(error => console.log(error))
         */

        // Hacer petición Post para que el back-end devuelva el 
        // id del nuevo artículo creado e insertarlo en :id_article

    // Una vez que el backend lo haya creado:
    navigate('/articulo/:id_articulo')
}

  const TagInput = ({ tags }) => {
    const [tagData, setTagData] = React.useState(tags);
    const removeTagData = (indexToRemove) => {
      setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
    };
    const addTagData = (event) => {
      if (event.target.value !== "") {
        setTagData([...tagData, event.target.value]);
        event.target.value = "";
      }
    };
    return (
      <div className="tag-input">
        <List className="tags">
          {tagData.map((tag, index) => (
            <Tag key={index} className="tag" ml="10px" mr="10px" mb="10px">
              <TagLabel className="tag-title">{tag}</TagLabel>
              <TagCloseButton
                className="tag-close-icon"
                onClick={() => removeTagData(index)}
              >
                x
              </TagCloseButton>
            </Tag>
          ))}
        </List>
        <Input
          type="text"
          onKeyUp={(event) =>
            event.key === "Enter" ? addTagData(event) : null
          }
          placeholder="Press enter to add a tag"
        />
      </div>
    );
  };

  return (
<React.Fragment>
  <Container mt="5%">
      <form onSubmit={createArticle} colorScheme="brand" id="markdown__editor__post">
        <Editable
          m="5%"
          colorScheme="brand"
          textAlign="center"
          defaultValue="Amazing title here! ⚡️"
          fontSize="3xl"
        >
          <EditablePreview colorScheme="brand" />
          <EditableInput colorScheme="brand" />
        </Editable>
        <Select
        m="2%"
          colorScheme="brand"
          isRequired={true}
          placeholder="Select Author"
        >
          <option>Ana</option>
          <option>Javier</option>
          <option>Josema</option>
          <option>Clemen</option>
        </Select>
        <Text 
        fontSize="xl"
        m="2%"
        mt="5%">Press enter to create a tag.</Text>

        <Container className="container_tag"></Container>
        <TagInput tags={["Nodejs", "MongoDB"]} />
        <Tabs colorScheme="brand">
          <TabList colorScheme="brand">
            <Tab colorScheme="brand">Write here</Tab>
            <Tab colorScheme="brand">Magic Here</Tab>
          </TabList>

          <TabPanels colorScheme="brand">
            <TabPanel colorScheme="brand">
              <Textarea
                resize={"none"}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                colorScheme="brand"
              />
            </TabPanel>
            <TabPanel colorScheme="brand">
              <MarkdownPreview source={markdown} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button type="submit" colorScheme="brand">New Post</Button>
      </form>
      </Container>

    </React.Fragment>
    
  );
}
