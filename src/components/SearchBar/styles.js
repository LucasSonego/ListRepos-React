import styled, { keyframes, css } from "styled-components";

const background = "#34495e";
const textColor = "#FFF";
const inputTextColor = "#c4c4c4";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const GitLink = styled.h2`
  margin: 0;
`;

export const UsernameInput = styled.input`
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
  border-radius: 5px;
  padding: 2px 0 0 0;
  margin: 0 0 0 5px;
  background-color: transparent;
  border: 2px solid ${textColor};
  color: ${textColor};
  transition-duration: 0.5s;
  outline: none;
  height: min-content;

  svg {
    margin: 5px 20px;
  }

  &:hover {
    background-color: ${textColor};
    color: ${background};
  }

  ${props =>
    props.loadingState === "loading" &&
    css`
      svg {
        animation: ${rotate} 0.5s linear infinite;
      }
    `}
`;
