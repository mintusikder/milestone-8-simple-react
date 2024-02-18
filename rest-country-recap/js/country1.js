const loadAllCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (countries) => {
  // console.log(countries);
  const countriesHtmlElement = countries.map((country) => allcountry(country));
  // console.log(countriesHtmlElement);

  const countryContainer = document.getElementById("countries");
  countryContainer.innerHTML = countriesHtmlElement.join(' ')
};

const allcountry = ({ name }) => {
  return `
  <div>
  <h2>
  ${name.common}</h2>
  </div>
  `;
};

loadAllCountry();
