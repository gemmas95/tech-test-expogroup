import React from "react";
import Contributor from "./Contributor";

function TableList({ contributorsList }) {
  return (
    <>
      {!contributorsList && (
        <p className="text-center m-5">
          Please enter a repository name owned by SkylabCoders to find it's
          contributors <span>(suggestions: skylab-bootcamp-202007)</span>
        </p>
      )}
      {contributorsList?.length === 0 && (
        <img
          alt="loading"
          src="https://trello-attachments.s3.amazonaws.com/5f7c8ab9b80a927f1f047d20/300x300/a35a54d93989cc51ca3226d2220477b3/Gif_loaging.gif"
        ></img>
      )}
      {contributorsList?.length > 0 && contributorsList[0].login && (
        <ul className="card-deck flex-wrap cards__container">
          {contributorsList?.map((user) => (
            <Contributor user={user} key={user.id} />
          ))}
        </ul>
      )}
      {contributorsList?.message && (
        <p className="text-center m-5 alert alert-danger">
          Error: {contributorsList.message}
        </p>
      )}
    </>
  );
}

export default TableList;
