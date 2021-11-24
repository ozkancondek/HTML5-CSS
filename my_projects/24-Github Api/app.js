// get elements

const githubForm = document.getElementById("github-form");

const nameInput = document.getElementById("githubname");

const clearLastUsers = document.getElementById("clear-last-users");

const lastUsers = document.getElementById("last-users");

const github = new Github();

const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllsSearched);
}

function getData(e) {
  let username = nameInput.value.trim();

  if (username == "") {
    alert("plese enter a username");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          //error message
          ui.showError("User not found!");
        } else {
          ui.showUserInfo(response.user); // response keeps two variable : check the return of async function in github class
        }
      }) //response.name, response.repo ...
      .catch((err) => ui.showError(err));
  }
  ui.clearInput();
  e.preventDefault();
}

function clearAllSearched() {}

function getAllsSearched() {}

console.log(window.navigator.userAgent);
