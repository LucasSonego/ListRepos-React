import React from "react";
import { FaUsers, FaMapMarkedAlt, FaLink } from "react-icons/fa";

import { UserInfo, Avatar, UserName, Info } from "./styles";

export default function User(props) {
  const prof = props.prof;

  return (
    <UserInfo>
      {prof.avatar_url && <Avatar src={prof.avatar_url} alt={prof.login} />}
      {prof.name && <UserName>{prof.name}</UserName>}
      {prof.bio && <Info>{prof.bio}</Info>}
      {prof.company && (
        <div>
          <FaUsers className="icons" />
          <Info>{prof.company}</Info>
        </div>
      )}
      {prof.location && (
        <div>
          <FaMapMarkedAlt className="icons" />
          <Info>{prof.location}</Info>
        </div>
      )}
      {prof.blog && (
        <div>
          <FaLink className="icons" />
          <a href={prof.blog} target="_blank" rel="noopener noreferrer">
            {prof.blog}
          </a>
        </div>
      )}
    </UserInfo>
  );
}
