import styled from "styled-components";

const background = "#34495e";
const infoColor = "#eeeeee";

export const UserInfo = styled.div`
  grid-area: user;
  margin: 10px;
  padding: 15px;
  background-color: ${background};
  border-radius: 5px;
  height: fit-content;
  width: fit-content;

  .icons {
    float: left;
    margin: 3px 5px;
  }

  a {
    color: ${infoColor};
  }
`;

export const Avatar = styled.img`
  height: 300px;
  width: 300px;
`;

export const Info = styled.p`
  color: ${infoColor};
`;
