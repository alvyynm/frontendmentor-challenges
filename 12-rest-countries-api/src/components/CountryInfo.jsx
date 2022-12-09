import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CountryInfo({ countryName }) {
  const [countryDetails, setCountryDetails] = useState([]);

  // Request country specific info when user clicks on a country

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountryDetails(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, [countryName]);

  if (countryDetails.length === 0) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      <div>
        <img
          src={countryDetails.flags.png}
          alt={`${countryDetails.name.common}'s official flag`}
        />
        <h2>Common name: {countryDetails.name.common}</h2>
        <h2>Official name: {countryDetails.name.official}</h2>
        <h3>Capital city: {countryDetails.capital}</h3>
        <h3>Continent: {countryDetails.continents}</h3>

        <div>
          <p>Population: {countryDetails.population}</p>
          <p>Area: {countryDetails.area}</p>
          <p>Timezone: {countryDetails.timezones}</p>
        </div>
      </div>
      <Link to="/" className="text-2xl text-orange-600 block">
        Back to homepage
      </Link>
    </div>
  );
}
