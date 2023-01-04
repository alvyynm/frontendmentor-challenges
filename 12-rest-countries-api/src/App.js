import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import CountryInfo from "./components/CountryInfo";
import CountryList from "./components/CountryList";
import Navbar from "./components/Navbar";
import { ThemeContextProvider } from "./contexts/DarkModeContext";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [getCountryName, setGetCountryName] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeContextProvider>
              <Navbar />
              <CountryList
                countries={countries}
                setCountries={setCountries}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setGetCountryName={setGetCountryName}
              />
            </ThemeContextProvider>
          }
        />
        <Route
          path="/country/:countryId"
          element={
            <ThemeContextProvider>
              <Navbar />
              <CountryInfo
                countryName={getCountryName}
                setCountries={setCountries}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                getCountryName={getCountryName}
                setGetCountryName={setGetCountryName}
              />
            </ThemeContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
