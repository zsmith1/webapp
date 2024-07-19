const { Octokit } = require("@octokit/core");
const octokit = new Octokit()

export async function fetchAllRepos(user) {
  const result = await octokit.request('GET /users/{user}/repos', {
      user: user
  });
  return result;
}