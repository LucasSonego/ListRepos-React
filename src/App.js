import React, { useState } from "react";

import { Container, Topbar, Title, RepoList } from "./styles";

import SearchBar from "./components/SearchBar/SearchBar";
import Repo from "./components/Repo/Repo";
import User from "./components/User/User";

function App() {
  const [user, setUser] = useState({
    prof: {},
    repos: []
  });

  async function search() {
    const input = document.getElementById("input");

    const [prof, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${input.value}`).then(response =>
        response.json()
      ),
      fetch(
        `https://api.github.com/users/${input.value}/repos`
      ).then(response => response.json())
    ]);

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
        <SearchBar handleEnterKey={handleEnterKey} search={() => search()} />
      </Topbar>

      {user.prof.id && (
        <>
          <User prof={user.prof} />

          <RepoList>
            {user.repos.map(r => (
              <li className="repo" key={r.id}>
                <Repo repo={r} />
              </li>
            ))}
          </RepoList>
        </>
      )}
    </Container>
  );
}

export default App;
