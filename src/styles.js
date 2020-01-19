import styled from "styled-components";

var background = "#34495e";
var textColor = "#FFF";

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

export const SearchBar = styled.div`
  display: inline-block;
`;

export const GitLink = styled.h2`
  float: left;
  margin: 15px 0 0 0;
`;

export const UsernameInput = styled.input`
  float: left;
  margin: 23px 0 10px 3px;
  font-size: 22px;
  height: 20px;
  width: 180px;
  border: none;
  border-bottom: 2px solid #fff;
  background: none;
  color: rgb(196, 196, 196);
  outline: none;
  font-weight: bold;

  ::placeholder {
    opacity: 0.15;
    color: #fff;
  }
`;

export const ButtonBuscar = styled.button`
  margin: 15px 0 0 5px;
  padding: 7px 24px;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid ${textColor};
  color: ${textColor};
  transition-duration: 0.5s;
  outline: none;
  &:hover {
    background-color: ${textColor};
    color: ${background};
  }
`;

export const RepoList = styled.ul`
  grid-area: repos;
  list-style: none;
  margin: 10px 0 0 0;
  padding-inline-start: 5px;
`;
