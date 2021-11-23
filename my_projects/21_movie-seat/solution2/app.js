const btn = document.getElementById("btn");

btn.onclick = function () {
  console.log(freeSeatsList);
};

const movieTitleList = document.getElementById("movie"); // movieTitleList.options[movieTitleList.selectedIndex].text.split("(")[0]

const movieNameSpan = document.getElementById("film");

const movieTotalSpan = document.getElementById("total");

const seatCountSpan = document.getElementById("count");

const freeSeatsList = document.querySelectorAll(".row .seat:not(.occupied)");

const storage = new Storage();
//if i change the select option, this function runs

movieTitleList.onchange = function () {
  updateFilmPrice();
  movieNameSpan.innerHTML =
    movieTitleList.options[movieTitleList.selectedIndex].text.split("(")[0];
};

//i wanna add an event listener for all seats, which is available to choose

[...freeSeatsList].forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("selected")) {
      el.classList.add("selected");
      updateFilmPrice();
      storage.addFilmToStorage([...freeSeatsList].indexOf(el));
    } else if (el.classList.contains("selected")) {
      el.classList.remove("selected");
      updateFilmPrice();
      storage.deleteFilmFromStorage([...freeSeatsList].indexOf(el));
    }
  });
});

//update film price function. Im gonna call it in onchange event and click event
const updateFilmPrice = function (film) {
  let seatCount = [...document.querySelectorAll(".selected")].length - 1;
  seatCountSpan.innerHTML = seatCount;

  let filmPrice = parseInt(
    movieTitleList.options[movieTitleList.selectedIndex].value
  );
  let totalprice = filmPrice * seatCount;
  movieTotalSpan.innerHTML = totalprice;
};

document.addEventListener("DOMContentLoaded", function () {
  loadSeats();
  updateFilmPrice();
});

function loadSeats() {
  let films = storage.getFilmsFromStorage();
  films.forEach((a) => {
    freeSeatsList[a].classList.add("selected");
  });
}

function Storage() {}

Storage.prototype.addFilmToStorage = function (newFilm) {
  let films = this.getFilmsFromStorage();

  films.push(newFilm); // we are adding an object to array not a string like previous project

  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.getFilmsFromStorage = function () {
  let films;

  //check if it exist in local storage

  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films")); // get them as an array
  }
  return films;
};

Storage.prototype.deleteFilmFromStorage = function (seatIndex) {
  let films = this.getFilmsFromStorage();
  films.splice([...freeSeatsList].indexOf(seatIndex), 1);

  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.clearAllFilmsFromStorage = function () {
  localStorage.removeItem("films"); // just delete key
};
