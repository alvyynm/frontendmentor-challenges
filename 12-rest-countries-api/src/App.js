import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import CountryInfo from "./components/CountryInfo";
import CountryList from "./components/CountryList";

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
            <CountryList
              countries={countries}
              setCountries={setCountries}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setGetCountryName={setGetCountryName}
            />
          }
        />
        <Route
          path="/country/:countryId"
          element={
            <CountryInfo
              countryName={getCountryName}
              setCountries={setCountries}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              getCountryName={getCountryName}
              setGetCountryName={setGetCountryName}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
