const form = document.querySelector(".top-banner form");

const input = document.querySelector(".top-banner input");

const msg = document.querySelector(".top-banner .msg");

const list = document.querySelector(".ajax-section .cities");

localStorage.setItem(
  "apikey",
  EncryptStringAES("6fbcd6af19f13c2f9ece03a4b2a09618")
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
  let apikey = DecryptStringAES(localStorage.getItem("apikey"));
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}`;

  try {
    const response = await axios.get(url); //default get

    const { main, name, sys, weather } = response.data;

    const iconurl = `svg/${weather[0].icon}.svg`;

    const createdCitycardLi = document.createElement("li");

    const filteredArray = [];

    createdCitycardLi.classList.add("city");
    const cityListItems = Array.from(list.querySelectorAll(".city"));
    if (cityListItems.length > 0) {
      cityListItems.forEach((el) => {
        if (
          el.querySelector(".city-name span").innerText.toLowerCase() ==
          name.toLowerCase()
        ) {
          filteredArray.push(el);
        }
      });

      console.log(filteredArray);

      if (filteredArray.length > 0) {
        msg.innerText = `${
          filteredArray[0].querySelector(".city-name span").innerText
        } aldready exist. Please search for another city`;
        form.reset();
        input.focus();

        return;
      }
    }

    createdCitycardLi.innerHTML = ` <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${main.temp}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${iconurl}">
          <figcaption>$z}</figcaption>
        </figure>`;

    list.appendChild(createdCitycardLi);

    msg.inneText = "";
    form.reset();
    input.focus(); // user can add new input
  } catch (error) {
    msg.innerText = error;
  }
};
