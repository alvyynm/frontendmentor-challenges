import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/DarkModeContext";
import pagenotfound from "../assets/undraw_page_not_found.svg";
function Error() {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div
      className={`font-primary h-[90vh] max-w-[1450px] mx-auto ${
        isLightTheme ? "lightels" : "darkels"
      }`}
    >
      <div className="flex flex-col content-center h-full place-content-center w-11/12 mx-auto">
        <img
          className="w-[90%] md:w-[700px] mx-auto"
          src={pagenotfound}
          alt="page not found illustration"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-5">
          You're in the wrong place , boo!
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-center my-5">
          Sorry, it seems the page you're looking for doesn't exist
        </p>
        <button
          type="button"
          className="font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-[140px] mx-auto bg-red-400"
        >
          <Link to="/">Go Home</Link>
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Error;
