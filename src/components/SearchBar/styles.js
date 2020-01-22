import styled, { keyframes, css } from "styled-components";

var background = "#34495e";
var textColor = "#FFF";
var inputTextColor = "#c4c4c4";

export const Container = styled.div`
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
  border-bottom: 2px solid ${textColor};
  background: none;
  color: ${inputTextColor};
  outline: none;
  font-weight: bold;

  ::placeholder {
    opacity: 0.15;
    color: ${textColor};
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const SearchButton = styled.button`
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

  ${props =>
    props.loading === "loading" &&
    css`
      svg {
        animation: ${rotate} 0.5s linear infinite;
      }
    `}
`;
