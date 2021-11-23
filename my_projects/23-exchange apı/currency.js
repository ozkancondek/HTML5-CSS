//promisses

class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = `https://v6.exchangerate-api.com/v6/a1cd4c230dca0b8c90e643d4/latest/`;

    this.amount = null;
  }
  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrency)
        .then((response) => response.json()) //return response object but we return it to json object
        .then((data) => {
          const parity = data.conversion_rates[this.secondCurrency];
          const amount2 = Number(this.amount);
          let total = parity * amount2;
          resolve(total);
        }) //then we get this data
        .catch((err) => reject(err)); // catch if occurs any error
    });
  }
  changeAmount(amount) {
    this.amount = amount;
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}
