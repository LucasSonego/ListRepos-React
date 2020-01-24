import styled from "styled-components";

const background = "#34495e";

export const Container = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "header header"
    "user repos";
`;

export const Topbar = styled.div`
  grid-area: header;
  display: block;
  text-align: center;
  background-color: ${background};
  margin: 10px 10px 0 10px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  float: left;
  margin: 10px 10px 10px 15px;
`;

export const RepoList = styled.ul`
  grid-area: repos;
  list-style: none;
  margin: 10px 0 0 0;
  padding-inline-start: 5px;
`;
