/* function Github() {
  this.url = "https://api.github.com/users/";
} */

class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }
  async getGithubData(username) {
    const responseUser = await fetch(this.url + username); // returns response object
    const responseRepos = await fetch(this.url + username + "/repos");

    const userData = await responseUser.json();
    const repoData = await responseRepos.json();

    return {
      user: userData,
      repo: repoData,
    };
  }
}
