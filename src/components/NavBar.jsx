import React from "react";
import { Link, useColorMode, Container, Switch } from "@chakra-ui/react";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Container>
        <Switch
          onChange={toggleColorMode}
          size="lg"
          colorScheme="orange"
          mr="15px"
        />
        <Link to="/" fontSize="xl">
          Home
        </Link>
      </Container>
    </React.Fragment>
  );
}
