import React, { useState } from "react";
import TableList from "./TableList";
import { loadContributors } from "./../logic/contributorsActions";
import SearchForm from "./SearchForm";
import "./Dashboard.css";

function Dashboard() {
  const [contributorsList, setContributorsList] = useState(null);
  const [error, setError] = useState(null);
  const [repoName, setRepoName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setContributorsList([]);
    loadContributors(repoName).then(setContributorsList).catch(setError);
  }

  return (
    <div className="container-fluid">
      <h1 className="jumbotron">Contributors List</h1>
      <SearchForm handleSubmit={handleSubmit} setRepoName={setRepoName} />
      <TableList contributorsList={contributorsList} error={error} />
    </div>
  );
}

export default Dashboard;
