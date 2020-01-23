import React, { useState, useRef } from "react";

import { Container, Topbar, Title, RepoList } from "./styles";

import SearchBar from "./components/SearchBar/SearchBar";
import Repo from "./components/Repo/Repo";
import User from "./components/User/User";

function App() {
  const [user, setUser] = useState({
    prof: {},
    repos: []
  });

  const inputEl = useRef(null);

  const [loading, setLoading] = useState(false);

  async function search() {
    setLoading(true);
    const { prof, repos } = await getApiData();
    setLoading(false);

    if (prof.message === "Not Found") {
      inputEl.current.focus();
      inputEl.current.select();
    } else {
      setUser({
        prof,
        repos
      });
    }
  }

  async function getApiData() {
    const [prof, repos] = await Promise.all([
      fetch(
        `https://api.github.com/users/${inputEl.current.value}`
      ).then(response => response.json()),
      fetch(
        `https://api.github.com/users/${inputEl.current.value}/repos`
      ).then(response => response.json())
    ]);

    const userData = { prof, repos };

    return userData;
  }

  function handleEnterKey() {
    if (window.event.keyCode === 13) {
      search();
      inputEl.current.blur();
    }
  }

  return (
    <Container>
      <Topbar>
        <Title>ListRepos</Title>
        <SearchBar
          handleEnterKey={handleEnterKey}
          search={() => search()}
          loading={loading}
          inputRef={inputEl}
        />
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
