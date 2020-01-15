import React, { useState } from "react";

import "./App.css";
import Repo from "./components/Repo";
import User from "./components/User";

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
    <div className="App">
      <div className="top">
        <h1 className="sitename">ListRepos</h1>
        <div className="search">
          <h2 className="gitlink">github.com/</h2>
          <input
            className="input"
            id="input"
            placeholder="username"
            type="text"
            spellCheck="false"
            onKeyPress={handleEnterKey}
          />
          <button className="btn-search" onClick={() => search()}>
            Buscar
          </button>
        </div>
      </div>

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
    </div>
  );
}

export default App;
