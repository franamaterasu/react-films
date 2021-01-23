import React, { useContext } from "react";
import Card from "../card";
import ThemeContext from "../../context/themeContext";
import { useLocation } from "react-router-dom";
import "./grid.scss";

const Grid = (props) => {
  const location = useLocation();

  const { pathname } = location;

  const theme = useContext(ThemeContext);

  const { films, handleMoreClick, handleLessClick, page } = props;

  return (
    <>
      <section className={`grid ${theme ? "grid--dark" : "grid--light"}`}>
        {films.map((film) => (
          <Card key={film.id} cardInfo={film} />
        ))}
      </section>
      {pathname !== "/" ? (
        ""
      ) : (
        <footer
          className={`grid__footer ${theme ? "grid--dark" : "grid--light"}`}
        >
          {page === 1 ? (
            ""
          ) : (
            <button
              className="grid__button grid__button--prev"
              onClick={handleLessClick}
            >
              Prev
            </button>
          )}
          {films.length < 20 ? (
            ""
          ) : (
            <button
              className="grid__button grid__button--next"
              onClick={handleMoreClick}
            >
              Next
            </button>
          )}
        </footer>
      )}
    </>
  );
};

export default Grid;
