import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Global states
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Theme toggler
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
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
