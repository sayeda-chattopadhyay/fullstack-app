import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    toggleLanguage(newLanguage);
  };

  return (
    <nav>
      <ul>
        {language === "en" ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>Language</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">hjem</Link>
            </li>
            <li>
              <Link to="/about">Om</Link>
            </li>
            <li>
              <Link to="/articles">artikler</Link>
            </li>
            <li>
              <Link to="/news">Nyheter</Link>
            </li>
            <li>Språk</li>
          </>
        )}
        <select name="" id="" value={language} onChange={handleLanguageChange}>
          <option value="en">En</option>
          <option value="no">No</option>
        </select>
      </ul>
    </nav>
  );
};

export default NavBar;
