import React from "react";

import { Container, GitLink, UsernameInput, SearchButton } from "./styles";
import { FaSearch, FaSpinner } from "react-icons/fa";

export default function SearchBar(props) {
  return (
    <Container>
      <GitLink>github.com/</GitLink>
      <UsernameInput
        placeholder="username"
        type="text"
        spellCheck="false"
        onKeyPress={props.onKeyPress}
        onFocus={props.onFocus}
        ref={props.inputRef}
      />
      <SearchButton
        onClick={() => props.searchFunction()}
        loadingState={props.loadingState ? "loading" : undefined}
      >
        {props.loadingState ? <FaSpinner /> : <FaSearch />}
      </SearchButton>
    </Container>
  );
}
