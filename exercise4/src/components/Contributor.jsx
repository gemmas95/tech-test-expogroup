import React from "react";
import "./Contributor.css";

// To render contributors change user.name for user.login change the commented loadContributors in logic/contributorsActions
function Contributor({ user }) {
  return (
    <li className="profile-card">
      <img
        src={`${user.avatar_url}`}
        alt={user.id}
        data-testid="avatar_url"
      ></img>
      <p
        data-testid="user__login"
        className="text-uppercase text-monospace font-weight-bold"
      >
        {user.login}
      </p>
      <p data-testid="contributions">
        Number of contributions: {user.contributions}
      </p>
      <a data-testid="html_url" href={user.html_url} className="btn btn-dark">
        {" "}
        Link to profile
      </a>
    </li>
  );
}
export default Contributor;
