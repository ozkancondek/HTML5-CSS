const form = document.querySelector(".top-banner form");

const input = document.querySelector(".top-banner input");

const message = document.querySelector(".top-banner .msg");

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

  const response = await axios.get(url); //default get

  const { main, name, sys, weather } = response.data;

  const iconurl = `https://s3-us-west-2.amazonaws.com/s/cdpn.io/162656/${weather[0].icon}.svg`;

  const createdCitycardLi = document.createElement("li");

  createdCitycardLi.classList.add("city");

  createdCitycardLi.innerHTML = ` <h2 class="city-name" data-name="İzmir,TR">
          <span>İzmir</span>
          <sup>TR</sup>
        </h2>
        <div class="city-temp">17<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/03n.svg">
          <figcaption>scattered clouds</figcaption>
        </figure>`;
};
