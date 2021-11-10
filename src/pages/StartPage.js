import React from "react";
import { Heading, Container, Button, Stack } from "@chakra-ui/react";
import HomeList from "../components/HomeList";
import {Link} from 'react-router-dom'

export default function StartPage() {
  return (
    <React.Fragment>
      <Container maxW="container.xl" mt="5%">
        <Container maxW="container.m">
          <Heading fontSize="60px" align="left">
            Hey! 👋
          </Heading>
          <Heading fontSize="40px" align="left">
            ...start writing something
          </Heading>{" "}
          <Stack mt="20px" align="left" direction="row" spacing={5}>
            <Link to="/editorapp">
              <Button to="./EditorApp.js" variant="outline" size="lg">
                New Post
              </Button>
            </Link>
            <Link to="/login">
              <Button to="./Login.js" variant="outline" size="lg">
                Login
              </Button>
            </Link>
          </Stack>
        </Container>{" "}
        <Container maxW="container.xl">
          <HomeList />
        </Container>
       
      </Container>
    </React.Fragment>
  );
}
