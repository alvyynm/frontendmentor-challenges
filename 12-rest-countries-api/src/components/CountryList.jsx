import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CountryList({
  countries,
  setCountries,
  searchTerm,
  setSearchTerm,
  setGetCountryName,
}) {
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        console.log(countries);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      });
  }, []);

  // Search functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    // countries.map((country) => {
    //   return countries.includes(searchVal);
    // });
  };

  // Filter results based on continent
  const filterFunction = countries.filter((country) => {
    console.log(country);
    return searchTerm.toLowerCase() === ""
      ? country
      : country.name.common.includes(searchTerm);
  });

  return (
    <div className="bg-slate-200">
      <h2 className="text-2xl font-bold">Country data</h2>

      <h3>Filter Countries</h3>
      <input type="text" />
      <div></div>
      <ul className="flex flex-col md:flex-row justify-between">
        <li>
          <form onSubmit={handleSubmit} className="flex items-center ">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                id="simple-search"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for a country..."
                required
              />
            </div>
          </form>
        </li>

        <li>
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Filter by Region{" "}
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <button
                  onClick={() => setSearchTerm("Africa")}
                  href="#"
                  className="block w-full bg-red-400 text-left py-2 px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Africa
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchTerm("America")}
                  //   href="#"
                  className="block w-full bg-red-400 text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  America
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchTerm("Asia")}
                  href="#"
                  className="block w-full bg-red-400 text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Asia
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchTerm("Europe")}
                  href="#"
                  className="block w-full bg-red-400 text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Europe
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchTerm("Oceania")}
                  href="#"
                  className="block w-full bg-red-400 text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Oceania
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      {error ? (
        <div className="flex">
          There's was an issue while loading your request
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {filterFunction.map((country, i) => {
            return (
              <Link to={`/country/${i}`}>
                {" "}
                <div
                  key={i}
                  className="card w-[200px] bg-blue-300 shadow-xl p-3"
                  onClick={() => {
                    setGetCountryName(country.name.common);
                  }}
                >
                  <figure>
                    <img src={country.flags.png} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{country.name.common}</h2>
                    <p>
                      Population: {country.population.toLocaleString("en-US")}
                    </p>
                    <p>Region: {country.continents}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CountryList;
