import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const NavBar = () => {
  const { language, toggleLanguage } = useLanguage();

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
          </>
        )}
        <li>
          <button onClick={toggleLanguage}>change language</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
