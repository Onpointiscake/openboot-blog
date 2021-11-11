import React, { useState } from "react";
//import {Link} from 'react-router-dom'
import "../styles/EditorApp.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "@pathofdev/react-tag-input/build/index.css";

import {useNavigate} from 'react-router-dom';

import axios from "axios"

import {
  Editable,
  EditableInput,
  EditablePreview,
  Select,
  Tab,
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
  const [tags, setTags] = useState("")
  const navigate = useNavigate();

  function createArticle(event) {
    event.preventDefault()

    const finalTags = tags.split(" ")
    console.log(finalTags)

    // Una vez que el backend lo haya creado, cambiar :id_articulo por id actual
    navigate('/articulo/:id_articulo')
  }
  function getTags(event) { setTags(event) }

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
        <Text>Press enter to create a tag separated by commas</Text>

        <Container className="container_tag"></Container>

        <Input 
          placeholder="Ejemplo: JavaScript, Java, SQL, Cloud..." 
          onChange={(e) => getTags(e.target.value)}
        />

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
