import React from "react";
import "./App.css";

function App() {
  var response;

  async function buscar() {
    const input = document.getElementById("input");
    response = await fetch(`https://api.github.com/users/${input.value}`);
    const dados = response.json();
    console.log(dados);
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
            placeholder="LucasSonego"
            type="text"
            spellCheck="false"
          />
          <button onClick={() => buscar()}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
