import React from "react";
import "./User/User.css";
import { FaMapMarkerAlt, FaUsers, FaLink } from "react-icons/fa";

const User = props => (
  <div className="user">
    <img
      src={props.apiData.avatar_url}
      alt={props.apiData.login}
      className="avatar"
    />
    <h3>{props.apiData.name}</h3>
    <div className="info">
      {props.apiData.bio && <p className="bio">{props.apiData.bio}</p>}
      {props.apiData.company && (
        <div className="company">
          <FaUsers className="icon" />
          <p className="company">{props.apiData.company}</p>
        </div>
      )}
      {props.apiData.location && (
        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <p className="location">{props.apiData.location}</p>
        </div>
      )}
      {props.apiData.blog && (
        <div className="blog">
          <FaLink className="icon" />
          <a href={`http://${props.apiData.blog}`} className="blog">
            {props.apiData.blog}
          </a>
        </div>
      )}
    </div>
  </div>
);

export default User;
