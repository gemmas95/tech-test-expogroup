import React from "react";
import "./contributor.css";

// To render contributors change user.name for user.login change the commented loadContributors in logic/contributorsActions
function Contributor({ user }) {
  console.log("this is user", user);
  return (
    <li className="profile-card">
      <img src={`${user.avatar_url}`} alt={user.id}></img>
      <p
        data-testid="user__login"
        className="text-uppercase text-monospace font-weight-bold"
      >
        {user.login}
      </p>
      <p>Number of contributions: {user.contributions}</p>
      <a href={user.html_url} className="btn btn-dark">
        {" "}
        Link to profile
      </a>
    </li>
  );
}
export default Contributor;
