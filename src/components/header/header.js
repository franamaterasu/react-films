import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.scss";

const Header = ({
  onSearch,
  onFocus,
  onBlur,
  handleTopClick,
  handleRecentClick,
  handleHomeClick,
  handleThemeClick,
}) => {
  const location = useLocation();

  const { pathname } = location;

  const theme = useContext(ThemeContext);

  return (
    <header className={`header ${theme ? "header--dark" : "header--light"}`}>
      <Link
        onClick={handleHomeClick}
        className={`header__logo ${
          theme ? "header__logo--light" : "header__logo--dark"
        }`}
        to="/"
      >
        ReactFilms
      </Link>
      <section className="header__actions">
        <nav className="header__nav">
          <Link
            onClick={handleHomeClick}
            className={`header__nav-item ${
              pathname === "/" ? "header__nav-item--active" : ""
            } ${theme ? "header__nav-item--light" : "header__nav-item--dark"}`}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={handleTopClick}
            className={`header__nav-item ${
              pathname === "/top" ? "header__nav-item--active" : ""
            } ${theme ? "header__nav-item--light" : "header__nav-item--dark"}`}
            to="/top"
          >
            Top
          </Link>
          <Link
            onClick={handleRecentClick}
            className={`header__nav-item ${
              pathname === "/recents" ? "header__nav-item--active" : ""
            } ${theme ? "header__nav-item--light" : "header__nav-item--dark"}`}
            to="/recents"
          >
            Recents
          </Link>
        </nav>
        <input
          onChange={onSearch}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`header__search ${
            theme ? "header__search--light" : "header__search--dark"
          }`}
          type="text"
          placeholder="Busca cualquier película..."
        />
        <button className="header__theme-selector" onClick={handleThemeClick}>
          {theme ? (
            <BsSun
              className={`header__theme-icon ${
                theme ? "header__theme-icon--light" : ""
              }`}
            />
          ) : (
            <BsMoon
              className={`header__theme-icon ${
                theme ? "header__theme-icon--dark" : ""
              } `}
            />
          )}
        </button>
      </section>
    </header>
  );
};

export default Header;
