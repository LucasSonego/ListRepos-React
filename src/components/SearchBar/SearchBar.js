import React from "react";

import { Container, GitLink, UsernameInput, SearchButton } from "./styles";
import { FaSearch, FaSpinner } from "react-icons/fa";

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
      <SearchButton
        onClick={() => props.search()}
        loading={props.loading ? "loading" : undefined}
      >
        {props.loading ? <FaSpinner /> : <FaSearch />}
      </SearchButton>
    </Container>
  );
}
