import React from "react";
import { Heading, Container, Button, Stack } from "@chakra-ui/react";
import HomeList from "../components/HomeList";
import Login from "./Login";
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
            <Button to="./EditorApp.js" variant="outline" size="lg">
              New Post
            </Button>
            <Button to="./Login.js" variant="outline" size="lg">
              Login
            </Button>
          </Stack>
        </Container>{" "}
        <Container maxW="container.xl">
          <HomeList />
        </Container>
      </Container>
    </React.Fragment>
  );
}
