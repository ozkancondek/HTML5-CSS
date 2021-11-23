//Get elements

const amountElement = document.querySelector("#amount");

const firstSelect = document.getElementById("firstCurrency");

const secondSelect = document.getElementById("secondCurrency");

const currencyObject = new Currency("USD", "TRY");

const ui = new UI(firstSelect, secondSelect);

eventListener();

function eventListener() {
  amountElement.addEventListener("input", exchangeCurrency);
  firstSelect.onchange = function () {
    ui.changeFirst();
    currencyObject.changeFirstCurrency(
      firstSelect.options[firstSelect.selectedIndex].text
    );
  };
  secondSelect.onchange = function () {
    ui.changeSecond();
    currencyObject.changeSecondCurrency(
      secondSelect.options[secondSelect.selectedIndex].text
    );
  };
}

function exchangeCurrency() {
  currencyObject.changeAmount(amountElement.value);
  // if input changes, events occurs
  currencyObject
    .exchange()
    .then((result) => {
      ui.displayResult(result);
    })
    .catch((err) => console.log(err)); // gets json object
}
