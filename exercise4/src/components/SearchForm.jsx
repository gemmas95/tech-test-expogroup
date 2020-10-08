import React from "react";

function SearchForm({ handleSubmit, setRepoName }) {
  return (
    <form data-testid="form">
      <input
        placeholder="Repository name"
        onChange={(event) => setRepoName(event.target.value.trim())}
      ></input>
      <button
        data-testid="button"
        type="submit"
        onClick={(event) => {
          handleSubmit(event);
        }}
      >
        View contributors!
      </button>
    </form>
  );
}

export default SearchForm;
