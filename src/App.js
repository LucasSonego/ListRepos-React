import React, { useState } from "react";

import {
  Container,
  Topbar,
  Title,
  SearchBar,
  GitLink,
  ButtonBuscar,
  UsernameInput
} from "./styles";
import "./App.css";
import Repo from "./components/Repo";
import User from "./components/User/User";

function App() {
  const [user, setUser] = useState({
    prof: {},
    repos: []
  });

  async function search() {
    const input = document.getElementById("input");
    const prof = await fetch(
      `https://api.github.com/users/${input.value}`
    ).then(response => response.json());
    const repos = await fetch(prof.repos_url).then(response => response.json());

    setUser({
      prof,
      repos
    });
  }

  function handleEnterKey() {
    if (window.event.keyCode === 13) {
      search();
      let input = document.getElementById("input");
      input.blur();
    }
  }

  return (
    <Container>
      <Topbar>
        <Title>ListRepos</Title>
        <SearchBar>
          <GitLink>github.com/</GitLink>
          <UsernameInput
            id="input"
            placeholder="username"
            type="text"
            spellCheck="false"
            onKeyPress={handleEnterKey}
          />
          <ButtonBuscar onClick={() => search()}>Buscar</ButtonBuscar>
        </SearchBar>
      </Topbar>

      {user.prof.id && (
        <>
          <User prof={user.prof} />

          <div className="repos">
            <ul className="repos-list">
              {user.repos.map(r => (
                <li className="repo" key={r.id}>
                  <Repo repo={r} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </Container>
  );
}

export default App;
