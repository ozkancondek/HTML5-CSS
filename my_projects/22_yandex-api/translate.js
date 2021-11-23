function Translate(word, language) {
  this.apikex = "api-url";
  this.word = word;
  this.language = language;

  //XHR object
  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
  //ajax

  //add a get request
  const endpoint = `add get reguest url ${this.apikey},${this.word},${this.language}`;

  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];
      callback(null, text);
    } else {
      callback("there is poblem", null);
    }
  };

  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
