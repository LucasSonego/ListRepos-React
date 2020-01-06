import React, { useState } from "react";

import "./App.css";
import Repo from "./components/Repo";
import User from "./components/User";

function App() {
  const [user, setUser] = useState({
    prof: {},
    repos: []
  });

  async function buscar() {
    const input = document.getElementById("input");
    const prof = await fetch(
      `https://api.github.com/users/${input.value}`
    ).then(response => response.json());
    const repos = await fetch(prof.repos_url).then(response => response.json());
    console.log(repos);

    setUser({
      prof,
      repos
    });
  }

  return (
    <div className="App">
      <div className="top">
        <h1 className="titulo">ListRepos</h1>
        <div className="search">
          <h2 className="gitlink">github.com/</h2>
          <input
            className="input"
            id="input"
            placeholder="username"
            type="text"
            spellCheck="false"
          />
          <button onClick={() => buscar()}>Buscar</button>
        </div>
      </div>

      <div className="userInfo">
        <User prof={user.prof} />
      </div>

      <div className="repos">
        <ul className="repos-list">
          {user.repos.map(r => (
            <li className="repo" key={r.id}>
              <Repo repo={r} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
