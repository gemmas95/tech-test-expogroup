import React from "react";

function SearchForm({ handleSubmit, setRepoName }) {
  return (
    <form data-testid="form" className="d-flex justify-content-center">
      <input
        placeholder="Repository name"
        onChange={(event) => setRepoName(event.target.value.trim())}
      ></input>
      <button
        className="btn btn-info"
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
