import React from "react";
import { GoRepoForked, GoLaw } from "react-icons/go";
import { FaCode } from "react-icons/fa";

export default function Repo(props) {
  const repo = props.repo;

  return (
    <div className="repo">
      <div className="reponame floatleft">
        {repo.fork && <GoRepoForked className="icons" />}
        <h3 className="name">{repo.name}</h3>
      </div>
      {repo.description && (
        <p className="description floatleft">{repo.description}</p>
      )}
      <div className="details">
        {repo.language && (
          <div className="lang-info">
            <FaCode className="icons" />
            <p className="lang">{repo.language}</p>
          </div>
        )}

        <div className="licence-info">
          {repo.license && (
            <div className="license">
              <GoLaw className="icons" />
              <p className="licensename">{repo.license.spdx_id}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
