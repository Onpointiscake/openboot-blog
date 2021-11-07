import React, { useState } from "react";
import '../styles/EditorApp.css'
import MarkdownPreview from '@uiw/react-markdown-preview';
import "@pathofdev/react-tag-input/build/index.css";

import {
    FormControl,
    Editable,
    EditableInput,
    EditablePreview,
    Select,
    Tab, Tabs,
    TabList,
    TabPanels, TabPanel,
    Textarea,
    Button,
} from "@chakra-ui/react"
import MultiSelect from "../components/multi-select";


export default function EditorApp() {

    const [markdown, setMarkdown] = useState("Heading");



    return (
        <React.Fragment >
            <FormControl colorScheme="brand"
            id="markdown__editor__post" >
                <Editable colorScheme="brand"
                    textAlign="center"
                    defaultValue="Amazing title here! ⚡️"
                    fontSize="3xl"
                >
                    <EditablePreview colorScheme="brand"/>
                    <EditableInput colorScheme="brand"/>
                </Editable>
                <Select colorScheme="brand"
                isRequired={true}
                    placeholder="Select Author">
                    <option>Ana</option>
                    <option>Javier</option>
                    <option>Josema</option>
                    <option>Clemen</option>
                </Select>
                <MultiSelect  />

                <Tabs colorScheme="brand">
                    <TabList colorScheme="brand">
                        <Tab colorScheme="brand">Write here</Tab>
                        <Tab colorScheme="brand">Magic Here</Tab>
                    </TabList>

                    <TabPanels colorScheme="brand">
                        <TabPanel colorScheme="brand">
                            <Textarea resize={"none"}
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
                <Button  colorScheme="brand">
                    New Post
                </Button>
            </FormControl>
        </React.Fragment>
    );
}

