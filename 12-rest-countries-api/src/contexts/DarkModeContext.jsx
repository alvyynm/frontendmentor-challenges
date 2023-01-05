import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Global states
  const [isLightTheme, setIsLightTheme] = useState("");

  // Theme toggler
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  // Save user theme option in localStorage
  useEffect(() => {
    localStorage.setItem("lightTheme", JSON.stringify(isLightTheme));
  }, [isLightTheme]);

  // Check if user has a custom theme selected and use it as the default
  // If user sets lightTheme to true or false, it's rembered in the next visit or page reload

  useEffect(() => {
    const lightTheme = JSON.parse(localStorage.getItem("lightTheme"));
    if (lightTheme === "") {
      // do nothing
    } else if (lightTheme === false) {
      setIsLightTheme(false);
    } else {
      setIsLightTheme(true);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
