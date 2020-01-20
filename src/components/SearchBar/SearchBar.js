import React from "react";

import { Container, GitLink, UsernameInput, SearchButton } from "./styles";

export default function SearchBar(props) {
  return (
    <Container>
      <GitLink>github.com/</GitLink>
      <UsernameInput
        id="input"
        placeholder="username"
        type="text"
        spellCheck="false"
        onKeyPress={props.handleEnterKey}
      />
      <SearchButton onClick={() => props.search()}>Buscar</SearchButton>
    </Container>
  );
}
