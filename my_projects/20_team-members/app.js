const sbtn = document.getElementById("flexSwitchCheckDefault");
const body = document.getElementsByTagName("body")[0];
const cards = [...document.querySelectorAll(".card")];

let count = 0;

sbtn.addEventListener("click", function () {
  count++;
  if (count % 2 == 1) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    cards.forEach((el) => {
      el.style.backgroundColor = "black";
    });
  } else {
    body.style.backgroundColor = "white";
    cards.forEach((el) => {
      el.style.backgroundColor = "white";
    });
  }
});

console.log(cards);
