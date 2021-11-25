const renderCountry = (data, className = "") => {
  const {
    name: { common: countryName },
    region,
    capital,
    flags: { svg: countryFlag },
    population,
    languages,
    currencies,
  } = data;
  const countryElm = document.getElementById("add");
  const htmlContent = `
  <div class="country ${className}">
    <img class="country__img" src="${countryFlag}" />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row">
              <span><i class="fas fa-2x fa-landmark"></i></span>${capital}</p>
      <p class="country__row"> <span><i class="fas fa-lg fa-users"></i></span>${(
        +population / 1_000_000
      ).toFixed(1)}M People</p>
      <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
        Object.values(languages)[0]
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
        Object.values(currencies)[0].name
      } <strong>${Object.values(currencies)[0].symbol}</strong>
      </p>
    </div>
  </div>
  `;

  countryElm.innerHTML += htmlContent;
  countryElm.style.opacity = 1;
};

const getCountryData = async (countryName) => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/alpha/" + countryName
    );
    if (!response.ok) throw new Error("Something get wrong" + response.status);
    const data = await response.json();
    const [countryDataObject] = data;

    return countryDataObject;
  } catch (error) {
    console.log(error.message);
  }
};

const getBorders = async (countryName) => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/alpha/" + countryName
    );
    if (!response.ok) throw new Error("Something get wrong" + response.status);
    const data = await response.json();
    const [countryDataObject] = data;
    const borders = countryDataObject.borders;
    return borders;
  } catch (error) {
    console.log(error.message);
  }
};

const showCountry = async (countryName, b) => {
  const countryDataObject = await getCountryData(countryName);

  renderCountry(countryDataObject, b);
};

const showBorders = async (countryName) => {
  const borders = await getBorders(countryName);
  if (borders === undefined) {
    const countryElm = document.getElementById("add");
    countryElm.innerHTML += `<div class="alert alert-danger" role="alert">
  There is no neighbour country!
</div>`;
  } else {
    borders.forEach((el) => {
      showCountry(el, "neighbour");
    });
  }
};

const info = (countryName) => {
  showCountry(countryName);

  showBorders(countryName);
};

info("USA");
