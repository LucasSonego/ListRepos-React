import React, { useState } from "react";

import "./App.css";
import { FaUsers, FaMapMarkedAlt, FaLink } from "react-icons/fa";

function App() {
  const [user, setUser] = useState({
    prof: {},
    repos: {}
  });

  async function buscar() {
    const input = document.getElementById("input");
    const prof = await fetch(`https://api.github.com/users/${input.value}`)
      .then(response => response.json())
      .then(data => data);
    const repos = await fetch(prof.repos_url)
      .then(response => response.json())
      .then(data => data);

    console.log(prof);

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
        <div className="userInfo">
          {user.prof.avatar_url && (
            <img
              src={user.prof.avatar_url}
              alt={user.prof.login}
              className="avatar"
            />
          )}
          {user.prof.name && <h3 className="name">{user.prof.name}</h3>}
          {user.prof.bio && <p className="bio">{user.prof.bio}</p>}
          {user.prof.company && (
            <div className="company">
              <FaUsers className="icons" />
              <p className="company">{user.prof.company}</p>
            </div>
          )}
          {user.prof.location && (
            <div className="location">
              <FaMapMarkedAlt className="icons" />
              <p className="location">{user.prof.location}</p>
            </div>
          )}
          {user.prof.blog && (
            <div className="blog">
              <FaLink className="icons" />
              <a
                href={`http://${user.prof.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.prof.blog}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
