import React from "react";
import { FaUsers, FaMapMarkedAlt, FaLink } from "react-icons/fa";

import "./User.css";

export default function User(props) {
  const prof = props.prof;

  return (
    <div className="userInfo">
      {prof.avatar_url && (
        <img src={prof.avatar_url} alt={prof.login} className="avatar" />
      )}
      {prof.name && <h3 className="name">{prof.name}</h3>}
      {prof.bio && <p className="bio">{prof.bio}</p>}
      {prof.company && (
        <div className="company">
          <FaUsers className="icons" />
          <p className="company">{prof.company}</p>
        </div>
      )}
      {prof.location && (
        <div className="location">
          <FaMapMarkedAlt className="icons" />
          <p className="location">{prof.location}</p>
        </div>
      )}
      {prof.blog && (
        <div className="blog">
          <FaLink className="icons" />
          <a
            href={`http://${prof.blog}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {prof.blog}
          </a>
        </div>
      )}
    </div>
  );
}
