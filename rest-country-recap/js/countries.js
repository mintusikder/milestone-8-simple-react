const loadedCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayData(data));
};
const displayData = (coutries) => {
  
  console.log(coutries);
  const allCountriesHtml = coutries.map((country) => getCountryHtml(country));
  console.log(allCountriesHtml[0]);
  const countries = document.getElementById("countries");
  countries.innerHTML = allCountriesHtml.join(" ");
};

const getCountryHtml = ({name,flags}) => {
  // const {name,flags}=country
  return `
    <div class="country">
    <h2>${name.common}</h2>
    <img src =${flags.png}>
    </div>   
    `;
};

loadedCountries();
