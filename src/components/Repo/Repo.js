import React from "react";
import { GoRepoForked, GoLaw } from "react-icons/go";
import { FaCode } from "react-icons/fa";

import {
  RepoLink,
  RepoInfo,
  Titles,
  RepoName,
  RepoDescription,
  Details,
  LangInfo,
  License,
  NoLineBreak
} from "./styles";

export default function Repo(props) {
  const repo = props.repo;

  return (
    <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <RepoInfo>
        <Titles>
          <div>
            {repo.fork && <GoRepoForked className="icons" />}
            <RepoName>{repo.name}</RepoName>
          </div>

          {repo.description && (
            <RepoDescription>{repo.description}</RepoDescription>
          )}
        </Titles>

        <Details>
          {repo.language && (
            <LangInfo>
              <FaCode className="icons" />
              <NoLineBreak>{repo.language}</NoLineBreak>
            </LangInfo>
          )}

          {repo.license && (
            <License>
              <GoLaw className="icons" />
              <NoLineBreak>{repo.license.spdx_id}</NoLineBreak>
            </License>
          )}
        </Details>
      </RepoInfo>
    </RepoLink>
  );
}
