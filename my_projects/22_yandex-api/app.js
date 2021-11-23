//prototype,ajax,callback methods
a; //add eventlisteners

eventListener();

function eventListener() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  //change
  document.getElementById("language").onchange = function () {
    //ui process
  };
}

const translate = new Translate(
  document.getElementById("word").value,
  document.getElementById("language").value
);
function translateWord(e) {
  translate.changeParameters(
    document.getElementById("word").value,
    document.getElementById("language").value
  );
  translate.translateWord(function (err, respose) {
    if (err == null) {
    }
  });
  e.preventDefault();
}
