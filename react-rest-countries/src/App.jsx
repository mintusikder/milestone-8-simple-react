import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  return (
    <div>
      <LoadCountries></LoadCountries>
    </div>
  );
};


function LoadCountries(){
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=> res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div className='county'>
      <h1>Visite Every Country in our woeld</h1>
      <p>{countries.length}</p>
      {
        countries.map(country => <Country name={country.name} key={country.cca2} population={country.population}></Country>)
      }
    </div>
  )
}

function Country({name,population}){
  return(
    <div>
      <h2>Name: {name.common}</h2>
      <h4>Population: {population}</h4>
    </div>
  )
}
export default App;