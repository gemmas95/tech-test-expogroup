import React from "react";

// To render contributors change user.name for user.login change the commented loadContributors in logic/contributorsActions
function Contributor({ user }) {
  return <li data-testid="user__login">{user.login}</li>;
}
export default Contributor;
