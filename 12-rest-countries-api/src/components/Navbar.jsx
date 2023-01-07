import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/DarkModeContext";
import moonDark from "../assets/moon-outline.svg";
import moonLight from "../assets/moon-light.svg";

function Navbar() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`font-primary max-w-[1450px] mx-auto sticky top-0 ${
        isLightTheme ? "lightels" : "darkels"
      }`}
    >
      <div
        className={`w-full border-b  shadow-md ${
          isLightTheme ? "border-gray-300" : "border-dark-elements"
        }`}
      >
        <nav
          className={`flex items-center justify-between w-11/12 mx-auto py-6 ${
            isLightTheme ? "light" : "darkels"
          }`}
        >
          <h2 className="text-2xl font-bold">
            <Link to="/">Where in the world?</Link>
          </h2>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 font-semibold"
          >
            {" "}
            <img
              className="w-7"
              src={isLightTheme ? moonDark : moonLight}
              alt="moon icon"
            />{" "}
            Dark Mode
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
