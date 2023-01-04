import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/DarkModeContext";

function CountryList({
  countries,
  setCountries,
  searchTerm,
  setSearchTerm,
  setGetCountryName,
}) {
  const [error, setError] = useState(null);
  const [region, setRegion] = useState("");
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        // console.log(countries);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error);
      });
  }, []);

  // Search functionality
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Filter results based on user input
  const filterByCountry = countries.filter((country) => {
    // console.log(country);
    return searchTerm.toLowerCase() === ""
      ? country
      : country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Filter results based on filter button
  const filterByRegion = countries.filter((country) => {
    return region.toLowerCase() === ""
      ? country
      : country.continents.includes(region);
  });

  return (
    <div
      className={`font-primary max-w-[1450px] mx-auto ${
        isLightTheme ? "lightels" : "darkels"
      }`}
    >
      <div className={`py-6 ${isLightTheme ? "light" : "dark"}`}>
        <ul className="flex flex-col gap-5 md:flex-row justify-between w-11/12 mx-auto">
          <li className="w-full lg:w-[30rem]">
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
                  className="bg-light-elements border border-gray-300 drop-shadow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className={`w-[200px] drop-shadow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center ${
                isLightTheme ? "lightels" : "darkels"
              }`}
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
                    onClick={() => {
                      setRegion("Africa");
                      setSearchTerm("");
                    }}
                    href="#"
                    className="block w-full text-left py-2 px-4  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Africa
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setRegion("America");
                      setSearchTerm("");
                    }}
                    //   href="#"
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    America
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setRegion("Asia");
                      setSearchTerm("");
                    }}
                    href="#"
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Asia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setRegion("Europe");
                      setSearchTerm("");
                    }}
                    href="#"
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Europe
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setRegion("Oceania");
                      setSearchTerm("");
                    }}
                    href="#"
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Oceania
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {error ? (
          <div
            className={`flex w-11/12 mx-auto pt-6 ${
              isLightTheme ? "light" : "dark"
            }`}
          >
            There's was an issue while loading your request
          </div>
        ) : (
          <div className="grid grid-cols-1 auto-rows-auto gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 md:gap-y-8 w-11/12 mx-auto pt-6">
            {searchTerm
              ? filterByCountry.map((country, i) => {
                  return (
                    <Link key={uuidv4()} to={`/country/${i}`}>
                      {" "}
                      <div
                        className={`card rounded-xl overflow-hidden w-[300px] h-[380px] shadow-xl mx-auto ${
                          isLightTheme ? "lightels" : "darkels"
                        }`}
                        onClick={() => {
                          setGetCountryName(country.name.common);
                        }}
                      >
                        <figure className="w-full h-[55%] ">
                          <img
                            className="h-full"
                            src={country.flags.png}
                            alt={`${country.name.common}'s flag`}
                          />
                        </figure>
                        <div className={`pl-5 pt-3`}>
                          <h2 className="text-xl font-bold pb-3 ">
                            {country.name.common}
                          </h2>
                          <p>
                            <span className="font-semibold">Population</span>:{" "}
                            {country.population.toLocaleString("en-US")}
                          </p>
                          <p>
                            <span className="font-semibold">Region</span>:{" "}
                            {country.continents}
                          </p>
                          <p>
                            <span className="font-semibold">Capital</span>:{" "}
                            {country.capital}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : filterByRegion.map((country, i) => {
                  return (
                    <Link key={uuidv4()} to={`/country/${i}`}>
                      {" "}
                      <div
                        className={`card rounded-xl overflow-hidden w-[300px] h-[380px] shadow-xl mx-auto ${
                          isLightTheme ? "lightels" : "darkels"
                        }`}
                        onClick={() => {
                          setGetCountryName(country.name.common);
                        }}
                      >
                        <figure className="w-full h-[55%] ">
                          <img
                            className="h-full"
                            src={country.flags.png}
                            alt={`${country.name.common}'s flag`}
                          />
                        </figure>
                        <div className={`pl-5 pt-3`}>
                          <h2 className="text-xl font-bold pb-3 ">
                            {country.name.common}
                          </h2>
                          <p>
                            <span className="font-semibold">Population</span>:{" "}
                            {country.population.toLocaleString("en-US")}
                          </p>
                          <p>
                            <span className="font-semibold">Region</span>:{" "}
                            {country.continents}
                          </p>
                          <p>
                            <span className="font-semibold">Capital</span>:{" "}
                            {country.capital}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryList;
