import React from "react";
import { Link, useColorMode, Container, Switch } from "@chakra-ui/react";

export default function NavBar() {
  const { toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Container>
        <Switch
          onChange={toggleColorMode}
          size="lg"
          colorScheme="orange"
          mr="20px"
          m="20px"
        />
        <Link to="/" fontSize="xl">
          Home
        </Link>
      </Container>
    </React.Fragment>
  );
}
