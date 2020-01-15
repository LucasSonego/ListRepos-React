import React from "react";
import { GoRepoForked, GoLaw } from "react-icons/go";
import { FaCode } from "react-icons/fa";

import "./Repo.css";

export default function Repo(props) {
  const repo = props.repo;

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="repo-info">
        <div className="titles">
          <div className="reponame floatleft">
            {repo.fork && <GoRepoForked className="icons" />}
            <h3 className="name">{repo.name}</h3>
          </div>
          {repo.description && (
            <p className="description floatleft">{repo.description}</p>
          )}
        </div>

        <div className="details">
          {repo.language && (
            <div className="lang-info">
              <FaCode className="icons" />
              <p className="lang">
                <nobr>{repo.language}</nobr>
              </p>
            </div>
          )}

          {repo.license && (
            <div className="license">
              <GoLaw className="icons" />
              <p className="licensename">
                <nobr>{repo.license.spdx_id}</nobr>
              </p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
