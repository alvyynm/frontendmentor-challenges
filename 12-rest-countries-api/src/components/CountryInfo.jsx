import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../contexts/DarkModeContext";
import { v4 as uuidv4 } from "uuid";
import { Waveform } from "@uiball/loaders";
import Navbar from "./Navbar";

import arrowBackLight from "../assets/arrow-back.svg";
import arrowBackDark from "../assets/arrow-back-outline.svg";

export default function CountryInfo({ countryName }) {
  const [countryDetails, setCountryDetails] = useState([]);
  const { isLightTheme } = useContext(ThemeContext);
  const [countryCode, setCountryCode] = useState("");

  // Request country specific info when user clicks on a country

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        setCountryDetails(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  // updates countryDetails when user clicks on a border country

  useEffect(() => {
    if (countryCode) {
      axios
        .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then((response) => {
          setCountryDetails(response.data[0]);
        })
        .catch((error) => console.log(error));
    }
  }, [countryCode]);

  if (countryDetails.length === 0) {
    return (
      <div
        className={`font-primary h-[90vh] max-w-[1450px] mx-auto ${
          isLightTheme ? "lightels" : "darkels"
        }`}
      >
        <Navbar />
        <div className="flex flex-col content-center h-full place-content-center w-11/12 mx-auto">
          <div className="mx-auto">
            <Waveform color={`${isLightTheme ? "black" : "white"}`} />
          </div>
          <p className="text-xl font-semibold text-center mt-5">
            Loading data...
          </p>
        </div>
      </div>
    );
  }

  // Stores currency array for countries
  const currencies = Object.values(countryDetails?.currencies);

  // Store country lang(s) to display
  const languages = Object.values(countryDetails?.languages);

  return (
    <div className={`h-[130vh] lg:h-[91vh] ${isLightTheme ? "light" : "dark"}`}>
      <Navbar />
      <div
        className={`w-11/12 mx-auto font-primary py-6 ${
          isLightTheme ? "light" : "dark"
        }`}
      >
        <div>
          <button
            className={`flex items-center justify-between w-[140px] px-7 py-1 rounded-md shadow-lg mt-10 mb-14 ${
              isLightTheme ? "lightels" : "darkels"
            }`}
          >
            {" "}
            <img
              className="w-8"
              src={isLightTheme ? arrowBackLight : arrowBackDark}
              alt="back arrow icon"
            />
            <Link to="/" className="text-lg">
              Back
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              className="h-full w-[500px]"
              src={countryDetails.flags.png}
              alt={`${countryDetails.name.common}'s official flag`}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold my-4">
              {countryDetails.name.common}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="grid grid-cols-1 gap-3">
                <h2>
                  <span className="font-semibold">Native name: </span>{" "}
                  {countryDetails.name.common}
                </h2>
                <p>
                  {" "}
                  <span className="font-semibold">Population: </span>{" "}
                  {countryDetails.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>{" "}
                  {countryDetails.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region: </span>
                  {countryDetails.subregion}
                </p>
                <p className="mb-3 md:mb-0">
                  <span className="font-semibold">Capital: </span>{" "}
                  {countryDetails.capital}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  {countryDetails.tld}
                </p>
                <p>
                  <span className="font-semibold">Currencies: </span>
                  {currencies === undefined
                    ? "Not provided"
                    : currencies.map((value) => value.name).join(" , ")}
                </p>
                <p>
                  <span className="font-semibold">Languages: </span>
                  {}
                  {languages === "undefined"
                    ? "Not provided"
                    : languages.map((value) => value).join(" , ")}
                </p>
              </div>
            </div>
            <div className="mt-12">
              <p>
                <span className="font-semibold mr-4">Border Countries:</span>
                {countryDetails.borders === undefined
                  ? "Island (no border countries)"
                  : countryDetails.borders?.map((item, i) => {
                      return (
                        <button
                          key={uuidv4()}
                          className={`text-white rounded-md shadow-md px-5 py-1 mr-2 mb-2 ${
                            isLightTheme ? "lightels" : "darkels"
                          }`}
                          onClick={() => {
                            setCountryCode(item);
                          }}
                        >
                          <Link to={`/country/${i}`}>{item}</Link>
                        </button>
                      );
                    })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
