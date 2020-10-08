// Meanwhile I don't know how to access to the name of owner repo I work with other api call of github that get repositories with more of 100000 stars
/* export async function loadContributors() {
  const url = "https://api.github.com/search/repositories?q=stars:>100000";

  const response = await fetch(url);
  const contributors = await response.json();
  console.log("contributors...", contributors);

  return contributors.items;
} */

//  Api call that get contributors of the given repository, the var repoName should be pass as an argument of the function
// That given repository must be owned by SkylabCoders

export async function loadContributors(repoName) {
  const owner = "SkylabCoders";
  // const repoName = "skylab-bootcamp-202007";
  const url = `https://api.github.com/repos/${owner}/${repoName}/contributors`;

  // API call
  const response = await fetch(url);
  const contributors = await response.json();

  return contributors;
}
